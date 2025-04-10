

function getCheckList(){
    console.log('run')
    change_checklist_cat();
}

// var glb_is_checklist_category = false;
var glb_link_checklist_current = '';

function change_checklist_cat(ischange){
    // glb_is_checklist_category = ischange;

    // $('.is-know a').removeClass('active');
    
    

    //var idUserCategory = user_ID;
    var main_key = 'checklist/';
    
    // if (glb_is_checklist_category == true) {
    //     main_key = 'note_category_know/';
    //     $('.is-know .know').addClass('active');
    // }else{
    //     $('.is-know .apply').addClass('active');
    // }
    glb_link_checklist_current = main_key + user_ID;
    getCheckListCategory();
}
function getCheckListCategory(){
    db.collection(glb_link_checklist_current + '/category').get().then((querySnapshot) => {
        // $('#split-0 .list').html('');
        // console.log(querySnapshot.docs)
        var list = {};
        querySnapshot.forEach((doc) => {

            var data = doc.data();
            list[doc.id] = {};
            list[doc.id]['time'] = data.time;
            list[doc.id]['order'] = (typeof data.order != 'undefined' && !isNaN(data.order)) ? parseInt(data.order) : 0;
            list[doc.id]['titleCat'] = data.titleCat;
            list[doc.id]['atTop'] = (typeof data.atTop != 'undefined') ? data.atTop : "";
            list[doc.id]['isHightLight'] = data.isHightLight;
            // console.log(data)

            // var data = doc.data();
            // var str = '<li data-id="' + doc.id + '" onClick="event1_click(this)">' + data.titleCat + '</li>';
            // $('#split-0 .list').append(str);
        });

        var newObjectSort = sortDescObj(list, 'order');
        console.log(newObjectSort)

        let strvl='';
        var index = 0;
        for (var key in newObjectSort) {
            var tem = newObjectSort[key];
            var at_index = index;
            var isHightLight = tem.isHightLight == undefined ? "" : tem.isHightLight;
            var str = '<li data-id="' + key + '" onClick="event1_checklist(this)" at-index="' + at_index + '" at-order="' + tem.order + '"  isHL="' + isHightLight + '">' + tem.titleCat + '</li>';
            //$('#split-0 .list').append(str);
            strvl+= str;
            index++;
        }

        $('#list-checklist-cat').html(strvl)
        console.log(newObjectSort)
        if(index>0){
            $('#list-checklist-cat li').eq(0).trigger('click');
        }
    });
}
var idCheckListCatAt = '';
function event1_checklist(at){
    console.log(at)

    // $('.list-history li').removeClass('active');

    var idCategory = at.getAttribute('data-id');
    idCheckListCatAt = idCategory;
    // idCategory_selected = id;
	//console.log(id)
	// buildLinkNote(id,"")
    getCheckListPost(idCategory);

    // hideShowLoadingEditor(1);

    // $('#split-0 .list li').removeClass('active');
    $(at).addClass('active');
}
function event2_checklist(at){
    console.log(at)

    // $('.list-history li').removeClass('active');

    var idPost = at.getAttribute('data-id');

    let idCategory = idCheckListCatAt;
    let dataIn  = {
        isDone:true,
        // titlePost:'111111111111'
    };
    updateOneCheckList(dataIn, idPost, idCategory)


    // idCategory_selected = id;
	//console.log(id)
	// buildLinkNote(id,"")
    getCheckListPost(idCategory);

    // hideShowLoadingEditor(1);

    // $('#split-0 .list li').removeClass('active');
    // $(at).addClass('active');
}

function getCheckListPost(idCategory) {
    // console.log('note-list-post')

    // var idUserCategory = user_ID;
    db.collection(glb_link_checklist_current + '/category/' + idCategory + '/post').get().then((querySnapshot) => {
        // var listData = querySnapshot.docs;
        // console.log(listData[0].data())
        // $('#split-1 .list').html('');
        var list = {};
        querySnapshot.forEach((doc) => {
            
            var data = doc.data();
            console.log(data);
            list[doc.id] = {};
            list[doc.id]['time'] = data.time;
            list[doc.id]['titlePost'] = data.titlePost;
            list[doc.id]['isHightLight'] = data.isHightLight;
            list[doc.id]['isDone'] = data.isDone;

            // console.log(doc.id, doc.data())

            // var str = '<li data-id="' + doc.id + '" onClick="event2_click(this)">' + data.titlePost + '</li>';
            // $('#split-1 .list').append(str);
        });
        // console.log(list)
        var newObjectSort = sortDescObj(list, 'time');
        console.log('checklist detail')

        console.log(newObjectSort)
        let strvl='';
        var index = 0;
        for (var key in newObjectSort) {
            var tem = newObjectSort[key];
            var at_index = index;
            var isHightLight = tem.isHightLight == undefined ? "" : tem.isHightLight;
            var orderV = tem.order == undefined ? "" : tem.order;
            var isDone = tem.isDone == undefined ? false : tem.isDone;
            let isDoneStr = '';
            if(isDone == true){
                isDoneStr = 'checked';
            }
            var str = '<li data-id="' + key + '" onClick="event2_checklist(this)" at-index="' + at_index + '" at-order="' + orderV + '"  isHL="' + isHightLight + '"><input type="checkbox" name="" id="" '+isDoneStr+'/><span>' + tem.titlePost + '</span><button>delete</button></li>';
            //<li> <input type="checkbox" name="" id=""><span>Title</span><button>delete</button> </li>
            //$('#split-0 .list').append(str);
            strvl+= str;
            index++;
        }

        $('#list-detail-checklist').html(strvl)

    });
}


function testAddCatChecklist(){
    let dataIn={
        'title':'title new 2',
        'order':2,
    }
    addCheckListCategory(dataIn)
}
function testAddaddOneCheckList(){
    // var idCategory = catId;

    // var dataSave = {
        // titlePost: 'test',
        // aliasPost: data.aliasPost!=undefined?data.aliasPost:"",
        // contentPost: data.contentPost!=undefined?data.contentPost:"",
        // isHightLight: data.isHightLight!=undefined?data.isHightLight:"",
        // paint: data.paint!=undefined?data.paint:"",
        // time: new Date().getTime(),
    // };

    let dataIn={
        'catId' : 'YFkDShrscCAxD2hPktfV',
        'title':'content new 2',
        'order':2,
    }
    
    addOneCheckList(dataIn)
}

function addCheckListCategory(dataIn) {
    // var idUserCategory = user_ID;
    db.collection(glb_link_checklist_current + "/category").add({
            titleCat: dataIn.title,
            order: dataIn.order,
            aliasCat: "",
            contentCat: "",
            time: new Date().getTime(),
        })
        .then(function(docRef) {
            // console.log("Document written with ID: ", docRef.id);
            getCheckListCategory();
        })
        .catch(function(error) {
            // console.error("Error adding document: ", error);
            // alert('error add cat');
            getCheckListCategory();
        });
}
function updateCheckListCategory(dataIn) {
    // var idUserCategory = user_ID;
    var batch = db.batch();
    var idCat = idCategory_selected;
    if (typeof dataIn.id != 'undefined') {
        idCat = dataIn.id;
    }
    var sfRef = db.collection(glb_link_checklist_current + "/category").doc(idCat);
    dataSet = dataIn;
    batch.update(sfRef, dataSet);

    batch.commit().then(() => {
        // ...
        console.log('update-done')
        // $('#footer1-1').html('saved');
        // $('#footer1-1').html('reload');
        // reload_list_cat()
        var tem = {};
        tem.catId = idCat;
        if (typeof dataIn.id == 'undefined') {
            getCheckListCategory(tem)
        }
    });

}
function addOneCheckList(data) {
    console.log(data);
    // return;
    // var idUserCategory = user_ID;
    var idCategory = data.catId;

    var dataSave = {
        titlePost: data.title,
        // aliasPost: data.aliasPost!=undefined?data.aliasPost:"",
        // contentPost: data.contentPost!=undefined?data.contentPost:"",
        isHightLight: data.isHightLight!=undefined?data.isHightLight:"",
        order: data.order!=undefined?data.order:"",
        isDone:false,
        time: new Date().getTime(),
    };
    console.log(dataSave);

    db.collection(glb_link_checklist_current + "/category/" + idCategory + '/post').add(dataSave)
        .then(function(docRef) {
            // console.log("Document written with ID: ", docRef.id);
            // reload_list_title();
            getCheckListPost(idCategory)
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            // alert('error, reload');
            // reload_list_title();
            getCheckListPost(idCategory)
        });
}

function updateOneCheckList(dataIn, idPost, idCategory) {
    // var idUserCategory = user_ID;
    // var idCategory = dataIn.catId;
    // var idPost = idPost_selected;
    console.log(dataIn, idPost, idCategory)
    console.log('updateOneCheckList');
    var batch = db.batch();
    if (idCategory == '' || idCategory == "") {
        console.log('idCategory empty');
        return;
    }
    if (idPost == '' || idPost == "") {
        console.log('idPost empty');
        return;
    }

    var sfRef = db.collection(glb_link_checklist_current + "/category/" + idCategory + '/post').doc(idPost);
    var dataUpdate = {};
    if (typeof dataIn.contentPost != 'undefined') {
        dataUpdate.contentPost = dataIn.contentPost;
    }
    if (typeof dataIn.isDone != 'undefined') {
        dataUpdate.isDone = dataIn.isDone;
    }
    if (typeof dataIn.titlePost != 'undefined') {
        dataUpdate.titlePost = dataIn.titlePost;
    }
    if (typeof dataIn.isHightLight != 'undefined') {
        dataUpdate.isHightLight = dataIn.isHightLight;
    }
    console.log(dataIn)
    console.log(dataUpdate)
    // var contentPaint = getPaint();
    // if (contentPaint != null) {
    //     dataUpdate.paint = contentPaint;
    // }
    batch.update(sfRef, dataUpdate);

    batch.commit().then(() => {
        // ...
        console.log('update-post-done')
        // $('#footer3-1').html('saved');
        // hideShowLoadingEditor(0);
        // hideShowLoadingEditor(4);
        // reload_list_post()
        getCheckListPost(idCategory)
    });
}
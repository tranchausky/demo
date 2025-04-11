

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
            list[doc.id]['isDone'] = data.isDone;
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
            var isDone = tem.isDone == undefined ? false : tem.isDone;
            let isDoneStr = '';
            if(isDone == true){
                isDoneStr = 'checked';
            }
            var str = '<li data-id="' + key + '" at-index="' + at_index + '" at-order="' + tem.order + '"  isHL="' + isHightLight + '"><span class="flag" onClick="event1_checklist(this)">⚐</span> <input onclick="return false;" class="checkbox-cl-cat" type="checkbox" '+isDoneStr+'><span class="content" onClick="event1_detail(this)">' + tem.titleCat + '</li>';
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
function event1_checklist(atin){
    let at = $(atin).closest('li');
    console.log(at)

    var idCategory = at.attr('data-id');
    idCheckListCatAt = idCategory;

    var isHL = at.attr('isHL');

    if(isHL == 'false' || isHL == ''){
        isHL = 'true'
    }else{
        isHL = 'false';
    }

    let dataIn  = {
        isHightLight:isHL,
        // titlePost:'111111111111'
    };
    updateCheckListCategory(dataIn,idCategory)
    // getCheckListPost(idCategory);
}
function event1_detail(atin){
    
    $(atin).closest('ul').find('.content').removeClass('active');
    $(atin).addClass('active')

    let at = $(atin).closest('li');
    // console.log(at)

    var idCategory = at.attr('data-id');

    idCheckListCatAt = idCategory;


    $('#in-cat-checkbox').val($(atin).html());
    $('#in-cat-checkbox').attr('data-id',idCategory);

    // idCheckListCatAt = idCategory;

    // var isHL = at.attr('isHL');

    // if(isHL == 'false'){
    //     isHL = 'true'
    // }else{
    //     isHL = 'false';
    // }

    // let dataIn  = {
    //     isHightLight:isHL,
    //     // titlePost:'111111111111'
    // };
    // updateCheckListCategory(dataIn,idCategory)
    getCheckListPost(idCategory);
    $('#in-post-checkbox').val('').trigger('change');
}

function event2_checklist(atin){
    let at = $(atin).closest('li')
    console.log(at)
    var idPost = at.attr('data-id');
    var isHL = at.attr('isHL');

    if(isHL == 'false'){
        isHL = 'true'
    }else{
        isHL = 'false';
    }

    let idCategory = idCheckListCatAt;
    let dataIn  = {
        isHightLight:isHL,
        // titlePost:'111111111111'
    };
    updateOneCheckList(dataIn, idPost, idCategory)
    getCheckListPost(idCategory);

    var text= $(at).find('.content').html();
    $('#in-post-checkbox').val(text).trigger('change');
    $('#in-post-checkbox').attr('data-id',idPost);

}
function deletePostCheck(atin){
    let at = $(atin).closest('li')
    console.log(at)
    var idPost = at.attr('data-id');
    let text = "Do You Want Delete It!\nEither OK or Cancel.";
    if (confirm(text) == true) {
        //text = "You pressed OK!";
        let idCategory = idCheckListCatAt;
        toDeletePostCheckList(idPost,idCategory);
    } else {
       // text = "You canceled!";
    }

}
function event2_checklist_view(atin){

    $(atin).closest('ul').find('.content').removeClass('active');
    $(atin).addClass('active')

    let at = $(atin).closest('li')
    console.log(at)
    var idPost = at.attr('data-id');
    var text= $(at).find('.content').html();
    $('#in-post-checkbox').val(text).trigger('change');
    $('#in-post-checkbox').attr('data-id',idPost);
}

function toDeletePostCheckList(idKey,idCategory){

    // db.collection(glb_link_checklist_current + "/category/" + idCategory + '/post').add(dataSave)

    let atDelete = glb_link_checklist_current + "/category/" + idCategory + '/post/' + idKey;
    console.log(atDelete);
    var atRef = dbRef.ref(atDelete)
    atRef.remove()
        .then(() => {
            console.log("Data removed successfully.");
            getCheckListPost(idCategory) 
        })
    .catch((error) => {
        console.error("Remove failed: ", error.message);
        getCheckListPost(idCategory) 
    });
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
            var str = '<li data-id="' + key + '" at-index="' + at_index + '" at-order="' + orderV + '"  isHL="' + isHightLight + '"><span class="flag" onclick="event2_checklist(this)">⚐</span><input class="checkbox-checklist" type="checkbox" name="" id="" '+isDoneStr+'/><span class="content" onClick="event2_checklist_view(this)">' + tem.titlePost + '</span><button onClick="deletePostCheck(this)" class="dlt-checklist-post">delete</button></li>';
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
        'titleCat':'title new 2',
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
        'titlePost':'content new 2',
        'order':2,
    }
    
    addOneCheckList(dataIn)
}

function addCheckListCategory(dataIn) {
    // var idUserCategory = user_ID;
    db.collection(glb_link_checklist_current + "/category").add({
            titleCat: dataIn.titleCat,
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
function updateCheckListCategory(dataIn,idCategory) {
    // var idUserCategory = user_ID;
    var batch = db.batch();
    var idCat = idCategory;
    console.log(dataIn,idCategory);
    // if (typeof dataIn.id != 'undefined') {
    //     idCat = dataIn.id;
    // }
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
        titlePost: data.titlePost,
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
        if(dataIn.isHightLight == ''){
            dataIn.isHightLight = false;
        }
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

$(document).ready(function(){
    //cb-cl
    $(document.body).on('click', '.checkbox-cl-cat[type="checkbox"]', function (event) {
        // var isCheck = $(this).is(":checked");
        // let at = $(this).closest('li');
        // console.log(at)    
        // var idCategory = at.attr('data-id');
    
        // // let idCategory = idCheckListCatAt;
        // let dataIn  = {
        //     isDone:isCheck,
        // };
        // updateCheckListCategory(dataIn, idCategory);
        // getCheckListPost(idCategory);
        // getCheckListPost(idCategory);
    });
    $(document.body).on('click', '.checkbox-checklist[type="checkbox"]', function (event) {
        var isCheck = $(this).is(":checked");
        let at = $(this).closest('li');
        console.log(at)    
        var idPost = at.attr('data-id');
    
        let idCategory = idCheckListCatAt;
        let dataIn  = {
            isDone:isCheck,
        };
        updateOneCheckList(dataIn, idPost, idCategory)
        getCheckListPost(idCategory);
        //
        let isCatCheckDone = false;
        if(isCheck == false){
            //
        }else{
            //true
            //leng check and size
            let ttchecked = $('#list-detail-checklist .checkbox-checklist:checked').length;
            let size = $('#list-detail-checklist li').length;
            if(ttchecked == size){
                isCatCheckDone = true;
            }
        }
        // let datacatDone = {
        //     isDone: isCatCheckDone
        // }
        // let idCategory = idCheckListCatAt;
        let datacatDone  = {
            isDone:isCatCheckDone,
        };
        updateCheckListCategory(datacatDone, idCategory);

    })
    $('#ckl-cat-update').click(function(){
        let text = $('#in-cat-checkbox').val()
        let idCategory = $('#in-cat-checkbox').attr('data-id')
        let dataIn  = {
            titleCat:text,
        };
        updateCheckListCategory(dataIn, idCategory);
    });
    $('#ckl-cat-add').click(function(){
        let text = $('#in-cat-checkbox').val()
        // let idCategory = $('#in-cat-checkbox').attr('data-id')
        let dataIn  = {
            titleCat:text,
            order:1,
        };
        // updateCheckListCategory(dataIn, idCategory);
        addCheckListCategory(dataIn);
    });

    $('#ckl-post-add').click(function(){
        let text = $('#in-post-checkbox').val();
        // let idCategory = $('#in-cat-checkbox').attr('data-id')
        
        let dataIn={
            'catId' : idCheckListCatAt,
            'titlePost':text,
            'order':2,
            isHightLight:false
        }
        
        addOneCheckList(dataIn)

    });
    $('#ckl-post-update').click(function(){
        var idPost = $('#in-post-checkbox').attr('data-id');
        var text = $('#in-post-checkbox').val();
    
        let idCategory = idCheckListCatAt;
        let dataIn  = {
            'titlePost':text,
        };
        updateOneCheckList(dataIn, idPost, idCategory)
    });
    $(document.body).on('change', '#in-post-checkbox', function (event) {
        let vl = $(this).val();
        console.log(vl)
        if(vl == ''){
            $('#ckl-post-update').hide()
            // $('#ckl-post-add').hide();
        }else{
            let atid = $(this).attr('data-id');
            if(atid == ''){
                $('#ckl-post-update').hide();
                // $('#ckl-post-add').show()
            }else{
                $('#ckl-post-update').show()
                // $('#ckl-post-add').show()
            }
        }
    })
})
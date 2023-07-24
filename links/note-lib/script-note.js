// firebase.initializeApp({
//     apiKey: 'AIzaSyAuPuaJCP08o5JKW09F1XUWAy5GIiJ_cf8',
//     authDomain: 'link-save-d79c8.firebaseapp.com',
//     projectId: 'link-save-d79c8'
// });

//getListNotes()




var db = firebase.firestore();
var glb_password_hash = '';

var sizes = localStorage.getItem('split-sizes');
if (sizes) {
    sizes = JSON.parse(sizes);
} else {
    sizes = [15, 25, 60]; // default sizes
}
var instanceSplit;
// https://github.com/nathancahill/split/tree/master/packages/splitjs#installation
// loadDefaultViewNote();
instanceSplit = Split(['#split-0', '#split-1', '#split-2'], {
    sizes: sizes,
    minSize: 100,
    maxSize: 1000,
    gutterSize: 5,
    snapOffset: 1,
    onDragEnd: function (sizes) {
        localStorage.setItem('split-sizes', JSON.stringify(sizes))
    },
});
function loadDefaultViewNote(){
    instanceSplit.setSizes(sizes);
}


var last_select_note_cat = 0;
var idLastClickDetail = '';

/*
const editorText = KothingEditor.create("editor", {
    display: "block",
    width: "100%",
    height: "auto",
    popupDisplay: "full",
    katex: katex,
    toolbarItem: [
        ["undo", "redo"],
        ["font", "fontSize", "formatBlock"],
        [
            "bold",
            "underline",
            "italic",
            "strike",
            "subscript",
            "superscript",
            "fontColor",
            "hiliteColor",
        ],
        ["outdent", "indent", "align", "list", "horizontalRule"],
        ["link", "table", "image", "audio", "video"],
        ["lineHeight", "paragraphStyle", "textStyle"],
        ["showBlocks", "codeView"],
        ["math"],
        ["preview", "print", "fullScreen"],
        ["save", "template"],
        ["removeFormat"],
    ],
    callBackSave: function(data) {
        event3_save();
    },
    templates: [{
            name: "Template-1",
            html: "<p>HTML source1</p>",
        },
        {
            name: "Template-2",
            html: "<p>HTML source2</p>",
        },
    ],
    charCounter: true,
});
*/



function getListNotes() {
    //getNoteListCategory()
    change_note_cat(false);
}

function hideShowLoadingEditor(is_show) {
    //var is_show = $('.full-loading').is(":visible");
    // if (is_show == 1) {
    //     $('.full-loading').show();
    // } else {
    //     $('.full-loading').hide();
    // }
    switch (is_show) {
        case 1:
            $('.full-loading').show();
            $('#split-2 .content').show();
            break;
        case 0:
            $('.full-loading').hide();
            $('#split-2 .content').show();
            break;
        case 2:
            $('.full-loading').hide();
            $('#split-2 .content').hide();
            break;
        case 3:
            $('.full-saveing').show();
            $('#split-2 .content').hide();
            break;
        case 4:
            $('.full-saveing').hide();
            $('#split-2 .content').show();
            break;

        default:
            break;
    }

}

var listCategoryNote = {};

var glb_is_note_category = false;
var glb_link_note_current = '';

function change_note_cat(ischange){
    glb_is_note_category = ischange;

    $('.is-know a').removeClass('active');
    
    

    //var idUserCategory = user_ID;
    var main_key = 'note_category/';
    
    if (glb_is_note_category == true) {
        main_key = 'note_category_know/';
        $('.is-know .know').addClass('active');
    }else{
        $('.is-know .apply').addClass('active');
    }
    glb_link_note_current = main_key + user_ID;
    getNoteListCategory();
}

function getNoteListCategory() {
    // console.log('note-list-cat')
    
    
    db.collection(glb_link_note_current + '/category').get().then((querySnapshot) => {
        $('#split-0 .list').html('');
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
        // var newObjectSort = sortDescObj(list, 'order');
        var newObjectSort = sortDescObj(list, 'order');
        listCategoryNote = newObjectSort;
        var index = 0;
        for (var key in newObjectSort) {
            var tem = newObjectSort[key];
            var at_index = index;
            var isHightLight = tem.isHightLight == undefined ? "" : tem.isHightLight;
            var str = '<li data-id="' + key + '" onClick="event1_click(this)" at-index="' + at_index + '" at-order="' + tem.order + '"  isHL="' + isHightLight + '">' + tem.titleCat + '</li>';
            $('#split-0 .list').append(str);
            index++;
        }
        if ($('#split-0 .list li').length > 0) {
            const myTimeout = setTimeout(function(){
                $('#split-0 .list li').eq(0).trigger('click');
            }, 500);
            
        }
        setTotalFooter1(Object.keys(newObjectSort).length);
        focus_category_reload(last_select_note_cat);
        last_select_note_cat = 0;
    });
}

function deleteNoteCategory(idCategory) {
    var idUserCategory = user_ID;
    db.collection(glb_link_note_current + '/category/' + idCategory).delete().then(() => {
        // console.log("Document cat successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}


var idCategory_selected = '';
var idPost_selected = '';

function getNoteListPost(idCategory) {
    // console.log('note-list-post')

    var idUserCategory = user_ID;
    db.collection(glb_link_note_current + '/category/' + idCategory + '/post').get().then((querySnapshot) => {
        // var listData = querySnapshot.docs;
        // console.log(listData[0].data())
        $('#split-1 .list').html('');
        var list = {};
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            list[doc.id] = {};
            list[doc.id]['time'] = data.time;
            list[doc.id]['titlePost'] = data.titlePost;
            list[doc.id]['isHightLight'] = data.isHightLight;

            // console.log(doc.id, doc.data())

            // var str = '<li data-id="' + doc.id + '" onClick="event2_click(this)">' + data.titlePost + '</li>';
            // $('#split-1 .list').append(str);
        });
        // console.log(list)
        var newObjectSort = sortDescObj(list, 'time');
        var selecteAtTop = (typeof listCategoryNote[idCategory]['atTop'] != '') ? listCategoryNote[idCategory]['atTop'] : "";
        for (var key in newObjectSort) {
            //const element = array[index];
            var tem = newObjectSort[key];
            var isHightLight = tem.isHightLight == undefined ? "" : tem.isHightLight;

            var str = '<li data-id="' + key + '" onClick="event2_click(this)" isHL="' + isHightLight + '">' + tem.titlePost + '</li>';
            if (selecteAtTop == key) {
                str = '<li data-id="' + key + '" onClick="event2_click(this)" class="booked" isHL="' + isHightLight + '">' + tem.titlePost + '</li>';
            }

            $('#split-1 .list').append(str);
        }
        if ($('#split-1 .list li').length > 0) {
            //trigger click here
            if(idLastClickDetail != ''){
                $('#split-1 .list').find(`li[data-id='`+idLastClickDetail+`']`).trigger('click');
                idLastClickDetail = '';
            }else{
                idPost_selected = Object.keys(newObjectSort)[0];
                $('#split-1 .list li').eq(0).trigger('click');
            }
            
            hideShowLoadingEditor(1);
        }else{
            hideShowLoadingEditor(2);
        }
        setTotalFooter2(Object.keys(newObjectSort).length);

    });
}

function getNoteCategory(dataId) {
    var idUserCategory = user_ID;
    var idCategory = dataId.catId;
    // var idPost = dataId.postId;
    // console.log(dataId)
    // console.log(idCategory)

    db.collection(glb_link_note_current + '/category').doc(idCategory).get().then((doc) => {
        if (doc.exists) {
            // console.log("Document data:", doc.data());
            var docData = doc.data();
            // $('#kothing-editor_editor').html(docData.contentPost);
            $('#split-0 .list li.active').html(docData.titleCat);

        } else {
            // doc.data() will be undefined in this case
            // console.log("No such document!");
        }
        $('#footer1-1').html('loaded');
    }).catch((error) => {
        console.log("Error getting document:", error);
        $('#footer1-1').html('loaded');
    });
}

var paintContent = '';
var activePostValue = null;
function getNotePost(dataId, at) {
    var idUserCategory = user_ID;
    var idCategory = dataId.catId;
    var idPost = dataId.postId;

    db.collection(glb_link_note_current + '/category/' + idCategory + '/post').doc(idPost).get().then((doc) => {
        if (doc.exists) {
            //console.log("Document data:", doc.data());
            var docData = doc.data();
            activePostValue = docData;
            //$('#kothing-editor_editor .kothing-editor-editable').html(docData.contentPost);
            //editorText.setContents(docData.contentPost);

            let editorSet = sceditor.instance(editor_note_show);
            editorSet.setWysiwygEditorValue(docData.contentPost);
            lastMd5 = fMD5(docData.contentPost);

            paintContent = null;
            var paint = '';
            $('#image_preview').hide();
            if(typeof docData.paint != 'undefined' && docData.paint != "" && docData.paint != undefined ){
                paint = docData.paint;
                paintContent = paint;
                paint = JSON.parse(paint.replace(/&quot;/g,'"'));
                $('#image_preview').attr('src',paint);
                $('#image_preview').show();
            }

            $(at).html(docData.titlePost);

            setPreviewDetail(docData.titlePost,docData.contentPost,paint);

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        $('#footer3-1').html('loaded');
        hideShowLoadingEditor(0);
    }).catch((error) => {
        console.log("Error getting document:", error);
        $('#footer3-1').html('loaded error');
        hideShowLoadingEditor(0);
    });
}

function setPreviewDetail(title,content,src){
    $('#image_preview_double img').hide();

    if($('#image_preview').is(':visible')) {
        // var src = $('#image_preview').attr('src');
        $('#image_preview_double img').attr('src',src);
        $('#image_preview_double img').show();
    }

    
    $('#content-preview').html(content);

    
    $('#title-preview').html(title);
}

function setForPreview(){
    var title = $('#split-1 .content li.active').html();
    let edirotObj = sceditor.instance(editor_note_show);
    var content = edirotObj.getBody().innerHTML;
    var src = $('#image_preview').attr('src');

    setPreviewDetail(title,content,src);

    $('#my-detail-view').modal('show');
}

function setViewExcelLink(link_excel){
    if(link_excel=='' || link_excel == undefined){
        link_excel = $('#value-link-excel').val();
        if(link_excel==''){
            link_excel  = $('#setting_gg_excel').val();
        }
    }
    //var link_excel = 'https://docs.google.com/spreadsheets/d/16QM4ZuArg_QHk69Eerk_ghsIRtTJC_0bT0ZhEX05ne8/edit';
    $('#myIframe-exit').attr('src',link_excel);
    $('#my-view-excel').modal('show');
}
function empty_excel_iframe(){
    $('#myIframe-exit').attr('src','');
}

function iframeDidLoad(){
    console.log('load done')
}

function goBackDetailPreview(){
    var indexat =li2_index-1;
	if(li2_index ==0){
		return;
	}

	var element = $('#split-1 ol.list li').eq(indexat);
	if(element.length != 0){
		$('#split-1 ol.list li').removeClass('active');
		element.trigger('click');

		// var attop = element.position().top;
		// $('#split-1 .content').scrollTop(attop);
	}
}
function goNextDetailPreview(){
    // li2_index

    var next =li2_index+1;
	
	var element = $('#split-1 ol.list li').eq(next);
	if(element.length != 0){
		$('#split-1 ol.list li').removeClass('active');
		element.trigger('click');
		
		// var attop = element.position().top;
		// $('#split-1 .content').scrollTop(attop);

	}else{
		//nextpage
		// var total_feed = $('#length-content-1-total').html();
		// total_feed = parseInt(total_feed) - 1;
		// if(next < total_feed){
		// 	// page_feed++;
		// 	getFeed();
		// 	// event2_next();
		// }
	}
}

function deleteNotePost(idCategory, idPost) {
    var idUserCategory = user_ID;
    db.collection(glb_link_note_current + '/category/' + idCategory + '/post').doc(idPost).delete().then(() => {
        // console.log("Document post successfully deleted!");
        reload_list_title();
    }).catch((error) => {
        console.error("Error removing document: ", error);
        alert('delete post false, reload')
        reload_list_title();
    });
}

function addNoteCategory(dataIn) {
    var idUserCategory = user_ID;
    db.collection(glb_link_note_current + "/category").add({
            titleCat: dataIn.title,
            order: dataIn.order,
            aliasCat: "",
            contentCat: "",
            time: new Date().getTime(),
        })
        .then(function(docRef) {
            // console.log("Document written with ID: ", docRef.id);
            getNoteListCategory();
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            alert('error add cat');
            getNoteListCategory();
        });
}

function updateNoteCategory(dataIn) {
    var idUserCategory = user_ID;
    var batch = db.batch();
    var idCat = idCategory_selected;
    if (typeof dataIn.id != 'undefined') {
        idCat = dataIn.id;
    }
    var sfRef = db.collection(glb_link_note_current + "/category").doc(idCat);
    dataSet = dataIn;
    batch.update(sfRef, dataSet);

    batch.commit().then(() => {
        // ...
        console.log('update-done')
        $('#footer1-1').html('saved');
        $('#footer1-1').html('reload');
        // reload_list_cat()
        var tem = {};
        tem.catId = idCat;
        if (typeof dataIn.id == 'undefined') {
            getNoteCategory(tem)
        }
    });

}

function addNoteTitle(data) {
    console.log(data);
    // return;
    var idUserCategory = user_ID;
    var idCategory = data.catId;

    var dataSave = {
        titlePost: data.title,
        aliasPost: data.aliasPost!=undefined?data.aliasPost:"",
        contentPost: data.contentPost!=undefined?data.contentPost:"",
        isHightLight: data.isHightLight!=undefined?data.isHightLight:"",
        paint: data.paint!=undefined?data.paint:"",
        time: new Date().getTime(),
    };
    console.log(dataSave);

    db.collection(glb_link_note_current + "/category/" + idCategory + '/post').add(dataSave)
        .then(function(docRef) {
            // console.log("Document written with ID: ", docRef.id);
            reload_list_title();
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            alert('error, reload');
            reload_list_title();
        });
}

function updateNotePost(dataIn) {
    var idUserCategory = user_ID;
    var idCategory = idCategory_selected;
    var idPost = idPost_selected;
    var batch = db.batch();
    if (idCategory == '' || idCategory == "") {
        return;
    }
    if (idPost == '' || idPost == "") {
        return;
    }

    var sfRef = db.collection(glb_link_note_current + "/category/" + idCategory + '/post').doc(idPost);
    var dataUpdate = {};
    if (typeof dataIn.contentPost != 'undefined') {
        dataUpdate.contentPost = dataIn.contentPost;
    }
    if (typeof dataIn.titlePost != 'undefined') {
        dataUpdate.titlePost = dataIn.titlePost;
    }
    if (typeof dataIn.isHightLight != 'undefined') {
        dataUpdate.isHightLight = dataIn.isHightLight;
    }
    var contentPaint = getPaint();
    if (contentPaint != null) {
        dataUpdate.paint = contentPaint;
    }
    batch.update(sfRef, dataUpdate);

    batch.commit().then(() => {
        // ...
        // console.log('update-post-done')
        $('#footer3-1').html('saved');
        // hideShowLoadingEditor(0);
        hideShowLoadingEditor(4);
        reload_list_post()
    });
}

//1111
function event1_add() {
    var answer = prompt('Add Category?', 'New category');
    if (answer == null) {
        return;
    }
    var data = {};
    data.title = answer;
    data.order = $('.list-category-note li').length + 1
    addNoteCategory(data);
}

function event1_edit() {
    var text = $('#split-0 .list li.active').html();
    var answer = prompt('Category Edit?', text);
    if (answer == null) {
        return;
    }


    // var answer = prompt('Title Edit?', text);
    // if (answer == null) {
    //     return;
    // }
    // console.log(answer)
    var data = {};
    // var str = $('#kothing-editor_editor').html();
    data.titleCat = answer;
    updateNoteCategory(data);
}

function event1_at_multi() {

    var isHight = $('#split-0 .list li.active').attr('isHL');
    console.log(isHight);
    var data = {};
    data.isHightLight = false;
    if (isHight == undefined || isHight == "false") {
        data.isHightLight = true;
    }

    updateNoteCategory(data);
    getNoteListCategory();
    // getNoteListPost(idCategory_selected);
}

function up_cat_node() {
    var data = {};
    // var str = $('#kothing-editor_editor').html();
    var at_active = $('#split-0 .list li.active');
    var at_id = at_active.attr('data-id');
    var at_order = at_active.attr('at-order');
    var at_index = at_active.index();

    var at_next_index = at_index - 1;
    var at_next = $('#split-0 .list li').eq(at_next_index);
    var at_next_id = at_next.attr('data-id');
    var at_next_order = at_next.attr('at-order');

    var lengthLi = $('#split-0 .list li').length;

    // console.log(at_id, at_order, at_index);
    // console.log(at_next_id, at_next_order);

    var data = {};
    data.id = at_id;
    data.order = lengthLi - at_index;
    updateNoteCategory(data);

    var data = {};
    data.id = at_next_id;
    data.order = lengthLi - at_index - 1;
    updateNoteCategory(data);

    last_select_note_cat = at_next_index;
    reload_list_cat();
    //trigger click last

}

function down_cat_node() {
    var data = {};
    // var str = $('#kothing-editor_editor').html();
    var at_active = $('#split-0 .list li.active');
    var at_id = at_active.attr('data-id');
    var at_order = at_active.attr('at-order');
    var at_index = at_active.index();

    var at_next_index = at_index + 1;
    var at_next = $('#split-0 .list li').eq(at_next_index);
    var at_next_id = at_next.attr('data-id');
    var at_next_order = at_next.attr('at-order');

    var lengthLi = $('#split-0 .list li').length;

    // console.log(at_id, at_order, at_index);
    // console.log(at_next_id, at_next_order);

    var data = {};
    data.id = at_id;
    data.order = lengthLi - at_index;
    updateNoteCategory(data);

    var data = {};
    data.id = at_next_id;
    data.order = lengthLi - at_index + 1;
    updateNoteCategory(data);

    last_select_note_cat = at_next_index;
    reload_list_cat();
    //trigger click last
}

function focus_category_reload(at_index) {
    $('#split-0 .list li').removeClass('active');
    $('#split-0 .list li').eq(at_index).addClass('active');
    // $('#split-0 .list li.active').trigger('click');
}

function update_cat_sort_all() {
    var list = $('#split-0 .list li');
    $.each(list, function() {
        var at_id = $(this).attr('data-id');
        var order_show = list.length - $(this).attr('at-index');
        var data = {};
        data.id = at_id;
        data.order = order_show;
        console.log(data)
        updateNoteCategory(data);
    })
}

function event1_delete() {
    var answer = confirm('Do you want delete Category?');
    if (answer == null) {
        return;
    }
    // console.log(answer)
}

function event1_click(at) {
    // console.log(at)
    $('.list-history li').removeClass('active');

    var id = at.getAttribute('data-id');
    idCategory_selected = id;
    getNoteListPost(id);

    // hideShowLoadingEditor(1);

    $('#split-0 .list li').removeClass('active');
    $(at).addClass('active');
}

//2222
function event2_add() {
    var answer = prompt('Add title?', 'Joe Blogg');
    if (answer == null) {
        return;
    }
    // console.log(answer)
    var data = {};
    data.title = answer;
    data.catId = idCategory_selected;
    addNoteTitle(data);
}

function reload_list_title() {
    $('#split-0 .list li.active').trigger('click');
}

function reload_list_post() {
    $('#split-1 .list li.active').trigger('click');
}

function reload_list_cat() {
    getNoteListCategory();
}

function event2_edit() {
    var text = $('#split-1 .list li.active').html();
    var answer = prompt('Title Edit?', text);
    if (answer == null) {
        return;
    }
    // console.log(answer)
    var data = {};
    var str = $('#kothing-editor_editor .kothing-editor-editable').html();
    data.titlePost = answer;
    updateNotePost(data);
}

function event2_at_multi() {
    var isHight = $('#split-1 .list li.active').attr('isHL');
    console.log(isHight);
    var data = {};
    data.isHightLight = false;
    if (isHight == undefined || isHight == "false") {
        data.isHightLight = true;
    }
    // var text = $('#split-1 .list li.active').html();
    // var answer = prompt('Title Edit?', text);
    // if (answer == null) {
    //     return;
    // }
    // console.log(answer)

    // var str = $('#kothing-editor_editor .kothing-editor-editable').html();
    updateNotePost(data);
    getNoteListPost(idCategory_selected);
}

function showMoveTaskToCategory(){

    var list = $('.list-category-note').html();
    list = list.replaceAll('event1_click', 'event1_move_click');
    list = list.replaceAll('class="active"', 'class="active old"');

    $('#list-old-category ul').html(list);
    var text = $('#split-1 .list .active').html();
    $('#title-note-at-move').html(text);

    $('#my-list-note-category').modal('show');
}
function moveTaskToCategory(){
    var atIdMove = $('#list-old-category .active').attr('data-id');

    var data = activePostValue;
    // data.title = answer;
    data.catId = atIdMove;
    data.title = data.titlePost;
    addNoteTitle(data);

    //add for new older

    //add value  = activePostValue
    
    //delete old
    var idCategory = idCategory_selected;
    var idPost = idPost_selected;
    deleteNotePost(idCategory, idPost)

    $('#my-list-note-category').modal('hide');
}
function event1_move_click(at){
    var dataat = $(at).attr('data-id');
    $(at).closest('ul').find('li').removeClass('active');
    $(at).addClass('active')
    // alert(dataat)
}

function event2_delete() {
    var answer = confirm('Do you want delete Post?');
    // console.log(answer)
    if (answer == true) {
        var idCategory = idCategory_selected;
        var idPost = idPost_selected;
        deleteNotePost(idCategory, idPost)
    }
}
//set icon bookmark at same, at here
//set update categgory top Id
function event2_at() {
    var data = {};
    data.atTop = idPost_selected;

    if (listCategoryNote[idCategory_selected]['atTop'] == idPost_selected) {
        var data1 = {};
        data1.atTop = "";
        updateNoteCategory(data1);
        listCategoryNote[idCategory_selected]['atTop'] = "";
        // $('.split-1 .list li').removeClass('booked');
        //return;
    } else {
        updateNoteCategory(data);
        var idCat = idCategory_selected;
        listCategoryNote[idCat]['atTop'] = idPost_selected;
    }

    reload_list_title()

}

var li2_index = 0;
function event2_click(at) {

    var id = at.getAttribute('data-id');

    var listItem = $('li[data-id="'+id+'"]');
    li2_index = $( "#split-1 .list li" ).index( listItem );


    idPost_selected = id;
    var data = {};
    data.catId = idCategory_selected;
    data.postId = idPost_selected;


    $('#split-1 .list li').removeClass('active');
    $(at).addClass('active');

    $('#footer3-1').html('loading');
    hideShowLoadingEditor(1);
    // console.log(data)
    getNotePost(data, at);

}

//33333
var lastMd5 = '';
function event3_save() {
    let edirotObj = sceditor.instance(editor_note_show);
    var str = edirotObj.getBody().innerHTML
    var str1 = edirotObj.val();
    // console.log(str)
    // console.log(str1)
    var newMd5 = fMD5(str1).trim();
    // console.log(newMd5);
    if(newMd5 === lastMd5){
        return;
    }else{
        // console.log('not equa')
        // console.log(lastMd5)
        // console.log(newMd5)
        // console.log('not equa')
    }
    setOneHistory();
    lastMd5 = newMd5;
    // console.log('save--',newMd5,lastMd5);
    $('#footer3-1').html('saving...');
    hideShowLoadingEditor(3);
    var data = {};
    //var str = $('#kothing-editor_editor .kothing-editor-editable').html();


    data.contentPost = str;
    updateNotePost(data);
}

function event3_view() {
    let edirotObj = sceditor.instance(editor_note_show);
    var content = edirotObj.getBody().innerHTML
    var content1 = edirotObj.getBody().innerText
        // console.log(content)
        // console.log(content1)
    buildLeftRight(content1)
}

function event3_paint() {
    var idPost = idPost_selected;
    if(paintContent != null){
        setPaint(paintContent)
    }
    openInNewTab('mspaint/index_paint.html#local:'+idPost);
}
function setPaint(str){
    var idPost = idPost_selected;
    localStorage.setItem("image#"+idPost, str);
}
function removePaint(){
    var idPost = idPost_selected;
    localStorage.removeItem("image#"+idPost);
}
var is_open_paint = 0;
function openInNewTab(href){
    is_open_paint = 1;
    Object.assign(document.createElement('a'), {
        target: '_blank',
        rel: 'noopener noreferrer',
        href: href,
    }).click();
}
function getPaint() {
    var idPost = idPost_selected;
    var datanew = localStorage.getItem("image#"+idPost);
    removePaint();
    return datanew;
}

function buildLeftRight(strData) {

    localStorage.setItem('data_left_right', strData);
    window.open("view.html");

}

function setTotalFooter2(num) {
    $('#split-1 .footer .footer-sp-right').html(num);
}

function setTotalFooter1(num) {
    $('#split-0 .footer .footer-sp-right').html(num);
}

function buildDrawpDropForNote() {
    $('.list-category-note li').arrangeable({
        dragSelector: '.move',
        dragEndEvent: function() {
            // alert('Drag End');
            console.log('Drag End');
            console.log($(this))
        }
    });
}

function updateSettingUser(){
    var dataIn = getSetDataUpdate(0,null);
    
    var batch = db.batch();

    var atIdSetting = user_ID;
    var linkGet = "user/" + user_ID + '/setting';
    var sfRef = db.collection(linkGet).doc(atIdSetting);
    dataSet = dataIn;
    batch.set(sfRef, dataSet);

    batch.commit().then(() => {
        alert('Save Done')
        console.log('update-done');

    });

}
function getSetDataUpdate(isSet,dataIn){
    // console.log(dataIn)
    if(isSet == 1){
        $('#setting_gg_excel').val(dataIn.gg_excel!=undefined?dataIn.gg_excel:"");
        $('#setting_pw_hash').val(dataIn.pw_hash!=undefined?dataIn.pw_hash:"");
        glb_password_hash = dataIn.pw_hash!=undefined?dataIn.pw_hash:"";
    }else{
        var data = {};
        data.gg_excel = $('#setting_gg_excel').val();

        var pwhash = $('#setting_pw_hash');
        if(pwhash.attr('data-is-old') == 'false'){
            data.pw_hash = pwhash.attr('pw_hash')?pwhash.attr('pw_hash'):"";
        }else{
            data.pw_hash = pwhash.val()?pwhash.val():"";
        }

        return data;
    }
}


function getSettingUser(){
    var linkGet = "user/" + user_ID + '/setting';
    var atIdSetting = user_ID;
    db.collection(linkGet).doc(atIdSetting).get().then((querySnapshot) => {

        getSetDataUpdate(1,querySnapshot.data());
       // querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`);
            // console.log(`${doc.id} => ${doc.data()}`);
          //  console.log(doc.id, doc.data())
        //});
    }).catch(function(error) {

        //set setting empty
        var batch = db.batch();
 
        var atIdSetting = user_ID;
        var linkGet = "user/" + user_ID + '/setting';
        var sfRef = db.collection(linkGet).doc(atIdSetting);
        dataSet = {};
        batch.set(sfRef, dataSet);

        batch.commit().then(() => {
  
            console.log('update-done');

        });
    });;
}

function goLoHistory(at){
    let editorSet = sceditor.instance(editor_note_show);
    editorSet.setWysiwygEditorValue('');

    $(at).addClass('active');
    getListDataHistory(1);
}

var listIdSaveHistory = [];
var maxHistory = 100;
function getListDataHistory(isShow){
    // var idUserCategory = user_ID;
    db.collection(glb_link_note_current + '/category_history/').get().then((querySnapshot) => {
        // var listData = querySnapshot.docs;
        // console.log(listData[0].data())
        
        var list = {};
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            list[doc.id] = {};
            list[doc.id]['time'] = data.time;
            var timesave = new Date(data.time);
            list[doc.id]['title'] = data.title + " ("+timesave.getDate()+'/'+timesave.getMonth()+ " "+timesave.getHours()+":"+timesave.getMinutes()+")";
            list[doc.id]['idCat'] = data.idCat;
            list[doc.id]['idCatDetail'] = data.idCatDetail;
            // list[doc.id]['isHightLight'] = data.isHightLight;

        });
        // console.log(list);

        var newObjectSort = sortDescObj(list, 'time');
        // var selecteAtTop = (typeof listCategoryNote[idCategory]['atTop'] != '') ? listCategoryNote[idCategory]['atTop'] : "";
        var indexAuto = 1;
        var str = '';
        for (var key in newObjectSort) {
            if(indexAuto >maxHistory ){
                deleteOneHistory(key);
                continue;
            }
            listIdSaveHistory.push(key);
            //const element = array[index];
            var tem = newObjectSort[key];
            var isHightLight = "";
            var catId = tem.idCat;
            var catDetail = tem.idCatDetail;

            str += '<li index="' + key + '" catid="'+catId+'" catdetail="'+catDetail+'" onClick="eventlistTory_click(this)" isHL="' + isHightLight + '">' + tem.title + '</li>';

            
            indexAuto++;
        }
        
        if(isShow !=0){
            $('#split-1 .list').html('');
            $('#split-1 .list').append(str);
            setTotalFooter2(Object.keys(newObjectSort).length);
        }
        

    });
}
function getConditionHistory(catId,catDetailId, callback){
    // var idUserCategory = user_ID;
    db.collection(glb_link_note_current + '/category_history/').where("idCat", "==", catId).where("idCatDetail", "==", catDetailId).get().then((querySnapshot) => {
        // console.log(querySnapshot.docs.length)
        var list = {};
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            deleteOneHistory(doc.id)
            // list[doc.id] = {};
            // list[doc.id]['time'] = data.time;
            // var timesave = new Date(data.time);
            // list[doc.id]['title'] = data.title + " ("+timesave.getDate()+'/'+timesave.getMonth()+ " "+timesave.getHours()+":"+timesave.getMinutes()+")";
            // list[doc.id]['idCat'] = data.idCat;
            // list[doc.id]['idCatDetail'] = data.idCatDetail;
            // list[doc.id]['isHightLight'] = data.isHightLight;

        });

        // if(querySnapshot.docs.length==0){
            callback(callback)
        // }
    });
}

function eventlistTory_click(at){
    $('#split-1 .list li').removeClass('active');
    $(at).addClass('active');
    var catid = $(at).attr('catid');
    var catdetail = $(at).attr('catdetail');
    clickCatId(catid,catdetail);
}
function clickCatId(catid,catdetail){
    $('#split-0 .list').find(`li[data-id='`+catid+`']`).trigger('click');
    idLastClickDetail = catdetail;
    //$('#split-1 .list').find(`li[data-id='`+catdetail+`']`).trigger('click');
}
function setOneHistory(){

    var catTitle = $('#split-0 .active').eq(0);
    var catDetailTitle = $('#split-1 .active').eq(0);
    if(catDetailTitle.length == 0){
        return;
    }
    var idCat = catTitle.attr('data-id');
    var title = catTitle.html();

    var idCatDetail = catDetailTitle.attr('data-id');
    var titleDetail = catDetailTitle.html();
    // console.log(idCat,title,idCatDetail,titleDetail);
    // console.log(catDetailTitle);
    var titleSave = title +"-->" +titleDetail;

    getConditionHistory(idCat,idCatDetail,function(){
        var idUserCategory = user_ID;
        db.collection(glb_link_note_current + "/category_history").add({
                title: titleSave,
                // order: dataIn.order,
                idCat :idCat,
                idCatDetail :idCatDetail,
                // aliasCat: "",
                // contentCat: "",
                time: new Date().getTime(),
            })
            .then(function(docRef) {
                // console.log("Document written with ID: ", docRef.id);
                // getNoteListCategory();
                //deleteOneHistory
                getListDataHistory(0);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                alert('error add cat');
                // getNoteListCategory();
            });
    })
}
function deleteOneHistory(idDelete) {
    // var idUserCategory = user_ID;
    db.collection(glb_link_note_current + '/category_history/').doc(idDelete).delete().then(() => {
        // console.log("Document cat successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}
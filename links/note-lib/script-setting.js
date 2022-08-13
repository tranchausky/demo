

var glb_link_setting = 'settings/' + user_ID;
function getSetting() {
    // console.log('note-list-cat')
    $('#split-0 .list').html('');

    db.collection(glb_link_setting + '/setting_main').get().then((querySnapshot) => {
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
            $('#split-0 .list li').eq(0).trigger('click');
        }
        setTotalFooter1(Object.keys(newObjectSort).length);
        focus_category_reload(last_select_note_cat);
        last_select_note_cat = 0;
    });
}
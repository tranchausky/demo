$(function () {
    $("#scrum .drag-list").sortable({
        connectWith: ".drag-list",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all",
        receive: function (event, ui) {
            var at = ui.item;
            var keyold = $(at).attr('key-old');
            var keyid = $(at).attr('keyid');
            var text = $(at).find('.title').html();
            var keynew = $(this).closest('.list-drap-drop').find('h3').attr('data-key');
            //var idType = 
            $('#keyScrum').val(keynew);
            $('#text-scrum').val(text);
            $('#keyAtIdScrum').val(keyid);
            editScrum();
        },
        stop: function(event, ui) {
            console.log("Start position: " + ui.item.startPos);
            console.log("New position: " + ui.item.index());
            // sortScrum();
        },
        change: function (event, ui) {
            // console.log(ui.item);
        }
    });

    $("#tx .drag-list").sortable({
        connectWith: ".drag-list",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all",
        receive: function (event, ui) {
            var at = ui.item;
            var keyold = $(at).attr('key-old');
            var keyid = $(at).attr('keyid');
            var text = $(at).find('.title').html();
            var keynew = $(this).closest('.list-drap-drop').find('h3').attr('data-key');
            //var idType = 
            $('#keyTx').val(keynew);
            $('#text-tx').val(text).trigger('change');
            $('#keyAtIdTx').val(keyid);
            editTx();
        },
        stop: function (event, ui) {
            // console.log("Start position: " + ui.item.startPos);
            // console.log("New position: " + ui.item.index());
            // sortTx();
        },
        change: function (event, ui) {
            // console.log(ui.item);
        }
    });

    $(".portlet")
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all")
        .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

    $(".portlet-toggle").on("click", function () {
        var icon = $(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest(".portlet").find(".portlet-content").toggle();
    });


    //click event

    // $( "button" ).on( "click", notify );
    // $('#scrum .drag-area').click(function () {

    $(document.body).on("click", "#scrum .drag-list", function () {
        // $('#scrum .drag-list li').on("click", function () {
        // alert('clicl')
        var title = $(this).closest('.list-drap-drop').find('h3');

        $('.list-drap-drop h3').removeClass('title-select-scrum');
        title.addClass('title-select-scrum');

        $('#scrum-title').html(title.html());
        $('#keyScrum').val(title.attr('data-key'));
        //var index = $(this).parents("li").index();
        //  var index = $(this).index();
        //  $('#swot-at').html(index);

        //  var title = $(this).closest('.list-drap-drop').find('h3').html();
        //  $('#swot-title').html(title);
        //var index = $(this).parents("li").index();


        // var textAt = $(this).find('.title').html();
        // $('#name1').val(textAt);
    })
    $(document.body).on("click", "#scrum .drag-list li", function () {
        var index = $(this).index();
        $('#scrum-at').html(index);
        $('#keyAtIdScrum').val($(this).attr('keyid'));

        var textAt = $(this).find('.title').html();
        $('#text-scrum').val(textAt);
        $('#scrum .drag-area').removeClass('selected')
        $(this).find('.drag-area').addClass('selected')
    })


    $(document.body).on("click", "#tx .drag-list", function () {
        var title = $(this).closest('.list-drap-drop').find('h3');

        $('.list-drap-drop h3').removeClass('title-select-tx');
        title.addClass('title-select-tx');

        $('#tx-title').html(title.html());
        $('#keyTx').val(title.attr('data-key'));
    })
    $(document.body).on("click", "#tx .drag-list li", function () {
        var index = $(this).index();
        $('#tx-at').html(index);
        $('#keyAtIdTx').val($(this).attr('keyid'));

        var textAt = $(this).find('.title').html();
        $('#text-tx').val(textAt).trigger('change');
        $('#tx .drag-area').removeClass('selected')
        $(this).find('.drag-area').addClass('selected')
    })
});
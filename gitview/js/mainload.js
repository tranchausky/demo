loadSetData();
function loadSetData() {

    var rs = getAjax('structure', 'get', '');
    rs.success(function (data, status, xhr) {
        setMainContent(data, '');
    })
}


var tableFilePath_full_name = '';
var tableFilePath_path = '';


var base64StringFile;

// document ready
$(document).ready(function () {

    //List Response
    $("#maincontent").on("click", "#tableRespon .full_name", function () {
        showHideAddNewFile(1);
        var full_name = $(this).text();
        tableFilePath_full_name = full_name;
        breadcrumbAdd(full_name, full_name);
        getListPath(full_name, '');
    });

    //View more file/dir
    $("#maincontent").on("click", "#tableFilePath .path", function () {
        var path_more = $(this).text();
        ///var path_get = tableFilePath_full_name + path_more;
        var isDir = $(this).next().next().text() == 'dir' ? true : false;
        if (isDir == false) {
            alert('view file')
            return;
        }
        tableFilePath_path = path_more;
        breadcrumbAdd(path_more, path_more);
        getListPath(tableFilePath_full_name, path_more);
    });

    //breadcrum Click
    $("#maincontent").on("click", "#structure-breadcrumb li:not(.active)", function () {
        var index = $(this).index();
        breadcrumbViewData(index);
    });

    //change type upload
    $("#maincontent").on("change", 'input[name="type_upload"]', function () {
        var at = $('#maincontent input[name="type_upload"]:checked').val();
        if (at == 'text') {
            $('#textareaInput').show();
            $('#file_upload').hide();
        } else {
            $('#textareaInput').hide();
            $('#file_upload').show();
        }
    });

    //upload file
    $("#maincontent").on("click", "#uploadAddFileContent", function () {
        var typeUpload = $('#maincontent input[name="type_upload"]:checked').val();
        if (typeUpload == 'text') {
            var content = $('#textUpload').val();
            gitAddContent(btoa(content));
        } else {
            gitAddContent(base64StringFile);
        }
    });

});

async function changeFileUpload(e) {
    base64StringFile = '';
    // Get a reference to the file
    const file = e.files[0];

    var totalBytes = e.files[0].size;
    var size_mb = Math.floor(totalBytes / 1000000);// + 'MB';
    var maxsize = 90;
    if (size_mb > maxsize) {
        showToast('danger', 'File need <' + maxsize + ' MB');
        return;
    }

    var filename = e.files[0].name
    var path_name_file = tableFilePath_path + '/' + filename;
    path_name_file = trimSpecific(path_name_file, '/');

    filename = filename.toLowerCase()
    //checkis image
    if (filename.match(/\.(jpg|jpeg|png|gif)$/i)){
        path_name_file = path_name_file+'.webp';
        base64StringFile = await compressImage(e.files[0], 75); // set to 75%
    }else{

        // Encode the file using the FileReader API
        const reader = new FileReader();
        reader.onloadend = () => {
            // Use a regex to remove data url part
            base64StringFile = reader.result
                .replace('data:', '')
                .replace(/^.+,/, '');

            //console.log(base64String);
            // Logs wL2dvYWwgbW9yZ...
        };
        reader.readAsDataURL(file);
    }

    $('#inputAddFileContent_path').val(path_name_file);    

}

async function compressImage(blobImg, percent) {
    let bitmap = await createImageBitmap(blobImg);
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    ctx.drawImage(bitmap, 0, 0);
    let dataUrl = canvas.toDataURL("image/webp", percent/100);
    //return dataUrl;
    return dataUrl.replace('data:', '').replace(/^.+,/, '');;
  }

var listBreadcrumb = [];
function buildBreadcrumb() {
    var strList = '';
    var viewActive = '';
    for (let i = 0; i < listBreadcrumb.length; i++) {
        //strList += '<tr>';
        viewActive = '';
        var one = listBreadcrumb[i];
        // for (const property in one) {
        //strListTbody += '<td>'+one[property] + "</th>";
        if (listBreadcrumb.length - 1 == i) {
            viewActive = 'active';
        }

        if (viewActive == '') {
            strList += '<li class="breadcrumb-item"><a href="#" data-link=' + one.link + '>' + one.text + '</a></li>';
        } else {
            strList += '<li class="breadcrumb-item active">' + one.text + '</li>';
        }

        // }
    }
    $('#structure-breadcrumb .breadcrumb').html(strList)
}

function breadcrumbViewData(index) {
    if (index == 0) {
        console.log(listBreadcrumb[index])
        navGet(listBreadcrumb[index].text)
        //structureGetData('response')
        //console.log('load response')
        //alert('more')
        return;
    }
    var full_name = listBreadcrumb[1].text;
    var path = listBreadcrumb[index].text;
    if (index == 1) {
        path = '';
    }
    getListPath(full_name, path);
    var tem = [];
    for (let i = 0; i < listBreadcrumb.length; i++) {
        if (index >= i) {
            tem.push(listBreadcrumb[i])
        }
    }
    listBreadcrumb = tem;
    buildBreadcrumb();
}

function breadcrumbAddFirst(link, text) {
    listBreadcrumb = [];
    breadcrumbAdd(link, text);
}
function breadcrumbAdd(link, text) {
    var temp = {};
    temp.link = link;
    temp.text = text;
    listBreadcrumb.push(temp);
    buildBreadcrumb();
}
function breadcrumbRemove(type) {
    if (type == 'all') {
        listBreadcrumb = [];
    } else {
        listBreadcrumb.length--;
    }
    buildBreadcrumb();
}

function loadLogin() {
    var rs = getAjax('page-login', 'get', '');
    rs.success(function (data, status, xhr) {
        setMainContent(data, '');
    })
}

function structureGetHtml(strLink) {
    var link = 'structure/' + strLink;
    var rs = getAjax(link, 'get', '');
    rs.success(function (data, status, xhr) {
        setMainContent(data, '#structure-content');

    })
}
function structureGetData(typedata) {
    breadcrumbAddFirst(typedata, typedata);

    showHideLoadingStructure(1)
    var listData = git_ListRepos(function (data) {
        showHideLoadingStructure(0)
        var idTable = 'tableRespon';
        var strTable = buildTableRepos(data, idTable);
        setMainContent(strTable, '#structure-content');
        viewDataTable(idTable);
    });
}

function getListGit(type) {
    breadcrumbAddFirst(type, type);
    showHideLoadingStructure(1)
    var page = 1;
    var listData = git_ListGit(page, function (data) {
        showHideLoadingStructure(0)
        var idTable = 'tableGists';
        var strTable = buildTableGits(data, idTable);
        setMainContent(strTable, '#structure-content');
        viewDataTable(idTable);
    });
}

function navGet(type) {
    showHideAddNewFile(0)
    switch (type) {
        case 'response':
            structureGetData(type)
            break;
        case 'gits':
            getListGit(type);
            break;

        default:
            break;
    }
}

function showHideAddNewFile(status) {
    if (status == 1) {
        if ($('#btn-addFileModal').length < 1) {
            $('#structure-event').append('<button id="btn-addFileModal" type="button" class="btn btn-primary btn-sm" onclick="showModelAddFile();">Add File</button>');
        }
    } else {
        $('#structure-event #btn-addFileModal').remove()
    }
}
function showModelAddFile() {
    //#addFileModal
    $('#inputAddFileContent_respon_view').html(tableFilePath_full_name);
    $('#inputAddFileContent_respon').val(tableFilePath_full_name);
    $('#inputAddFileContent_path').val(tableFilePath_path);
    $('#addFileModal').modal('show');
}

function gitAddContent(content) {
    var owner_repo = tableFilePath_full_name;
    var path = $('#inputAddFileContent_path').val();

    path = trimSpecific(path, '/');

    var dataSend = {};
    dataSend.message = $('#messageCommit').val();

    if (path == '') {
        showToast('danger', 'Need path not empty');
        return;
    }
    if (dataSend.message == '') {
        showToast('danger', 'Need message not empty');
        return;
    }
    if (content == '') {
        showToast('danger', 'Need content file not empty');
        return;
    }

    // dataSend.committer = {};
    // dataSend.committer.name = 'commit';
    // dataSend.committer.email = 'tranchausky@gmail.com';
    // var string ='1234';
    //dataSend.content = btoa(content);
    dataSend.content = content;
    showLoadingAll(1)
    var listData = git_AddContent(owner_repo, path, dataSend, function (dataGet) {
        showLoadingAll(0)
        console.log(dataGet)
        if(dataGet == null){
            return;
        }
        //alert('upload done')
        getListPath(tableFilePath_full_name, tableFilePath_path);
        showToast('', 'Add File Done');
        $('#addFileModal').modal('hide');
        document.getElementById("addFormContent").reset();
    });
}

function getListBranch() {
    var fullname = "MantuWebMigration/Portalia";
    var listData = git_ListBranch(fullname, function (data) {
    });
}

function getListPath(own_repo, path) {

    //var own_repo = 'MantuWebMigration/Portalia';
    //var path = 'contents/';
    showHideLoadingStructure(1)
    path = 'contents/' + path;
    var own_repo_path = own_repo + '/' + path;
    var listData = git_ListPath(own_repo_path, function (data) {
        showHideLoadingStructure(0)
        var idTable = 'tableFilePath';
        var strTable = buildTableFolderFile(data, idTable);
        setMainContent(strTable, '#structure-content');
        viewDataTable(idTable);

    });
}

function buildTableGits(data, idTable) {
    var listTh = ['stt', 'description', 'owner', 'type', 'files', 'comments', 'html_url', 'updated_at'];
    var listTbody = [];
    var temp = {};
    for (let i = 0; i < data.length; i++) {
        temp = {};
        temp.stt = i + 1;
        temp.id = data[i].id;
        // temp.full_name = data[i].full_name;
        // temp.size = data[i].size;
        temp.description = data[i].description;
        temp.comments = data[i].comments;
        temp.owner = data[i].owner.login;
        temp.files = Object.keys(data[i].files).length;
        temp.updated_at = data[i].updated_at;
        temp.type = data[i].public ? '(public)' : '(private)';
        temp.html_url = data[i].html_url;
        listTbody.push(temp);
    }
    return builOneTable(idTable, listTh, listTbody)
}
function buildTableRepos(data, idTable) {
    var listTh = ['stt', 'id', 'full_name', 'owner', 'type', 'html_url', 'language', 'size', 'updated_at'];
    var listTbody = [];
    var temp = {};
    for (let i = 0; i < data.length; i++) {
        temp = {};
        temp.stt = i + 1;
        temp.id = data[i].id;
        temp.full_name = data[i].full_name;
        temp.size = data[i].size;
        temp.owner = data[i].owner.login;
        temp.language = data[i].language;
        temp.updated_at = data[i].updated_at;
        temp.type = data[i].private ? '(private)' : '(public)';
        temp.html_url = data[i].html_url;
        listTbody.push(temp);
    }
    return builOneTable(idTable, listTh, listTbody)
}
function buildTableFolderFile(data, idTable) {
    var listTh = ['stt', 'name', 'path', 'size', 'type', 'link', 'link_download'];
    var listTbody = [];
    var temp = {};
    for (let i = 0; i < data.length; i++) {
        temp = {};
        temp.stt = i + 1;
        temp.name = data[i].name;
        temp.path = data[i].path;
        temp.size = data[i].size;
        temp.type = data[i].type;
        temp.link_download = data[i].download_url;
        temp.link = data[i]._links.html;

        listTbody.push(temp);
    }
    return builOneTable(idTable, listTh, listTbody)
}

function builOneTable(idTable, listTh, listTbody) {
    var strListTh = '<tr>';
    for (let i = 0; i < listTh.length; i++) {
        strListTh += '<th>' + listTh[i] + "</th>";
    }
    strListTh += "</tr>";
    var strListThMore = '';
    // strListThMore = '<tr>';
    // for (let i = 0; i < listTh.length; i++) {
    //     strListThMore += '<td></td>';
    // }
    // strListThMore += "</tr>";

    // strListThMore += '<tr>';
    // for (let i = 0; i < listTh.length; i++) {
    //     strListThMore += '<td></td>';
    // }
    // strListThMore += "</tr>";

    var strListTbody = '';
    for (let i = 0; i < listTbody.length; i++) {
        strListTbody += '<tr>';
        var one = listTbody[i];
        // for (const property in one) {
        //     strListTbody += '<td>'+one[property] + "</td>";
        // }
        for (let i = 0; i < listTh.length; i++) {
            strListTbody += '<td class="' + listTh[i] + '">' + getnull(one, listTh[i]) + "</td>";
        }
        strListTbody += "</tr>";
    }

    var strTable = `<table id="` + idTable + `" class="table table-striped table-bordered" style="width:100%">
        <thead>
            `+ strListTh + strListThMore + `
        </thead>
        <tbody>
            `+ strListTbody + `
        </tbody>
        <tfoot>
            `+ strListTh + `
        </tfoot>
    </table>`;
    return strTable
}
function getnull(data, key) {
    if (data[key] == null) {
        return '';
    }
    if (key == 'link_download') {
        return '<a href="' + data[key] + '" target="_blank">View raw</a>';
    }
    if (key == 'link') {
        return '<a href="' + data[key] + '" target="_blank">Link</a>';
    }
    if (key == 'html_url') {
        return '<a href="' + data[key] + '" target="_blank">html_url</a>';
    }
    return data[key];
}

var tableView;
function viewDataTable(idView) {
    // $('#example').DataTable();
    tableView = $('#' + idView).DataTable({
        orderCellsTop: true,
        initComplete: function () {
            var table = this.api();

            //https://live.datatables.net/tobekuxu/1/edit
            // Add filtering
            table.columns().every(function () {
                var column = this;

                //   var input = $('<input type="text" />')
                //     .appendTo($("thead tr:eq(1) td").eq(this.index()))
                //     .on("keyup", function() {
                //       column.search($(this).val()).draw();
                //     });


                //   var select = $('<select><option value=""></option></select>')
                //     .appendTo($("thead tr:eq(2) td").eq(this.index()))
                //     .on('change', function() {
                //       var val = $.fn.dataTable.util.escapeRegex(
                //         $(this).val()
                //       );

                //       column
                //         .search(val ? '^' + val + '$' : '', true, false)
                //         .draw();
                //     });

                //   column.data().unique().sort().each(function(d, j) {
                //     select.append('<option value="' + d + '">' + d + '</option>')
                //   });

            });
        },
        stateSave: true,
        stateSaveCallback: function (settings, data) {
            localStorage.setItem('DataTables_' + settings.sInstance, JSON.stringify(data))
        },
        stateLoadCallback: function (settings) {
            return JSON.parse(localStorage.getItem('DataTables_' + settings.sInstance))
        }
    });
}

function setMainContent(strData, keyId) {
    var html = $(strData);
    if ($(keyId).length > 0) {
        $(keyId).html(html);
    } else {
        $('#maincontent').html(html);
    }
}

function getAjax(link, method, dataSend) {
    var linkGet = './statics/' + link + ".html";
    var ajax = $.ajax(linkGet, {
        type: method,  // http method
        //data: { myData: 'This is my data.' },  // data to submit
        data: dataSend,
        // success: function (data, status, xhr) {
        //     $('p').append('status: ' + status + ', data: ' + data);
        // },
        error: function (jqXhr, textStatus, errorMessage) {
            alert('error');
            showToast('danger', errorMessage);
            console.log(jqXhr, textStatus, errorMessage)
        }
    });
    return ajax;
}
//showToast('danger','danger');
function showToast(type, message) {
    var keyview = '';
    switch (type) {
        case 'success':
            keyview = 'alert-success';
            break;
        case 'danger':
            keyview = 'alert-danger';
            break;
        case 'warning':
            keyview = 'alert-warning';
            break;
        case 'info':
            keyview = 'alert-info';
            break;
        default:
            keyview = 'alert-info';
            break;
    }
    var idat = randomStr()
    var template = `<div id='` + idat + `' class="alert ` + keyview + `" role="alert">
    `+ message + `
  </div>`;
    $('#toast-view').append(template);
    $('#toast-view').show();

    setTimeout(function () {
        $('#' + idat).fadeOut('slow').remove();
    }, 10000);
}
function randomStr() {
    return "x".repeat(5).replace(/./g, c => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 62)]);
}

function escapeRegexp(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function trimSpecific(value, find) {
    const find2 = escapeRegexp(find);
    return value.replace(new RegExp(`^[${find2}]*(.*?)[${find2}]*$`), '$1')
}

function showHideLoadingStructure(type) {
    if (type == 1) {
        $('#structure-loading').show();
    } else {
        $('#structure-loading').hide();
    }

}

function showLoadingAll(type){
    if (type == 1) {
        $('#loadingAll').modal('show');
    } else {
        $('#loadingAll').modal('hide');
    }
}
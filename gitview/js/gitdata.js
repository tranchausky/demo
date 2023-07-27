var github_url = 'https://api.github.com/';
var github_api_version = '2022-11-28';
var github_api_authen = 'Bearer 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';
var github_api_accept = 'application/vnd.github+json';
var github_get_user = {};

function callAjax(method,url,urlMore,dataSendIn){
    var dataSend = JSON.stringify(dataSendIn);
    //var dataSend = dataSendIn;
	var urlSend = github_url +url+urlMore;
    return $.ajax({
		headers: {
			'X-GitHub-Api-Version': github_api_version,
			'Authorization': github_api_authen,
			'Accept': github_api_accept
		},
        cache:      false,
        url:        urlSend,
        dataType:   "json",
        type:       method,
        data:       dataSend,
		error:function(xhr, ajaxOptions, thrownError){
            showToast('danger', 'Call Ajax False');
			//alert('this is error call ajax')
			//console.log(data)
			console.log(xhr, ajaxOptions, thrownError)
		}
	});
}

viewHeader();


function viewHeader(){
	//https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user
	callAjax('GET','user','','').success(function(data){
		console.log(data)
        github_get_user = data;
		//$('#uname').html(data.login)
	});
}
function git_ListRepos(callback){
	callAjax('GET','user','/repos?per_page=100','').success(function(data){
        callback(data);
	});
}

//https://docs.github.com/en/rest/branches/branches?apiVersion=2022-11-28#list-branches--code-samples
function git_ListBranch(nameResponse,callback){
    var link = 'repos/' +nameResponse+'/branches';
	callAjax('GET',link,'','').success(function(data){
        callback(data);
	});
}

//https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content--code-samples
function git_ListPath(own_repo_path,callback){
    var link = 'repos/' +own_repo_path;
	callAjax('GET',link,'','').success(function(data){
        callback(data);
	});
}

//https://docs.github.com/en/rest/gists/gists?apiVersion=2022-11-28#list-gists-for-the-authenticated-user--code-samples
function git_ListGit(page,callback){
    var link = 'gists?per_page=100&page=' +page;
	callAjax('GET',link,'','').success(function(data){
        callback(data);
	});
}

function git_AddContent(owner_repo,path ,dataSend,callback){
    var link = 'repos/'+owner_repo+'/contents/'+path;
	callAjax('PUT',link,'',dataSend).success(function(data){
        callback(data);
	}).error(function(xhr, ajaxOptions, thrownError){
        if(xhr.status == 422){
            showToast('danger', 'Have file same filename');
        }else{
            showToast('danger', xhr.responseText);
        }
        callback(null);
    });
}

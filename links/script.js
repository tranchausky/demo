//https://www.sceditor.com/documentation/options/
var editor_note_show = document.getElementById('editor_note_show');
var instance_sceditor = sceditor.create(editor_note_show, {
    format: 'bbcode',
    // icons: 'monocons',
    format: 'xhtml',
    plugins: 'undo',
    style: 'minified/themes/content/default.min.css',
    toolbar: 'bold,italic,underline,size,color,undo,removeformat|bulletlist,orderedlist,indent,outdent|horizontalrule,table,code,quote,date|maximize,source',
    width: "100%",
    height: "99%",
});

// sceditor.instance(editor_note_show).unbind(function (e) {
//     // alert('Gained focus');/
//     console.log('unbind')
// });

sceditor.instance(editor_note_show).bind('blur', function (e) {
    console.log('blur')
    event3_save();
});


function event3_loadmindmap() {
    if ($('#split-1').width()!=0) {
        // $('.sceditor-container').hide();
        //viewHide1();
        instanceSplit.collapse(1);
    } else {
        // $('.sceditor-container').show();
        loadDefaultViewNote();
    }

}
function event2_view_tab1(){
    if ($('#split-0').width() != 0) {
        // $('.sceditor-container').hide();
        instanceSplit.collapse(0);
    } else {
        // $('.sceditor-container').show();
        loadDefaultViewNote();
    }

}


function checkIsEnter(event, idtrigger) {
    var x = event.code;
    if(x == "Enter") {
        $('#'+idtrigger).trigger('click')
    }    
}

function changeDataAttribute(at, attribtue, value) {
    var idGet = $(at).attr('id');
    $(at).attr(attribtue,value);


    if(idGet=='setting_pw_hash') {
        $('#updateProfileUser').hide();
        var pw_hash = $('#setting_pw_hash');
        var bcrypt = dcodeIO.bcrypt;
        const rounds = 10
        var pw_basic = $(pw_hash).val();
        pw_basic = pw_basic.trim();

        if(pw_basic== ""){
            $(at).attr('pw_hash', '');
            $('#updateProfileUser').show();
            return;
        }
        //data.pw_hash = '';
        bcrypt.hash(pw_basic, rounds, (err, hash) => {
            if (err) {
                console.error(err)
                //return
                alert('Bcryt error')
                $(at).attr('pw_hash') = '';
                $('#updateProfileUser').show();
            }
            $(at).attr('pw_hash', hash);
            $('#updateProfileUser').show();
            //console.log(hash)
        })
    }
}

let idleTime = 0;
console.log('runcheck 5minus')
setInterval(timerIncrement, 1000);
//function check after 5minus
function timerIncrement() {
    var isremember = localStorage.getItem('isremember');
    if(isremember == 'true'){
        return;
    }

	if(user_ID !='' && !$('#my-ss-login-view').is(':visible')){
		idleTime++;	
	}
   // console.log(idleTime)
    if (idleTime > 300) { // 300 seconds = 5 minutes
        // Call your function here
        //console.log('No activity for 5 minutes');
        idleTime = 0; // Reset idle time
		showNeedEnterAfter5Minus();
    }
}

function lazyLoad() {
    console.log('ryb')
    $('.lazy').each(function() {
      const img = $(this);

      // Check if image is in the viewport
      if (img.offset().top < $(window).scrollTop() + $(window).height()) {
        // Set the src attribute to start loading the image
        img.attr('src', img.data('src'));

        // Remove the 'lazy' class to prevent re-loading
        img.removeClass('lazy');
      }
    });
  }

$(document).ready(function () {

    $('.list-image').on('scroll', lazyLoad);

	$(document).on('mousemove keydown', function() {
		idleTime = 0;
	});

    var height = $('.navbar-header').height();
    $('#start-content').css('margin-top', height);
    $('#myNavbar a').click(function () {
        var atrHref = $(this).attr('href')

        if (user_ID == '') {
            alert('Need Login First')
            return
        }
        if (atrHref == '../timedown' || atrHref =='#') {
            return;
        }

        $('.v-m-content').addClass('hide');
        $(atrHref).removeClass('hide');

        $('#myNavbar li').removeClass('active');
        $(this).closest('li').addClass('active');
        $(this).closest('.dropdown').addClass('active');

		if (atrHref == '#homepage') {
            loadData();
        }
        if (atrHref == '#calendar') {
            getAllCalendar()
        }
        if (atrHref == '#fivetask') {
            getAllFiveTask()
        }
        if (atrHref == '#photo') {
            $('.list-select-option-photo').html(buildSelectPhotoCat(''))
            $('.list-cat-btn').html('<option value="">All</option>' + buildSelectPhotoCat(''))
            getListPhoto()
        }
        if (atrHref == '#video') {
            $('.list-select-option-video').html(buildSelectVideoCat(''))
            $('.list-cat-btn-video').html('<option value="">All</option>' + buildSelectVideoCat(''));
			buildSelectToBtnBasic('#list-cat-btn-video','#buttonListVideo');
            getListVideo('');
			
        }
        if (atrHref == '#todo') {
            getListTodoCompleted()
            getListTodoNew()
        }
		if (atrHref == '#maxim') {
            getListMaximCompleted()
            getListMaximNew()
        }
        if (atrHref == '#goal') {
            getListGoalCompleted()
            getListGoalNew()
        }
        if (atrHref == '#habit') {
            getListHabitCompleted()
            getListHabitNew()
        }
        if (atrHref == '#swot') {
            getListSWOT()
        }
        if (atrHref == '#scrum') {

            getListScrum()
        }
        if (atrHref == '#tx') {
            getListTx()
        }
        if (atrHref == '#note') {
            getListNotes()
        }
    })
	

    window.onscroll = function() {myFunction()};
    function myFunction() {
        var header = document.getElementById("scaction");
        var sticky = header.offsetTop+100;
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }


    //function check back to website
    //showHideSessionLogin();

    $('#login_session').click(function(){
        checkLoginBasic();
    })

    function compareTextPasswordSession(text,encrypted, callback) {
        text = text.trim();
        var bcrypt = dcodeIO.bcrypt;
        bcrypt.compare(text, encrypted, (err, res) => {
            if (res == true) {
                //alert('right');
                //return true;
                callback(true)
            }else{
                //alert('wrong');
                //return false;
                callback(false)
            }
        })
    }
    
    function checkLoginBasic() {

        var pp_ss = $('#password_ss').val();
        if(pp_ss == ''){
            return false;
        }
        var hash = '$2y$10$elFm3BzPfJKM0XUYnW58kOisbDcCOLmynndLHhwhCtLvjqw0AY97m';
        var hash = glb_password_hash;
        if(hash == ''){
            $('#my-ss-login-view').modal('hide');
            return;
        }
        compareTextPasswordSession(pp_ss, hash, function(ispassHash){
            if(ispassHash == true){
                sessionStorage.setItem("sessionLogin", 'true');
                location.reload();
            }else{
                alert('Wrong Password Session')
                sessionStorage.removeItem("sessionLogin");
            }
            showHideSessionLogin();
        });
    
    }

    // $("document").on('click', '#tb-calendar tr td', function() {
    // $('#tb-calendar tr').on('click','td', function () {
    jQuery(document.body).on('click', '#tb-calendar tr td', function (event) {
        // alert(123)
        // alert('123')
        checkDetailCalendar(this)
    })

    //calendar reload 
    $('.prev-month,.next-month').click(function () {
        hideEventCalendar()
        getAllCalendar()
    })
    jQuery(document.body).on('click', '#photo .list-image img', function (event) {
        return
        // $('#photo .list-image img').click(function() {
        var src = $(this).attr('str-big')
        // alert(src)
        $('#image-img-photo').attr('src', src)
    })

    $('#add-task').click(function () {
        pushTodo()
    })
	$('#addbtn-maxim').click(function () {
        pushMaxim()
    })
    $('#btn-add-goal').click(function () {
        pushGoal()
    })
    $('#btn-add-habit').click(function () {
        pushHabit()
    })

    $(document.body).on('click', '.list-todo-new .edit', function (event) {
		$('.list-todo-new .edit').removeClass('editnow');
		$(this).addClass('editnow');
        var text = $(this).closest('.at-task').find('label').eq(0).text()
        var key = $(this).closest('.at-task').attr('data-key');
        $(this).closest('.at-task').after(addEventTodo(text, key));
		document.getElementById('todo').scrollIntoView();
    })
	
	$(document.body).on('click', '.list-maxim-new .edit', function (event) {
		$('.list-maxim-new .edit').removeClass('editnow');
		$(this).addClass('editnow');
        var text = $(this).closest('.at-task').find('label').eq(0).text()
        var key = $(this).closest('.at-task').attr('data-key');
        $(this).closest('.at-task').after(addEventMaxim(text, key));
		document.getElementById('maxim').scrollIntoView();
    })
	
    // $(document.body).on('click', '.list-todo-new .save', function (event) {
        // var key = $(this).closest('.form-event').attr('data-key')
        // var text = $(this).closest('.form-event').find('input').eq(0).val()
        // updateTodo(text, 'new', key);
    // })
	$(document.body).on('click', '#save-task', function (event) {
        var key = $('#save-task').attr('idedit');
        var todo = $('#add-todo').val();
		var todo_priority = $('#select-todo-priority').val();
		var todo_day = $('#select-todo-day').val();
		var todo_for = $('#select-todo-for').val();
		var obj ={
			day:todo_day,
			fors:todo_for,
			priority:todo_priority,
			task:todo
		}
        updateTodo(obj, key);
		
		$('#save-task').attr('idedit','');
		$('#save-task').hide();
		$('#add-task').show();
		$('#add-todo').val('');
		$('#select-todo-priority').val('');
		$('#select-todo-day').val('');
		$('#select-todo-for').val('');
		
    })
	
	$(document.body).on('click', '#save-maxim', function (event) {
        var key = $('#save-maxim').attr('idedit');
        var maxim = $('#add-maxim').val();
		if(maxim==""){
			alert('Not empty');
			return;
		}
		var todo_priority = $('#select-maxim-priority').val();
		// var todo_day = $('#select-maxim-day').val();
		var obj ={
			// day:todo_day,
			priority:todo_priority,
			task:maxim
		}
        updateMaxim(obj, key);
		
		$('#save-maxim').attr('idedit','');
		$('#save-maxim').hide();
		$('#addbtn-maxim').show();
		$('#add-maxim').val('');
		$('#select-maxim-priority').val('');
		// $('#select-maxim-day').val('');
		
    })

    //goal
    $(document.body).on('click', '.list-goal-new .edit_goal', function (event) {
		if($(this).closest('.list-group').find('.form-event').length>0){
			return;
		}
        var text = $(this).closest('.at-task').find('label').eq(0).text()
        var key = $(this).closest('.at-task').attr('data-key')
        $(this).closest('.at-task').after(addEventGoal(text, key))
    })
    $(document.body).on('click', '.list-goal-new .save_goal', function (event) {
        var key = $(this).closest('.form-event').attr('data-key')
        var text = $(this).closest('.form-event').find('input').eq(0).val()
        updateGoal(text, {task:text}, key);
    })
    //habit
    $(document.body).on('click', '.habit .edit_habit', function (event) {
		if($(this).closest('.list-group').find('.form-event').length>0){
			return;
		}
        var text = $(this).closest('.at-task').find('label').eq(0).text()
        var key = $(this).closest('.at-task').attr('data-key')
        $(this).closest('.at-task').after(addEventHabit(text, key))
    })
    $(document.body).on('click', '.habit .save_habit', function (event) {
        var key = $(this).closest('.form-event').attr('data-key')
        var text = $(this).closest('.form-event').find('input').eq(0).val()
        updateHabit(text, {task:text}, key);
    })
    

    $(document.body).on('click', '.list-todo-new div label', function (event) {
		// console.log('this clcik')
		var isClick = $(this).attr('db-click');
        // console.log(isClick);
		if(isClick == 'false'){
			$(this).attr('db-click', true);
            isClick = 'true';
		}else{
			$(this).attr('db-click', false);
            isClick = 'false';
		}
        var key = $(this).closest('.at-task').attr('data-key')
        // console.log(key);
        // console.log(allTaskNew[key]);
        var obj = allTaskNew[key];
        obj.isClick= isClick;
        
        updateTodo(obj, key);
	})
    $(document.body).on('click', '.list-todo-new input[type="checkbox"]', function (event) {
        var isCheck = $(this).is(":checked");
        if (isCheck == true) {
            var key = $(this).closest('.at-task').attr('data-key')
            //updateTodo(allTaskNew[key]['task'], 'completed', key)
			updateTodo({status:'completed',task:allTaskNew[key]['task']}, key);
			viewTypeTodoNew();
            //set remove select
            triggerOldClick();
        }
    })
    
    $(document.body).on('click', '.list-todo-completed input[type="checkbox"]', function (event) {
        var isCheck = $(this).is(":checked");
        if (isCheck == true) {
            var key = $(this).closest('.at-task').attr('data-key')
            //updateTodo(allTaskComplete[key]['task'], 'new', key)
			updateTodo({status:'new',task:allTaskComplete[key]['task']}, key)
            triggerOldClick();
        }
    })
	
	//maxim
	$(document.body).on('click', '.list-maxim-new input[type="checkbox"]', function (event) {
        var isCheck = $(this).is(":checked");
        if (isCheck == true) {
            var key = $(this).closest('.at-task').attr('data-key')
			updateMaxim({status:'completed',task:allMaximNew[key]['task']}, key)
        }
    })
    $(document.body).on('click', '.list-maxim-completed input[type="checkbox"]', function (event) {
        var isCheck = $(this).is(":checked");
        if (isCheck == true) {
            var key = $(this).closest('.at-task').attr('data-key')
			updateMaxim({status:'new',task:allMaximComplete[key]['task']}, key)
        }
    })

    //goal
    $(document.body).on('click', '.list-goal-new input[type="checkbox"]', function (event) {
        var isCheck = $(this).is(":checked");
        if (isCheck == true) {
            var key = $(this).closest('.at-task').attr('data-key')
            updateGoal(allGoalNew[key]['task'],{'status':'completed'}, key)
        }
    })
    $(document.body).on('click', '.list-goal-completed input[type="checkbox"]', function (event) {
        var isCheck = $(this).is(":checked");
        if (isCheck == true) {
            var key = $(this).closest('.at-task').attr('data-key')
            updateGoal(allGoalComplete[key]['task'], {status:'new'}, key)
        }
    })
	$(document.body).on('click', '.list-goal-completed .delete', function (event) {
        var text = $(this).closest('.at-task').find('label').eq(0).text()
        var key = $(this).closest('.at-task').attr('data-key')
        updateGoal(allGoalComplete[key]['task'], {'status':'delete'}, key)
    })

    //hait
    $(document.body).on('click', '.list-habit-good .remove-habit', function (event) {
		
        // var isCheck = $(this).is(":checked");
        // if (isCheck == true) {
            var key = $(this).closest('.at-task').attr('data-key')
            updateHabit(allHabitNew[key]['task'], {type:'good_old'}, key)
        // }
    })
    $(document.body).on('click', '.list-habit-bad .remove-habit', function (event) {
        // var isCheck = $(this).is(":checked");
        // if (isCheck == true) {
            var key = $(this).closest('.at-task').attr('data-key')
            updateHabit(allHabitComplete[key]['task'], {type:'bad_old'}, key)
        // }
    })


    $(document.body).on('click', '.list-todo-completed .delete', function (event) {
        var text = $(this).closest('.at-task').find('label').eq(0).text()
        var key = $(this).closest('.at-task').attr('data-key')
        //updateTodo(allTaskComplete[key]['task'], 'delete', key)
        //updateTodo({status:'delete',task:allTaskComplete[key]['task']}, key);

		var calendObj = {
			day:getDateTimeToday('/'),
			type:"Todo",
			content:'Todo done: '+text,
			
		};
		addOrUpdateContentForCalendar(calendObj);
		
		deleteTodoId(key);
    })
	
	$(document.body).on('click', '.list-maxim-completed .delete', function (event) {
        var text = $(this).closest('.at-task').find('label').eq(0).text()
        var key = $(this).closest('.at-task').attr('data-key')
        //updateTodo(allTaskComplete[key]['task'], 'delete', key)
        updateMaxim({status:'delete',task:allMaximComplete[key]['task']}, key)
    })


    $(document.body).on('change', '.list-cat-btn', function (event) {
        getListPhoto()
    })
    //$(document.body).on('change', '#home-select-forview', function (event) {
        //getListContactFilter();
    //})
	$(document.body).on('click', '#buttonListLink li button', function (event) {
        console.log('action btn')
		$('#buttonListLink li button').removeClass('active');
		$(this).addClass('active');
		var value= $(this).attr('value');
		getListContactFilter(value);
        //getListContactFilter();
    })
    $(document.body).on('change', '#list-cat-btn-video-edit', function (event) {
        updateVideo()
    })
	$(document.body).on('change', '#sort-video', function (event) {
        changeSortVideo();
    });
	$(document.body).on('change', '#sort-contacts', function (event) {
        changeSortContacts(allContacts);
    });
	$(document.body).on('change', '#sort-todo', function (event) {
        changeSortTodo('.list-todo-new .list-group','#sort-todo',allTaskNew);
    });
	$(document.body).on('change', '#sort-maxim', function (event) {
        changeSortTodo('.list-maxim-new .list-group','#sort-maxim',allMaximNew);
    });
    $(document.body).on('change', '#edit-private-photo, #list-cat-btn-edit', function (event) {
        updatePhoto()
    })
    $(document.body).on('change', '#title-photo', function (event) {
        updatePhoto()
    })
	//$(document.body).on('change', '#list-cat-btn-video', function (event) {
	$(document.body).on('click', '#buttonListVideo li button', function (event) {
		$('#buttonListVideo li button').removeClass('active');
		$(this).addClass('active');
		var value= $(this).attr('value');
		getListVideo(value);
    })

	changeTodoToTextArea();
});

function triggerOldClick(){
    $('#todo-group-sort button.asc').trigger('click').trigger('click');
}

function changeTodoToTextArea(){
	if(window.innerWidth < 768){
		$('#add-todo').replaceWith(function () {
			return $('<textarea>')
				.attr({
					id: this.id,
					name: this.name,
					placeholder: $(this).attr('placeholder')
				})
				.addClass($(this).attr('class'))
				.val($(this).val());
		});
	}
}

function setTodoToday(at){
	$('#sortTodoPriority').attr('is_desc','false');
	$('#sortTodoPriority').removeClass('asc');

    $('#setTodoShowImportant').removeClass('asc');
    $('#setTodoShowImportant').attr('is_desc','false');
	
	//var todaykey = 'dayli';
	var isTrue = $(at).attr('is_today');
	// console.log(isTrue)
	if(isTrue!='false'){
		// console.log('run 1')
		$(at).attr('is_today','false');
		$(at).removeClass('asc');
	}else{
		// console.log(at)
		// console.log('run 2')
		$(at).attr('is_today','true');
		$(at).addClass('asc');
	}
	viewTypeTodoNew();
}
function setTodoShowImportant(at){
    // console.log('run')
	$('#sortTodoPriority').attr('is_desc','false');
	$('#sortTodoPriority').removeClass('asc');
	$('#setTodoToday').removeClass('asc');
    $('#setTodoToday').attr('is_desc','false');
	
	//var todaykey = 'dayli';
	var isTrue = $(at).attr('is_today');
	// console.log(isTrue)
	if(isTrue!='false'){
		// console.log('run 1')
		$(at).attr('is_today','false');
		$(at).removeClass('asc');
	}else{
		// console.log(at)
		// console.log('run 2')
		$(at).attr('is_today','true');
		$(at).addClass('asc');
	}
	viewTodoShowImportant();
}
function viewTodoShowImportant(){
    // console.log('run 2')
	if($('#setTodoShowImportant').attr('is_today') == "true"){
		viewToDoWithType('.list-todo-new .list-group','priority','urgent',allTaskNew);
	}else{
		//changeSortTodoWithType('.list-todo-new .list-group','priority_desc',allTaskNew);
		changeSortTodo('.list-todo-new .list-group','#sort-todo',allTaskNew);
	}
}
function viewTypeTodoNew(){
	if($('#setTodoToday').attr('is_today') == "true"){
		viewToDoWithType('.list-todo-new .list-group','fors','dayli',allTaskNew);
	}else{
		//changeSortTodoWithType('.list-todo-new .list-group','priority_desc',allTaskNew);
		changeSortTodo('.list-todo-new .list-group','#sort-todo',allTaskNew);
	}
}

function sortTodoPriority(at){
	$('#setTodoToday').attr('is_today','false');
	$('#setTodoToday').removeClass('asc');

    $('#setTodoShowImportant').removeClass('asc');
    $('#setTodoShowImportant').attr('is_desc','false');

	var isTrue = $(this).attr('is_desc');
	var typesort = 'priority_desc';
	if(isTrue!=true){
		typesort = 'priority_asc';
		$(this).attr('is_desc',true);
		$(at).removeClass('asc');
	}else{
		$(this).attr('is_desc',false);
		$(at).addClass('asc');
	}
	
	changeSortTodoWithType('.list-todo-new .list-group',typesort,allTaskNew);
}

function showHideSessionLogin() {

    var isremember = localStorage.getItem('isremember');
    if(isremember == 'true'){
        $('#my-ss-login-view').modal('hide');
        return true;
    }

    let isSession = sessionStorage.getItem("sessionLogin");
    var hash = glb_password_hash;
    if(hash == ''){
        $('#my-ss-login-view').modal('hide');
        return true;
    }

    if(isSession !== 'true') {
        $('#my-ss-login-view').modal('show');
        return false;
    }else{
        $('#my-ss-login-view').modal('hide');
        return true;
    }
}
function showNeedEnterAfter5Minus(){
	var hash = glb_password_hash;
    if(hash == ''){
        //logout
		signOut();
        return true;
    }
	sessionStorage.setItem("sessionLogin", 'false');
	$('#my-ss-login-view').modal('show');
	
}

//try active last click
function tabClick() {
	var listTag = getLinkHasUrl();
	if(listTag[0]){
		$('a[href="' + listTag[0] + '"]').click();	
	}
	//if(listTag[0] == "#note"){
		//var key1 = listTag[1];
		//var key2 = listTag[2];
		//console.log(key1)
		//console.log(key2)
	//}
}
function getLinkHasUrl(){
	var tag = window.location.hash;
	var listTag = tag.split('/');
	return listTag;
}
function buildLinkNote(key1,key2){
	var domainAndAt = window.location.origin + window.location.pathname;
	var atHas = "#note";
	if(key1){
		atHas += '/'+key1;
	}
	if(key2){
		atHas += '/'+key2;
	}
	var linkResult = domainAndAt+atHas;
	//console.log(linkResult);
	history.pushState(null, null, linkResult);
}

function addEventTodo(text, key) {
	// console.log(text, key)
	// console.log(allTaskNew[key])
	
	var atTodo = allTaskNew[key];
	
	$('#save-task').attr('idedit',key);
	$('#save-task').show();
	$('#add-task').hide();
	$('#add-todo').val(text);
	// console.log(atTodo)
	if(atTodo && typeof atTodo.priority != "undefined"){
		$('#select-todo-priority').val(atTodo.priority);	
	}else{
		$('#select-todo-priority').val("");
	}
	

	if(atTodo && typeof atTodo.day != "undefined"){
		$('#select-todo-day').val(atTodo.day);
	}else{
		$('#select-todo-day').val("");
	}
	
		if(atTodo && typeof atTodo.fors != "undefined"){
		$('#select-todo-for').val(atTodo.fors);	
	}else{
		$('#select-todo-for').val("");
	}
	
	
	
	return;
	
    var str = '<div class="form-event pb-2 d-flex" data-key="' + key + '">' +
        '<div class="col-sm-9 text">' +
        '<input type="text" class="form-control" value="' + text + '">' +
        '</div>' +
        '<div class="col-sm-3">' +
        '<button class="btn btn-default save">Save</button>' +
        '</div>' +
        '</div>'
    return str
}

function addEventMaxim(text, key) {
	console.log(text, key)
	console.log(allMaximNew[key])
	
	var atMaxim = allMaximNew[key];
	
	$('#save-maxim').attr('idedit',key).show();
	$('#addbtn-maxim').hide();
	$('#add-maxim').val(text);
	$('#select-maxim-priority').val(atMaxim.priority);
	
	return;
}
function addEventGoal(text, key) {
    var str = '<div class="form-event pb-2 d-flex" data-key="' + key + '">' +
        '<div class="col-sm-10 view-a text">' +
        '<input type="text" class="form-control" value="' + text + '">' +
        '</div>' +
        '<div class="col-sm-2 event">' +
        '<button class="btn btn-default save_goal save_view iconbs"></button>' +
        '</div>' +
        '</div>'
    return str
}
function addEventHabit(text, key) {
    var str = '<div class="form-event pb-2 d-flex" data-key="' + key + '">' +
        '<div class="col-sm-9 text">' +
        '<input type="text" class="form-control" value="' + text + '">' +
        '</div>' +
        '<div class="col-sm-3">' +
        '<button class="btn btn-default save_habit">Save</button>' +
        '</div>' +
        '</div>'
    return str
}

function changeLinkImage(atClick,link, cat_id, key) {
    // var src = $(this).attr('str-big')
    //$('#image-img-photo').attr('src', link);
    $('.photo-list .img-thumbnail').removeClass('active');
    $(atClick).addClass('active')
    loadImage(link)
    $('#image-img-photo').attr('key-id', key);
    var d = new Date(allPhoto[key].time);

    $('#edit-private-photo').prop('checked', false);
    if (allPhoto[key].is_show == true) {
        $('#edit-private-photo').prop('checked', true);
    }
    $('#photo-time').html(d.toLocaleString())
    $('.list-cat-btn-edit').html('<option value="">All</option>' + buildSelectPhotoCat(cat_id))
    // var select = filterSelect(key, listOptionPhoto)
    var titlephoto = '';
    if(typeof allPhoto[key].time != undefined){
        titlephoto = allPhoto[key].title;
    }
    $('#title-photo').val(titlephoto);
}
function loadImage(link) {
    // Show the loading indicator
    $('#loading-photo').show();

    // Hide the image until it fully loads
    // $('#image-img-photo').hide();

    // Set the new src and handle the onload event
    $('#image-img-photo')
      .attr('src', link)
      .on('load', function () {
        // Hide the loading indicator
        $('#loading-photo').hide();

        // Show the image
        $(this).show();
      })
      .on('error', function () {
        // Handle the error case (optional)
        $('#loading-photo').hide();
        alert('Failed to load the image.');
      });
  }

function changeVideo(videoUrl, cat_id, key) {
    let domain = getDomain(videoUrl);
    var str = '';
    if (domain == 'facebook.com') {
        str += '<p><a href="' + videoUrl + '" target="_blank">Link video</a></p>';
        str += '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=' + videoUrl + '%2F&show_text=false&width=476&t=0" width="476" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>'
    } else {
        str = '<p><a href="' + videoUrl + '" target="_blank">Link video</a></p><iframe width="400" height="500" src="' + videoUrl + '" ></iframe>'
    }
    // return;

    $('#video-iframe').html(str);
}

function changeLinkVideo(videId, videoUrl, key, cat_id) {
    // $('#image-img-photo').attr('src', link)
    // $('#image-img-photo').attr('key-id', key)
    // var d = new Date(allPhoto[key].time);

    // $('#edit-private-photo').prop('checked', false);
    // if (allPhoto[key].is_show == true) {
    //     $('#edit-private-photo').prop('checked', true);
    // }
    // $('#photo-time').html(d.toLocaleString())
     $('#list-cat-btn-video-edit').html('<option value="">All</option>' + buildSelectVideoCat(cat_id))
    var timeShow = allVideo[key].time;
    $('#video-time').html(intToTime(timeShow));
    $('#id_video_now').attr('key-id', key);

    var str = '<p><a href="' + videoUrl + '" target="_blank">Link video</a></p><iframe src="https://www.youtube.com/embed/' + videId + '" width="100%" height="400px" allowfullscreen></iframe>';
    $('#video-iframe').html(str);
}
function changeVideoBase64(videId, videoUrl, key) {
    var decodedString = atob(videId);

    var str = '<p><a href="' + videoUrl + '" target="_blank">Link video</a></p>' + decodedString;
    $('#video-iframe').html(str);
}

function deleteVideo() {
    var idKey = $('#id_video_now').attr('key-id');
    if (idKey == null) {
        return;
    }
    var result = confirm("Want to delete?");
    if (!result) {
        return
    }
    console.log(idKey);
    var id = 'videos/' + user_ID + '/' + idKey;
    dbRef.ref(id).remove();
}

function checkDetailCalendar(at) {
    var attrDate = $(at).attr('data-day')
    if (attrDate == undefined) return

    showEventCalendar()

    $('#tb-calendar tr td').removeClass('at')
    $(at).addClass('at')

    // console.log($(this).attr('data-day'))
    // alert(attrDate)
    $('#date-at').val(attrDate)
    getCalendarDate(attrDate,function(dataCB){
		console.log(dataCB)
	})
    if ($(at).hasClass('had')) {
        $('#btnAddCalen').hide()
        $('#btnUpdateCalen').show()

        var listDate = attrDate.split('/')
        var dateInt = new Date(listDate[2], listDate[1] - 1, listDate[0]).getTime();

        var temp = returnDateDatainALl(dateInt)
        keyCalendar = temp[1]
        $('#date-content').val(temp[0].content)
        $('#date-at-type').val(temp[0].type)

    } else {
        $('#btnAddCalen').show()
        $('#btnUpdateCalen').hide()
        $('#date-content').val('')
    }
}

function addOrUpdateContentForCalendar(objectIn){
	var dateDMY = objectIn.day;
	getCalendarDate(dateDMY,function(dataCB){
		
		var listDate = dateDMY.split('/')
		var dateInt = new Date(listDate[2], listDate[1] - 1, listDate[0]).getTime();

		//console.log(dateInt)
		//console.log(type_date)
		//console.log(content)
		
		
		var ObjectChange = {};
		ObjectChange.date = dateInt;
		ObjectChange.content = objectIn.content;
		ObjectChange.time = new Date().getTime();
		ObjectChange.userId = user_ID;
		if(typeof objectIn.type != undefined ){
			ObjectChange.type = objectIn.type;
		}

		if(dataCB != null){
			//update
			console.log('update')
			const firstKey = Object.keys(dataCB)[0];
			const firstValue = dataCB[firstKey];
			
			calendarsRef = dbRef.ref('calendars/' + user_ID + "/" + firstKey)
			ObjectChange.content = firstValue.content +'\n'+ ObjectChange.content;
			calendarsRef.update(ObjectChange)
			
		}else{
			//add
			console.log('add')
			calendarsRef = dbRef.ref('calendars/' + user_ID)
			calendarsRef.push(ObjectChange)
		}
	})
}


var listOption = {};
listOption.default = {
	"": 'Default',
	0.1: 'FAVORIS',
	0.2: 'isBest',
	0.3: 'My Web',
	0.4: 'My Demo',
	0.5: 'They Web',
}
listOption.note = {
    3.0: 'Different',
    3.1: 'Video/Movie',
    3.2: 'Motivation',
    3.3: 'Music',
    3.4: 'Game',
    3.5: 'Link',
}
listOption.work = {
    1.1: 'Php',
    1.2: 'Wordpress',
    1.3: 'Template',
    1.4: 'Hosting',
    1.5: 'Server',
    1.6: 'Config',
    1.7: 'Codeigniter',
    1.8: 'Work',
}
listOption.learning = {
    2.1: 'Developer',
    2.2: 'Language',
    2.3: 'Love',
    2.4: 'Family',
    2.5: 'Book',
    2.6: 'Author',
}

var listOptionPhoto = {
    
    '1': 'Entertainment',
    '2': 'Defferent',
    '3': 'Health',
    '4': 'Companys',
    '5': 'Important',
    '6': 'Works',
    '7': 'Desktop',
    '8': 'Want',
    '9': 'People',
    '10': 'Month',
    '11': 'Year',
    '12': 'Art',
    '13': 'Learning',
    '14': 'Funny',
    '15': 'Report',
    '16': 'Screen Shoot',
    '17': 'Only My',
}
var atOnlyMy = 17;

var listOptionVideo = {
    0: 'Basic',
    1: 'Gym',
    2: 'Learning',
    3: 'Skill',
    4: 'Video',
    5: 'Movie',
    6: 'Entertaiment',
    7: 'Different',
    8: 'FAVORIS',
}



var firebaseConfig = {
    apiKey: "AIzaSyAuPuaJCP08o5JKW09F1XUWAy5GIiJ_cf8",
    authDomain: "link-save-d79c8.firebaseapp.com",
    databaseURL: "https://link-save-d79c8-default-rtdb.firebaseio.com",
    projectId: "link-save-d79c8",
    storageBucket: "link-save-d79c8.appspot.com",
    messagingSenderId: "567380847437",
    appId: "1:567380847437:web:eaca395ec37919f2f8a504",
    measurementId: "G-RWXYFREXB0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_ID = '';
var refGoodBad = 'goodbad/';

//invokes firebase authentication. 

const auth = firebase.auth();
document.querySelector("#show-register").addEventListener("click", () => {
    showRegistration();
});

const showRegistration = () => {
    document.querySelector("#registration-page").classList.remove("hide");
    document.querySelector("#login-page").classList.add("hide");
    document.querySelector("#homepage").classList.add("hide");
    // document.querySelector(".show-signout").classList.add("hide");
    $('.show-signout').hide();
};

document.querySelector("#show-login").addEventListener("click", () => {
    showLogin();
});


const showLogin = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.remove("hide");
    document.querySelector("#homepage").classList.add("hide");
    // document.querySelector(".show-signout").classList.add("hide");
    $('.show-signout').hide()
};

firebase.auth().onAuthStateChanged(user => {
    if (user) { } else {
        showLogin();
    }
})

document.querySelector(".signout").addEventListener("click", () => {
    signOut();
});

const register = () => {
    const email = document.querySelector("#registration-email").value;
    const reemail = document.querySelector("#registration-reemail").value;
    const password = document.querySelector("#registration-password").value;

    if (email.trim() == "") {
        alert("Enter Email");
    } else if (password.trim().length < 7) {
        alert("Password must be at least 7 characters");
    } else if (email != reemail) {
        alert("emails do not match");
    } else {
        auth
            .createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                // ...
            });
    }
};

document.querySelector("#register").addEventListener("click", () => {
    register();
});

//register when you hit the enter key
document
    .querySelector("#registration-password")
    .addEventListener("keyup", (e) => {
        if (event.keyCode === 13) {
            e.preventDefault();

            register();
        }
    });

const login = () => {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    if (email.trim() == "") {
        alert("Enter Email");
    } else if (password.trim() == "") {
        alert("Enter Password");
    } else {
        authenticate(email, password);
    }
};

document.querySelector("#login").addEventListener("click", () => {
    login();
});

//sign in when you hit enter
document
    .querySelector("#login-password")
    .addEventListener("keyup", (e) => {
        if (event.keyCode === 13) {
            e.preventDefault();

            login();
        }
    });

const authenticate = (email, password) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password);
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            //var user = userCredential.user;
            var status = $('#isremember').is(":checked");
            localStorage.setItem('isremember', status);
            // ...
          })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
};

const showHomepage = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.add("hide");
    //document.querySelector("#todo").classList.remove("hide");
	$('a[href="#todo"]').click();
    // document.querySelector(".show-signout").classList.remove("hide");
    $('.show-signout').show()
};

const signOut = () => {
    firebase
        .auth()
        .signOut()
        .then(function () {
            location.reload();
        })
        .catch(function (error) {
            alert("error signing out, check network connection");
        });
};

auth.onAuthStateChanged((firebaseUser) => {

    if (firebaseUser) {
        user_ID = firebaseUser.uid
        // $('#email_login').html(firebaseUser.email)
        $('#iduser').html(firebaseUser.email)
        $('.show-signout a').attr('title', firebaseUser.email)
        getSettingUser();
        showHomepage();
    }
});

function loadMoreAfterLogin(){
    //loadData();
    buildSelect();
    tabClick();
}

document
    .querySelector("#forgot-password")
    .addEventListener("click", () => {
        const email = document.querySelector("#login-email").value;
        if (email.trim() == "") {
            alert("Enter Email");
        } else {
            forgotPassword(email);
        }
    });

const forgotPassword = (email) => {
    auth
        .sendPasswordResetEmail(email)
        .then(function () {
            alert("email sent");
        })
        .catch(function (error) {
            alert("invalid email or bad network connection");
        });
};

// Ready to function

// var config = {
//     apiKey: "AIzaSyAuPuaJCP08o5JKW09F1XUWAy5GIiJ_cf8",
// 	  authDomain: "link-save-d79c8.firebaseapp.com",
// 	  databaseURL: "https://link-save-d79c8-default-rtdb.firebaseio.com",
// 	  projectId: "link-save-d79c8",
// 	  storageBucket: "link-save-d79c8.appspot.com",
// 	  messagingSenderId: "567380847437",
// 	  appId: "1:567380847437:web:eaca395ec37919f2f8a504",
// 	  measurementId: "G-RWXYFREXB0"
// };

// firebase.initializeApp(config);

//create firebase database reference
var dbRef = firebase.database();
var contactsRef = null;
//var calendarsRef = dbRef.ref('calendars/useriD');
var calendarsRef = null;
var fivetaskRef = null;
var photoRef = null;
var lengthSize = 0
var last = {}
var last_Key = ''
var pageLength = 5
var allContacts = {}
var allCalendar = {}
var allFiveTask = {}
var allPhoto = {}
var keyCalendar = '';
var allTaskNew = {}
var allTaskComplete = {}
var allMaximNew = {}
var allMaximComplete = {}
var allGoalNew = {}
var allGoalComplete = {}
var allHabitNew = {}
var allHabitComplete = {}
var allSWOT = {}
var allCRUM = {}

var videoRef = null;
var allVideo = {};

function sortDescObj(list, key, order = 'desc') {
    if (list == null || typeof list !== 'object' || Object.keys(list).length === 0) {
        return null;
    }

    // Sorting keys based on the specified order
    var sortedKeys = Object.keys(list).sort(function (a, b) {
        if (order === 'asc') {
            return list[a][key] > list[b][key] ? 1 : -1;
        } else {
            return list[a][key] > list[b][key] ? -1 : 1;
        }
    });

    // Creating a new sorted object
    var newObjectSort = {};
    for (let index = 0; index < sortedKeys.length; index++) {
        newObjectSort[sortedKeys[index]] = list[sortedKeys[index]];
    }
    return newObjectSort;
}

function onlyWithKeyObj(obj,key, value) {
if (typeof obj === "object" && obj !== null) {
        const filteredObj = {};

        // Iterate over the object's keys
        for (const [k, v] of Object.entries(obj)) {
            // If the value is an object, check if the key matches and the value is equal to the specified value
            if (v[key] === value) {
                filteredObj[k] = v;
            }
        }

        // Return filtered object, or null if no properties match
        return Object.keys(filteredObj).length > 0 ? filteredObj : null;
    }
    return null;
}


/*
function sortDescObj(list, key) {
    if (list == null || list == [] || list == {}) {
        return null
    }
    var sortedKeys = Object.keys(list).sort(function (a, b) {
        return list[a][key] > list[b][key] ? -1 : 1
    });
    var newObjectSort = {}
    var tem = []
    for (let index = 0; index < sortedKeys.length; index++) {
        tem = []
        //newObjectSort.push(list[sortedKeys[index]])
        newObjectSort[sortedKeys[index]] = list[sortedKeys[index]]
    }
    return newObjectSort
}
*/

function loadData() {
    //load older conatcts as well as any newly added one...
    var previousLastKey = ''
    contactsRef = dbRef.ref('contacts/' + user_ID)
    // ".indexOn": ["time"],
    // contactsRef.orderByChild('time').limitToFirst(6).startAt(1609037750431).on("child_added", function(snap) {
    var maxSize = 20;
    contactsRef.orderByChild('time').on("value", function (snapshot) {

        allContacts = snapshot.val()
		//console.log(allContacts)
		changeSortContacts(allContacts);
        //var newObjectSort = sortDescObj(allContacts, 'time')
        //showContentContact(newObjectSort)
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

    /*
    contactsRef.orderBy('time').limit(pageLength).on("child_added", function(snap) {
            console.log("added", snap.key, snap.val());
            // //console.log(snap.val())
            // lengthSize++
            // console.log(lengthSize)
            // $('#size-list').html(lengthSize)
            // $('#contacts').append(contactHtmlFromObject(snap.val()));
            var data = snap.val()
            last_Key = snap.key
            last = data
            showContent(data)
                //return snap.val()
        })
        // console.log(data)
        // showContent(data)
        */
}

function getListContactFilter(id_show){

    //var id_show = $("#home-select-forview option:selected").val();
    
    if(id_show == ''){
		$('#contacts').html('');
        loadData();
        return;
    }

    var listSearch = {};
    for (const property in allContacts) {
        var at = allContacts[property]
        

        if(at.location.city == id_show){
            //listSearch.push(at)
            listSearch[property] = at;
        }
    }
	changeSortContacts(listSearch);
   // var newObjectSort = sortDescObj(listSearch, 'time')
	//console.log(newObjectSort)
    

}
function changeSortContacts(allData){
	//console.log(allData)
	var stypeSort = $("#sort-contacts option:selected").val();
	var arrSort = stypeSort.split("_");
	var newObjectSort = sortDescObj(allData, arrSort[0], arrSort[1]);
	//var str = buildListVideo(newObjectSort)
	var str = getContentContact(newObjectSort, true);
	$('#contacts').html(str);
	
	var listObjectNumberCat = countNumberCategoryMulti(newObjectSort, 'location','city');
	showNumberToList(listObjectNumberCat,'#buttonListLink')
	
}

function getContentContact(data, isreset = false) {

	$('#size-list').html(0);
	
    if(isreset == true){
        $('#contacts').html('');
    }
	if(data == null){
		return;
	}

    // data.sort((a, b) => (a.time > b.time) ? 1 : -1)

    // $('#size-list').html(lengthSize)
    // $('#contacts').append(contactHtmlFromObject(snap.val()));
    // lengthSize++
    lengthSize = Object.keys(data).length
    $('#size-list').html(lengthSize)
	var str = "";
    for (var key in data) {
        //$('#contacts').append(contactHtmlFromObject(data[key]));
		str += contactHtmlFromObject(data[key], key);
    }
	return str;
}

function getNextPage() {
    return
    console.log(user_ID + '---' + last_Key)
    contactsRef.orderByChild('userId').startAt(user_ID, last_Key).limitToFirst(pageLength).on("child_added", function (snap) {
        // console.log("added", snap.key, snap.val());
        // //console.log(snap.val())
        // lengthSize++
        // console.log(lengthSize)
        // $('#size-list').html(lengthSize)
        // $('#contacts').append(contactHtmlFromObject(snap.val()));
        last_Key = snap.key
        last = data
        var data = snap.val()
        showContent(data)
        //return snap.val()
    })
}

function nextPage(last) {
    return
    return ref.orderBy(field)
        .startAfter(last[field])
        .limit(pageSize);
}

function prevPage(first) {
    return
    return ref.orderBy(field)
        .endBefore(first[field])
        .limitToLast(pageSize);
}

//save contact
$('.editValue').on("click", function (event) {
    event.preventDefault();
    
    var key = $('.editValue').attr('data-key');
    //contactsRef = dbRef.ref('contacts/' + user_ID)
    contactsRef = dbRef.ref('contacts/' + user_ID + '/' + key)

    contactsRef.update({
        name: $('#name').val().replace(/<[^>]*>/ig, ""),
        email: $('#email').val().replace(/<[^>]*>/ig, ""),
        location: {
            city: $('#city').val().replace(/<[^>]*>/ig, ""),
            state: $('#state').val().replace(/<[^>]*>/ig, ""),
            zip: $('#zip').val().replace(/<[^>]*>/ig, "")
        },
        time: new Date().getTime(),
    }).then(() => {
        $('#name').val('');
        $('#email').val('');
        // $('#home-select-forview').val('');
        // loadData();
        $('#city').val('');
        $('#state').val('');
        $('#zip').val('');
    });

    $('.addValue').show();
    $('.editValue').hide();

});
$('.addValue').on("click", function (event) {
    event.preventDefault();
    if ($('#name').val() != '' && $('#email').val() != '') {
        contactsRef = dbRef.ref('contacts/' + user_ID)
        contactsRef.push({
            name: $('#name').val().replace(/<[^>]*>/ig, ""),
            email: $('#email').val().replace(/<[^>]*>/ig, ""),
            location: {
                city: $('#city').val().replace(/<[^>]*>/ig, ""),
                state: $('#state').val().replace(/<[^>]*>/ig, ""),
                zip: $('#zip').val().replace(/<[^>]*>/ig, "")
            },
            time: new Date().getTime(),
            userId: user_ID
        }).then(() => {
            $('#name').val('');
            $('#email').val('');
            $('#home-select-forview').val('');
            // loadData();
            console.log('ad dome')
        });
        //contactForm.reset();
        

    } else {
        alert('Please fill atlease name or email!');
    }
});

//https://www.youtube.com/oembed
//www.youtube.com
function getDomain(url) {
    try {
        var url = new URL(url);

        const hostnameArray = url.hostname.split('.')
        const numberOfSubdomains = hostnameArray.length - 2
        return hostnameArray.length === 2 ? url.hostname : hostnameArray.slice(numberOfSubdomains).join('.')
    } catch (error) {
        return false;
    }
}


//save video
$('#video-input').on("focusout", function (event) {
    event.preventDefault();
    var linkvideo = $('#video-input').val();
    let domain = getDomain(linkvideo);
    if (domain == 'youtube.com' || domain  == 'youtu.be') {
        var link = 'https://www.youtube.com/oembed?url=' + linkvideo + '&format=json';
        $.getJSON(link, function (data) {
            $('#video-input-title').val(data.title)
        });
    } else {
        //$('#video-input-title').val('')
    }
});
$('.addVideo').on("click", function (event) {
    event.preventDefault();
    if ($('#video-input').val() != '' &&  $('#video-input-title').val() != '') {
        var linkvideo = $('#video-input').val();

        var fullvideo = allVideo;
        var is_result = checkSameVideoOld(linkvideo, fullvideo);
        if (is_result === false) {
            alert('Duplicate added video!');
            return;
        }
		

        var data = {};
        data.url = $('#video-input').val();
        data.title = $('#video-input-title').val();
        pushVideo(data);
        videoForm.reset();
    } else {
        alert('Please fill atlease video url!');
    }
});

function checkSameVideoOld(atVideo, allVideo) {
    if (allVideo == null) {
        return true;
    }
    const result = Object.values(allVideo).filter(value => {
        return value.url === atVideo;
    });
    if (result.length > 0) {
        return false;
    }
    return true;
}

function addCalendar() {

    var date = $('#date-at').val()
    var type_date = $('#date-at-type').val()
    var content = $('#date-content').val()
    calendarsRef = dbRef.ref('calendars/' + user_ID)

    // time: new Date().getTime(),
    // var monthYear = $('#monthyear').attr("month-year")
    var listDate = date.split('/')
    var dateInt = new Date(listDate[2], listDate[1] - 1, listDate[0]).getTime();

	console.log(dateInt)
	console.log(type_date)
	console.log(content)
	
    calendarsRef.push({
        date: dateInt,
        type: type_date,
        content: content,
        time: new Date().getTime(),
        userId: user_ID
    })
    hideEventCalendar()
}

function updateCalendar() {
    var date = $('#date-at').val()
    var type = $('#date-at-type').val()
    var content = $('#date-content').val()
    var key = keyCalendar;

    var listDate = date.split('/')
    var dateInt = new Date(listDate[2], listDate[1] - 1, listDate[0]).getTime();

    calendarsRef = dbRef.ref('calendars/' + user_ID + "/" + key)
    calendarsRef.update({
        date: dateInt,
        type: type,
        content: content,
        time: new Date().getTime(),
        userId: user_ID
    })
    hideEventCalendar()
}

function hideEventCalendar() {
    $('.calendar-event').hide()
    $('.list-calendar').removeClass('limit')
}

function showEventCalendar() {

    $('.calendar-event').show()
    $('.list-calendar').addClass('limit')
}

function getAllCalendar() {
    calendarsRef = dbRef.ref('calendars/' + user_ID)

    var monthYear = $('#monthyear').attr("month-year")
    var listDate = monthYear.split('/')
    var lastDate = getDaysInMonth(listDate[0], listDate[1])

    var first = new Date(listDate[1], listDate[0], 1).getTime();
    var end = new Date(listDate[1], listDate[0], lastDate).getTime();


    //console.log(listDate[1], listDate[0], 1)
    //console.log(listDate[1], listDate[0], lastDate)

    // console.log('first, end')
    // console.log('reaload')
    // alert('reaload')

    //calendarsRef.orderByChild('time').startAt(1608531964751).endAt(1608531997520).on("value", function (snapshot) {
    calendarsRef.orderByChild('date').startAt(first).endAt(end).on("value", function (snapshot) {
        // console.log(snapshot.val());
        allCalendar = snapshot.val()

        // console.log(typeof allCalendar)
        // var output =  allCalendar.filter(employee => employee.date == "12/12/2012"); 
        // console.log(output)
        // var startDate = 1;
        // var atday = $('#date-at').val()
        for (var key in allCalendar) {
            // console.log(allCalendar[key])
            var dataAt = allCalendar[key]
            var day = dataAt.date

            var d = new Date(day);
            //var temp = d.toLocaleDateString();
            var temp = d.toLocaleDateString('pt-PT');

            var listDate = temp.split('/')
            //var dateInt = new Date(listDate[2], listDate[1] - 1, listDate[0]).getTime();
            var dmy = parseInt(listDate[0]) + '/' + parseInt(listDate[1]) + '/' + listDate[2]
            //var listDate = date.split('/')
            //var dateInt = new Date(listDate[2], listDate[1], listDate[0]).getTime();

            $('#tb-calendar').find('td[data-day="' + dmy + '"]').addClass('had')
            // console.log($('#tb-calendar').find('td[data-day="' + day + '"]'))
        }
        // allCalendar.for
        buildListCalendar(allCalendar)

        // alert(lastDate)

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    return
    calendarsRef.on("child_added", function (snap) {


        //alert(1)
        //console.log("added - calendar", snap.key, snap.val());
        //console.log(snap.val())
        // lengthSize++
        // console.log(lengthSize)
        // $('#size-list').html(lengthSize)
        // $('#contacts').append(contactHtmlFromObject(snap.val()));
        // last_Key = snap.key
        // last = data
        var data = snap.val()
        allCalendar[snap.key] = {}
        allCalendar[snap.key] = data
        // allCalendar.push(data)
        //$('#date-content').text(data.content)
    })
}

function addFiveTaskToday() {
    fivetaskRef = dbRef.ref('fivetask_today/' + user_ID)
    fivetaskRef.push({
        date: getDateTimeToday(),
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        is_one: false,
        is_two: false,
        is_three: false,
        is_four: false,
        is_five: false,
        time: new Date().getTime(),
        time_add: new Date().getTime(),
        userId: user_ID
    })
}

$("#fivetask .form-group textarea").focusout(function(){
    updateFiveTaskToday();
  });
  $('#fivetask .form-group input').change(function() {
    updateFiveTaskToday();
  });
function updateFiveTaskToday() {

    var key = $('#add-task-id').val();
    fivetaskRef = dbRef.ref('fivetask_today/' + user_ID + '/' + key)
    fivetaskRef.update({
        date: getDateTimeToday(),
        one: $('#add-task-1').val(),
        two: $('#add-task-2').val(),
        three: $('#add-task-3').val(),
        four: $('#add-task-4').val(),
        five: $('#add-task-5').val(),
        is_one: $("#check-task-1").is(':checked') ? true : false,
        is_two: $("#check-task-2").is(':checked') ? true : false,
        is_three: $("#check-task-3").is(':checked') ? true : false,
        is_four: $("#check-task-4").is(':checked') ? true : false,
        is_five: $("#check-task-5").is(':checked') ? true : false,
        time: new Date().getTime(),
        userId: user_ID
    })
}

function getDateTimeToday(formart = '-') {
    const d = new Date() // today, now
    var datetoday = d.toLocaleDateString('pt-PT');
    //datetoday = datetoday.replaceAll('/', '-')
    datetoday = datetoday.replaceAll('/', formart)
    //console.log(datetoday) // 17-06-2021
    return datetoday;
}

function getAllFiveTask() {

    const d = new Date() // today, now
    var datetoday = d.toLocaleDateString('pt-PT');
    datetoday = datetoday.replaceAll('/', '-')
    //console.log(datetoday) // 17-06-2021
    //return;
    getFiveTaskToday()
    getFiveTaskOld()
}

function getFiveTaskToday() {
    fivetaskRef = dbRef.ref('fivetask_today/' + user_ID)

    var datetoday = getDateTimeToday()
    fivetaskRef.orderByChild('date').equalTo(datetoday).limitToFirst(2).on("value", function (snapshot) {
        //console.log(snapshot.val());
        var dataReturn = snapshot.val()
        //console.log(dataReturn);
        if (dataReturn != null) {
            //for (let index = 0; index < dataReturn.length; index++) {
            //console.log(dataReturn);
            for (var key in dataReturn) {
                const element = dataReturn[key];
                $('#add-task-id').val(key)
                $('#add-task-1').val(element.one)
                $('#add-task-1').attr('rows', getLine(element.one));

                $('#add-task-2').val(element.two)
                $('#add-task-2').attr('rows', getLine(element.two));

                $('#add-task-3').val(element.three)
                $('#add-task-3').attr('rows', getLine(element.three));

                $('#add-task-4').val(element.four)
                $('#add-task-4').attr('rows', getLine(element.four));

                $('#add-task-5').val(element.five)
                $('#add-task-5').attr('rows', getLine(element.five));

                if (element.is_one) {
                    $("#check-task-1").attr('checked', 'checked')
                }
                if (element.is_two) {
                    $("#check-task-2").attr('checked', 'checked')
                }
                if (element.is_three) {
                    $("#check-task-3").attr('checked', 'checked')
                }
                if (element.is_four) {
                    $("#check-task-4").attr('checked', 'checked')
                }
                if (element.is_five) {
                    $("#check-task-5").attr('checked', 'checked')
                }

            }

        } else {
            addFiveTaskToday()
        }

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
}

function getLine(value){
    var row= value.split('\n').length;
    if(row<=3){
        row=3;
    }
    return row;
}

function getFiveTaskOld() {

    fivetaskRef.orderByChild('date').on("value", function (snapshot) {
        //console.log(snapshot.val());
        allFiveTask = snapshot.val()
        // console.log(dataReturn);
        if (allFiveTask != null) {
            buildListFiveTask(allFiveTask)
        }

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
}


function buildListFiveTask(dataIn) {
    //console.log(dataIn)
    dataIn = sortobjkeyOrderLast(dataIn, 'time_add')

    var str = '<ol>';
    for (var key in dataIn) {
        str += '<li>'
        str += dataIn[key]['date']
        str += '<ol>'
        var record1 = dataIn[key]['one']
        var record2 = dataIn[key]['two']
        var record3 = dataIn[key]['three']
        var record4 = dataIn[key]['four']
        var record5 = dataIn[key]['five']


        // if (dataIn[key].is_one) {
        //     $("#check-task-1").attr('checked', 'checked')
        // }
        // if (dataIn[key].is_two) {
        //     $("#check-task-2").attr('checked', 'checked')
        // }
        // if (dataIn[key].is_three) {
        //     $("#check-task-3").attr('checked', 'checked')
        // }
        // if (dataIn[key].is_four) {
        //     $("#check-task-4").attr('checked', 'checked')
        // }
        // if (dataIn[key].is_five) {
        //     $("#check-task-5").attr('checked', 'checked')
        // }

        str += '<li class="s-task ' + dataIn[key].is_one + '">' + record1 + '</li>'
        str += '<li class="s-task ' + dataIn[key].is_two + '">' + record2 + '</li>'
        str += '<li class="s-task ' + dataIn[key].is_three + '">' + record3 + '</li>'
        str += '<li class="s-task ' + dataIn[key].is_four + '">' + record4 + '</li>'
        str += '<li class="s-task ' + dataIn[key].is_five + '">' + record5 + '</li>'

        str += '</ol>'
        // console.log(allCalendar[key])
        // var dataAt = dataIn[key]
        // var day = dataAt.date
        //     // $('#tb-calendar').find('td[data-day="'+day+'"]').addClass('had')
        //     // console.log(day)
        //     // console.log($('#tb-calendar').find('td[data-day="'+day+'"]'))
        // var d = new Date(day);
        // var temp = d.toLocaleDateString();
        // var listD = temp.split('/')

        // var typeShow = ''
        // if (dataAt.type !== undefined) {
        //     typeShow = dataAt.type;
        // }
        // str += '<p>' + listD[1] + '/' + listD[0] + '/' + listD[2] + ' --' + typeShow + '</p>'
        // str += '<pre>' + escape(dataAt.content) + '</pre>'
        str += '</li>'
    }
    str += '</ol>';
    //console.log(str)
    $('#list-five-task').html(str);
}

function buildListCalendar(dataIn) {

    if (dataIn != undefined) {
        if ($('#monthyear #number').length != 0) {
            $('#monthyear #number').html('(' + Object.keys(dataIn).length + ')')
        } else {
            $('#monthyear').append('<sup id="number">(' + Object.keys(dataIn).length + ')</sup>')
        }

    }

    dataIn = sortobjkey(dataIn, 'date')

    var str = '';
    for (var key in dataIn) {
        str += '<li>'
        // console.log(allCalendar[key])
        var dataAt = dataIn[key]
        var day = dataAt.date
        // $('#tb-calendar').find('td[data-day="'+day+'"]').addClass('had')
        // console.log(day)
        // console.log($('#tb-calendar').find('td[data-day="'+day+'"]'))
        var d = new Date(day);
        //var temp = d.toLocaleDateString();

        var temp = d.toLocaleDateString('pt-PT');
        //temp = temp.replaceAll('/', '-')

        var listD = temp.split('/')

        var typeShow = ''
        if (dataAt.type !== undefined) {
            typeShow = dataAt.type;
        }
        str += '<p class="show-cl-detail" attr-dmn='+parseInt(listD[0])+'/'+parseInt(listD[1])+'/'+parseInt(listD[2])+'>' + listD[0] + '/' + listD[1] + '/' + listD[2] + ' --' + typeShow + '</p>'
        str += '<pre>' + escape(dataAt.content) + '</pre>'
        str += '</li>'
    }
    $('#list-calendar').html(str);
}

function escape(str) {

    return $('<div>').text(str).html();
    c = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#039;',
        '#': '&#035;'
    };
    return str.replace(/[<&>'"#]/g, function (s) { return c[s]; });


    return text.replace(/[<>\&\"\']/g, function (c) {
        return '&#' + c.charCodeAt(0) + ';';
    });
}


function sortobjkey(obj, key) {
    if (obj == {} || obj == undefined || obj == '') return {}
    var keys = Object.keys(obj);
    var kva = keys.map(function (k, i) {
        return [k, obj[k]];
    });
    kva.sort(function (a, b) {
        k = key;
        if (a[1][k] < b[1][k]) return -1;
        if (a[1][k] > b[1][k]) return 1;
        return 0
    });
    var o = {}
    kva.forEach(function (a) { o[a[0]] = a[1] })
    return o;
}

function sortobjkeyOrderLast(obj, key) {
    if (obj == {} || obj == undefined || obj == '') return {}
    var keys = Object.keys(obj);
    var kva = keys.map(function (k, i) {
        return [k, obj[k]];
    });
    kva.sort(function (a, b) {
        k = key;
        if (a[1][k] > b[1][k]) return -1;
        if (a[1][k] < b[1][k]) return 1;
        return 0
    });
    var o = {}
    kva.forEach(function (a) { o[a[0]] = a[1] })
    return o;
}


function returnDateDatainALl(inDay) {
    for (var key in allCalendar) {
        // console.log(allCalendar[key])
        var dataAt = allCalendar[key]
        var day = dataAt.date
        if (day == inDay) {
            return [dataAt, key]
        }
    }
}

function getCalendarDate(dateDMY, callback) {
    //getAllCalendar()
    //return
    if (dateDMY == undefined) return
    //$('#date-content').val()
    calendarsRef = dbRef.ref('calendars/' + user_ID)
	
	var listDate = dateDMY.split('/')
	var dateInt = new Date(listDate[2], listDate[1] - 1, listDate[0]).getTime();

    calendarsRef.orderByChild('date').equalTo(dateInt).limitToFirst(1).once("value", function (snap) {
        var data = snap.val()
		callback(data);
    })
	//callback({})
    // calendarsRef.off('value', function () {
    //     alert('2')
    // });
}

function searchInData(data, searchTerm) {
    return data.filter(item => {
        return Object.values(item).some(innerObj => {
            return searchObject(innerObj, searchTerm);
        });
    });
}

function searchObject(obj, searchTerm) {
    // Check if any value in the object contains the searchTerm
    return Object.values(obj).some(value => {
        if (typeof value === 'object' && value !== null) {
            return searchObject(value, searchTerm); // Recurse if it's an object
        }
        return String(value).toLowerCase().includes(searchTerm.toLowerCase()); // Case-insensitive search
    });
}


function searchObject(data, searchTerm) {
    // Iterate through each entry in the object
    const result = Object.entries(data)
        .filter(([key, value]) => {
            // Search for the term in all values of the object
            return Object.values(value).some(innerValue => {
                if (typeof innerValue === 'object' && innerValue !== null) {
                    // If it's an object (like 'location'), check its properties
                    return Object.values(innerValue).some(innerObjValue =>
                        String(innerObjValue).toLowerCase().includes(searchTerm.toLowerCase())
                    );
                }
                // If it's a primitive value (like 'email', 'name', etc.), check the value directly
                return String(innerValue).toLowerCase().includes(searchTerm.toLowerCase());
            });
        })
        .reduce((acc, [key, value]) => {
            // Rebuild the object with the matching entries
            acc[key] = value;
            return acc;
        }, {});

    return result;
}

const searchInput = document.getElementById("searchhome");
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
    // Clear the input field when the button is clicked
    searchInput.value = "";
    $('#clearButton').hide();
    loadData();
});
function clearInput(at){
    $(at).hide();
    $(at).closest('div').find('input').val('');
}
function onChangeInput(at){
    var input =at.value.toLowerCase();
    if(input == ''){
        $(at).closest('div').find('.clearbtn').hide();
        return loadData();
    }
    $(at).closest('div').find('.clearbtn').show();
}
function changeSearch() {
    const input = document.getElementById("searchhome").value.toLowerCase();
    // const resultsDiv = document.getElementById("results");
    // resultsDiv.innerHTML = ""; // Clear previous results

    // console.log(allContacts)
    // console.log(JSON.stringify(allContacts))

    // Filter data based on input
    // const filteredData = allContacts.filter(item => item.name.toLowerCase().includes(input));
    // console.log(filteredData)

    if(input == ''){
        $('#clearButton').hide();
        return loadData();
    }
    $('#clearButton').show();

    // Example Usage
    const searchTerm = input;
    const filteredData = searchObject(allContacts, searchTerm);
    console.log(filteredData);
    console.log('atfile')

    var str = getContentContact(filteredData, true);
	$('#contacts').html(str);

    // Display the results
    // if (filteredData.length > 0) {
    //     filteredData.forEach(item => {
    //         const resultItem = document.createElement("div");
    //         resultItem.textContent = `${item.id}: ${item.name}`;
    //         resultsDiv.appendChild(resultItem);
    //     });
    // } else {
    //     resultsDiv.textContent = "No results found.";
    // }
}

function edithome(key){
    console.log('edit at')
    console.log(key)
    var atNow = allContacts[key];
    if(typeof atNow == "undefined"){
        console.log('at is Undefined')
        return;
    }
    console.log(atNow)
    console.log(atNow.email)

    // name: $('#name').val().replace(/<[^>]*>/ig, ""),
    //         email: $('#email').val().replace(/<[^>]*>/ig, ""),
    //         location: {
    //             city: $('#city').val().replace(/<[^>]*>/ig, ""),
    //             state: $('#state').val().replace(/<[^>]*>/ig, ""),
    //             zip: $('#zip').val().replace(/<[^>]*>/ig, "")
    //         },
    //         time: new Date().getTime(),
    //         userId: user_ID
    $('#name').val(atNow.name);
    $('#email').val(atNow.email);
    $('#city').val(atNow.location.city);
    $('#state').val(atNow.location.state);
    $('#zip').val(atNow.location.zip);

    $('.editValue').attr('data-key',key);

    $('.addValue').hide();
    $('.editValue').show();
}
//prepare conatct object's HTML
function contactHtmlFromObject(contact, key) {
    var html = '';
    html += '<li class="list-group-item contact">';
    html += '<div>';
    if (contact.name != '') {
        html += '<p class="lead">' + contact.name + '</p>';
    }
    html += '<p><a href="' + contact.email + '" target="_blank" title="' + contact.email + '">' + contact.email + '</a><button onclick="edithome(&#39;'+key+'&#39;)">Edit</button></p>';
    var textSelect = ''
    if (contact.location != undefined) {
        textSelect = filterSelect(contact.location.city, listOption)
    }

    if (textSelect != '') {


        var strZip = contact.location.zip == "" ? '' : '--' + contact.location.zip
        var strState = contact.location.state == "" ? '' : ',' + contact.location.state
        html += '<p><small>' + '<b>' + textSelect + '</b>' + strState + strZip + '</small></p>';
    }
    if (contact.time != undefined) {
        var d = new Date(contact.time);
        html += '<p>' + d.toLocaleString() + '</p>';
    }
    html += '</div>';
    html += '</li>';
    return html;
}


function buildSelect() {
    var str = '';
    for (const prop in listOption) {
        str += '<optgroup label="' + prop + '">'
        //console.log(listOption[prop])
        for (const prop1 in listOption[prop]) {
            // console.log(listOption[prop][prop1])
            str += '<option value="' + prop1 + '">' + listOption[prop][prop1] + '</option>'
        }
        str += '</optgroup>'
    }
    //str += '</select>';
    //console.log(str)
    $('.list-select-option').html(str);
	buildSelectToBtn();
}


function buildSelectToBtnBasic(atSelect,atView){
	const $buttonList = $(atView);
	$(atSelect+" option").each(function() {
		const optionText = $(this).text();
		const optionValue = $(this).val();

		// Create li and button elements
		const $li = $("<li>");
		const $button = $("<button>")
			.text(optionText)
			.attr("data-name", optionText)
			.val(optionValue)
			.on("click", function() {
				console.log("Button clicked:", $(this).val());
			});

		// Append button to li, and li to ul
		$li.append($button);
		$buttonList.append($li);
	});
}
function buildSelectToBtn(){
	const $buttonList = $("#buttonListLink");

    // Iterate through each optgroup in the select element
    $("#home-select-forview optgroup").each(function() {
        const groupLabel = $(this).attr("label");

        // Create an li element for the optgroup label
        const $groupHeader = $("<li>").text(groupLabel).addClass("group-header");
        $buttonList.append($groupHeader);

        // Iterate through each option within the current optgroup
        $(this).find("option").each(function() {
            const optionText = $(this).text();
            const optionValue = $(this).val();

            // Create button within li
            const $li = $("<li>");
            const $button = $("<button>")
                .text(optionText)
                .val(optionValue)
                .attr("data-name", optionText)
                .on("click", function() {
                    console.log("Button clicked:", $(this).val());
                });

            // Append button to li, and li to ul
            $li.append($button);
            $buttonList.append($li);
        });
    });
}

function buildSelectPhotoCat(key) {
    var str = '';
    for (const prop in listOptionPhoto) {
        if (key == prop) {
            str += '<option value="' + prop + '" selected>' + listOptionPhoto[prop] + '</option>'
        } else {
            str += '<option value="' + prop + '">' + listOptionPhoto[prop] + '</option>'
        }

    }
    //str += '</select>';
    //console.log(str)
    return str //
}

function buildSelectVideoCat(key) {
    var str = '';
    for (const prop in listOptionVideo) {
        if (key == prop) {
            str += '<option value="' + prop + '" selected>' + listOptionVideo[prop] + '</option>'
        } else {
            str += '<option value="' + prop + '">' + listOptionVideo[prop] + '</option>'
        }

    }
    //str += '</select>';
    //console.log(str)
    return str //
}

function filterSelect(atId, oBject) {
    //var strReturn = '';
    for (const prop in oBject) {
        for (const prop1 in oBject[prop]) {
            if (prop1 == atId) {
                return oBject[prop][prop1]
            }
        }
    }
    return ''
}

function getDaysInMonth(m, y) {
    m++
    return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
}

function pushPhoto(image) {
    var is_show = $('#img_is_show').is(':checked');
    var id_cat = $(".list-select-option-photo option:selected").val();
    var image = image
    photoRef = dbRef.ref('photos/' + user_ID)

    photoRef.push({
        is_show: is_show,
        pic: image,
        id_cat: id_cat,
        time: new Date().getTime(),
        userId: user_ID
    })
}

function pushVideo(data) {
    var is_show = $('#img_is_show_video').is(':checked');
    //var id_cat = $(".list-select-option-video option:selected").val();
	var id_cat = $('#option-video').val();
    var videoId = YouTubeGetID(data.url);
    // alert(videoId)
    if (videoId == '') {
        //get path and domain
        // data.url = data.url.match(new RegExp("[^?]+"))
        // data.url = data.url[0]
    }
    videoRef = dbRef.ref('videos/' + user_ID)

    videoRef.push({
        is_show: is_show,
        url: data.url,
        videId: videoId,
        id_cat: id_cat,
        title: data.title,
        time: new Date().getTime(),
        userId: user_ID
    })
}

function YouTubeGetID(url) {

    if (url.lastIndexOf('youtube') >= 0) {
        let regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
        return regex.exec(url)[3];
    }
    return '';
    // let domain = getDomain(url);
    // if (doain.hostm != 'youtube.com') {
    //     return '';
    // }


    // var ID = '';
    // url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    // if (url[2] !== undefined) {
    //     ID = url[2].split(/[^0-9a-z_\-]/i);
    //     ID = ID[0];
    // } else {
    //     ID = '';
    // }
    // return ID;
}

var lastTimePhoto = ''

function getListPhoto() {
    photoRef = dbRef.ref('photos/' + user_ID)
    var id_cat_show = $(".list-cat-btn option:selected").val();
    var query = photoRef.limitToLast(9999);

    if (id_cat_show != '') {
        query = photoRef.orderByChild("id_cat").equalTo(id_cat_show)
    }
    query.on("value", function (snapshot) {
        //photoRef.on("value", function(snapshot) {
        // console.log(snapshot.val());
        allPhoto = snapshot.val()
        var newObjectSort = sortDescObj(allPhoto, 'time')
        var str = buildListPhoto(newObjectSort)
        $('#photo .list-image').html(str);
        lazyLoad();
        if (snapshot.val() != null){
            lastTimePhoto = newObjectSort[Object.keys(newObjectSort)[Object.keys(newObjectSort).length - 1]].time
        }else{
            lastTimePhoto ={};
        }
            
    })
}
/*
function getListVideo() {
    videoRef = dbRef.ref('videos/' + user_ID)
    var id_cat_show = $(".list-cat-btn-video option:selected").val();
    var query = videoRef.limitToLast(9999);

    if (id_cat_show != '') {
        query = videoRef.orderByChild("id_cat").equalTo(id_cat_show)
    }
    query.on("value", function (snapshot) {
        //videoRef.on("value", function(snapshot) {
        // console.log(snapshot.val());
        allVideo = snapshot.val()
        var newObjectSort = sortDescObj(allVideo, 'time')
        var str = buildListVideo(newObjectSort)
        $('#video .list-image').html(str);
        //$('#photo .list-image').html(str);
        //if (snapshot.val() != null)
        //    lastTimePhoto = newObjectSort[Object.keys(newObjectSort)[Object.keys(newObjectSort).length - 1]].time
    })
}
*/

var lastTimeVideo = ''

function getListVideo(id_cat_show) {
    videoRef = dbRef.ref('videos/' + user_ID)
    //var id_cat_show = $(".list-cat-btn-video option:selected").val();
    var query = videoRef.limitToLast(9999);

    if (id_cat_show != '') {
        query = videoRef.orderByChild("id_cat").equalTo(id_cat_show)
    }else{
		query = videoRef
	}
    query.on("value", function (snapshot) {
        //photoRef.on("value", function(snapshot) {
        // console.log(snapshot.val());
        // return;
        allVideo = snapshot.val();
		changeSortVideo();
		
        //console.log(JSON.stringify(allVideo))
		//var typeSort = $("#sort-video option:selected").val();
        //var newObjectSort = sortDescObj(allVideo, typeSort)
        //var str = buildListVideo(newObjectSort)
        //$('#video .list-image').html(str);
        
    })
}
function changeSortVideo(){
	var stypeSort = $("#sort-video option:selected").val();
	var arrSort = stypeSort.split("_");
	var newObjectSort = sortDescObj(allVideo, arrSort[0], arrSort[1]);

	var listObjectNumberCat = countNumberCategory(newObjectSort, 'id_cat');
	showNumberToList(listObjectNumberCat,'#buttonListVideo')
	var str = buildListVideo(newObjectSort)
	$('#video .list-image').html(str);
    lazyLoad();
}

function showNumberToList(data,atIdSelect){
	for (const item in data) {
		var oldhtml = $(atIdSelect).find('button[value="'+item+'"]').attr('data-name');
		$(atIdSelect).find('button[value="'+item+'"]').html(oldhtml+'('+data[item]+')');
	}
}

function countNumberCategory(data, keyName){
	const countByTypeCategory = {};

	// Loop through each nested object
	for (const item in data) {
		const typeCategory = data[item][keyName];
		countByTypeCategory[typeCategory] = (countByTypeCategory[typeCategory] || 0) + 1;
	}
	return countByTypeCategory;
}
function countNumberCategoryMulti(data, keyName, key2){
	const countByTypeCategory = {};

	// Loop through each nested object
	for (const item in data) {
		const typeCategory = data[item][keyName][key2];
		countByTypeCategory[typeCategory] = (countByTypeCategory[typeCategory] || 0) + 1;
	}
	return countByTypeCategory;
}

function getListPhotoNext() {
    return
    photoRef = dbRef.ref('photos/' + user_ID)
    var id_cat_show = $(".list-cat-btn option:selected").val();
    // var query = photoRef.limitToLast(10);

    var query = photoRef.orderByChild('time').limitToFirst(11).startAt(lastTimePhoto)

    // if (id_cat_show != '') {
    //     query = photoRef.orderByChild("id_cat").equalTo(id_cat_show)
    // }
    query.on("value", function (snapshot) {
        //photoRef.on("value", function(snapshot) {
        // console.log(snapshot.val());
        // allPhoto = {...allPhoto, ...snapshot.val() };
        $.extend(allPhoto, snapshot.val())
        console.log('allPhoto update')
        //console.log(allPhoto)
        var str = buildListPhoto(allPhoto)

        $('#photo .list-image').append(str);
        lastTimePhoto = allPhoto[Object.keys(allPhoto)[Object.keys(allPhoto).length - 1]].time
        // console.log(lastTimePhoto)

    })
}

function updatePhoto() {
    var id_cat_new = $(".list-cat-btn-edit option:selected").val();
    var titlephoto = $("#title-photo").val();
    var is_show_new = $('#edit-private-photo').is(':checked');
    var key = $("#image-img-photo").attr('key-id');
    photoRef = dbRef.ref('photos/' + user_ID + '/' + key)
    photoRef.update({
        is_show: is_show_new,
        pic: allPhoto[key]['pic'],
        id_cat: id_cat_new,
        title: titlephoto,
        // time: new Date().getTime(),
        // userId: user_ID
    })
}
function updateVideo() {
    var id_cat_new = $("#list-cat-btn-video-edit option:selected").val();
    var key = $("#id_video_now").attr('key-id');
	videoRef = dbRef.ref('videos/' + user_ID+ '/' + key)
    videoRef.update({
        //is_show: is_show_new,
        //pic: allPhoto[key]['pic'],
        id_cat: id_cat_new,
        time: new Date().getTime(),
        userId: user_ID
    })
}

function buildListPhoto(dataIn) {
    
    if(dataIn == null){
        $('#total-photo').html(0);
        return '';
    }
    lengthSize = Object.keys(dataIn).length;
    $('#total-photo').html(lengthSize);

    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]
        if (dataAt.is_show == false && dataAt.id_cat !=atOnlyMy) {
            str += '<div class="col-sm-3 col-xs-4"><img class="img-thumbnail lazy" onclick="changeLinkImage(this,&apos;' + dataAt.pic + '&apos;,&apos;' + dataAt.id_cat + '&apos;,&apos;' + key + '&apos;)" str-big="' + dataAt.pic + '" data-src="' + getThump(dataAt.pic) + '" alt=""></div>'
        } else {
            str += '<div class="col-sm-3 col-xs-4"><img class="img-thumbnail hiden" onclick="changeLinkImage(this,&apos;' + dataAt.pic + '&apos;,&apos;' + dataAt.id_cat + '&apos;,&apos;' + key + '&apos;)" str-big="' + dataAt.pic + '" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt=""></div>'
        }
    }
    return str;
}

function buildListVideo(dataIn) {
	$('#total-video').html(0);
    if (dataIn == null) {
        console.log('No have video')
        return '';
    }
    console.log(dataIn);
    lengthSize = Object.keys(dataIn).length;
    $('#total-video').html(lengthSize);

    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]
        let domain = getDomain(dataAt.url);

        if (dataAt.is_show == false && typeof dataAt.videId != undefined && domain == 'youtube.com') {
            str += '<div class="col-sm-3 col-xs-6"><img class="img-thumbnail lazy" onclick="changeLinkVideo(&apos;' + dataAt.videId + '&apos;,&apos;' + dataAt.url + '&apos;,&apos;' + key + '&apos;,&apos;' + dataAt.id_cat + '&apos;)" str-big="' + dataAt.url + '" data-src="https://i.ytimg.com/vi/' + dataAt.videId + '/default.jpg" src="https://i.imgur.com/zHOHgOM.png" alt="" title="' + dataAt.title + '"><p class="hide">' + dataAt.title + '</p></div>'
            str += '<div class="col-sm-3 col-xs-6"><small>' + dataAt.title + '</small></div>';
        } else {
            try {
                str += '<div class="col-sm-3 col-xs-6"><img class="img-thumbnail hiden" onclick="changeVideoBase64(&apos;' + btoa(dataAt.url) + '&apos;,&apos;' + dataAt.id_cat + '&apos;,&apos;' + key + '&apos;)" str-big="https://i.imgur.com/zHOHgOM.png" src="https://i.imgur.com/zHOHgOM.png" alt="" title="' + dataAt.title + '"><p class="hide">' + dataAt.title + '</p></div>'
                str += '<div class="col-sm-3 col-xs-6"><small>' + dataAt.title + '</small></div>';
            } catch (error) {
                console.log(error);
                console.log(dataAt);
            }
        }

    }
    return str;
}



function getThump(str) {
    var res = str.split(".");
    res[res.length - 2] = res[res.length - 2] + 's'
    var re = res.join('.')
    return re
}

var feedback = function (res) {
    if (res.success === true) {
        // console.log(res.data.link)
        pushPhoto(res.data.link)
    }
};

new Imgur({
    clientid: '8d5315fbe5fbbcd',
    callback: feedback
});


function pushTodo() {
    var todo = $('#add-todo').val();
    var todo_priority = $('#select-todo-priority').val();
    var todo_day = $('#select-todo-day').val();
    var todo_for = $('#select-todo-for').val();
    if (todo == '') {
        return
    }
    todoRef = dbRef.ref('todos/' + user_ID)

    todoRef.push({
        task: todo,
        day: todo_day,
        fors: todo_for,
        priority: todo_priority,
        status: 'new',
        isClick:'false',
        time: new Date().getTime(),
        userId: user_ID
    })
    $('#add-todo').val('');
    $('#select-todo-priority').val('');
    $('#select-todo-day').val('');
    $('#select-todo-for').val('');
}
function pushMaxim() {
    
    var maxim_priority = $('#select-maxim-priority').val();
    var maxim = $('#add-maxim').val();
	if(maxim==""){
		alert('Not empty');
		return;
	}
    maximRef = dbRef.ref('maxims/' + user_ID)

    maximRef.push({
        task: maxim,
        // day: todo_day,
        priority: maxim_priority,
        status: 'new',
        time: new Date().getTime(),
        userId: user_ID
    })
    $('#add-maxim').val('');
    $('#select-maxim-priority').val('');
}
function pushGoal() {
    var agoal = $('#add-goal').val();
    var type = $('input[name="type-goal"]:checked').val();
    if (agoal == '') {
        return
    }
    goalRef = dbRef.ref('goals/' + user_ID)
    console.log('add goal')
    goalRef.push({
        task: agoal,
        type: type,
        status: 'new',
        time: new Date().getTime(),
        userId: user_ID
    })
    $('#add-goal').val('');
}
function pushHabit() {
    var ahabit = $('#add-habit').val();
     var type = $('input[name="type-habit"]:checked').val();

    if (ahabit == '') {
        return
    }
    habitRef = dbRef.ref('habits/' + user_ID)

    habitRef.push({
        task: ahabit,
        type: type,
        status: 'new',
        time: new Date().getTime(),
        userId: user_ID
    })
    $('#add-habit').val('');
}

function updateTodo(objUpdate, key) {
    todoRef = dbRef.ref('todos/' + user_ID + '/' + key)
	// objUpdate.time = new Date().getTime();
    todoRef.update(objUpdate);
	/*
	todoRef.update({
        task: todo,
        status: status,
        time: new Date().getTime(),
        userId: user_ID
    })
	*/
	
	//move to caladar if todo delete
    triggerOldClick();
}
function updateMaxim(objUpdate, key) {
    maximRef = dbRef.ref('maxims/' + user_ID + '/' + key)
	objUpdate.time = new Date().getTime();
    maximRef.update(objUpdate);
}
function updateGoal(todo, objupdate, key) {
    goalRef = dbRef.ref('goals/' + user_ID + '/' + key)
    objupdate.time = new Date().getTime();
    goalRef.update(objupdate)
}
function updateHabit(todo, objupdate, key) {
    habitRef = dbRef.ref('habits/' + user_ID + '/' + key)
    objupdate.time = new Date().getTime();
    // {
    //     // task: todo,
    //     type: type_old,
    //     time: new Date().getTime(),
    //     // userId: user_ID
    // }
    habitRef.update(objupdate)
}

function getListTodoNew() {
    todoRef = dbRef.ref('todos/' + user_ID)
    todoRef.orderByChild('status').equalTo('new').on("value", function (snapshot) {
        //console.log(snapshot.val());
        allTaskNew = snapshot.val()
        var newObjectSort = sortDescObj(allTaskNew, 'time')
        //buildListTodoNew(newObjectSort)
        changeSortTodo('.list-todo-new .list-group','#sort-todo',newObjectSort);
        var listObjectNumberCat = countNumberCategory(newObjectSort, 'fors');
        var listObjectNumberCatPriority = countNumberCategory(newObjectSort, 'priority');
        // console.log(listObjectNumberCat)
        // console.log(newObjectSort)
        $('#tt-todo-all').html(' ('+Object.keys(newObjectSort).length+')')

        $('#tt-todo-moingay').html(' (0)')
        if(listObjectNumberCat.dayli !== undefined){
            $('#tt-todo-moingay').html(' ('+listObjectNumberCat.dayli+')')
        }

        $('#tt-todo-important').html(' (0)')
        if(listObjectNumberCatPriority.urgent !== undefined){
            $('#tt-todo-important').html(' ('+listObjectNumberCatPriority.urgent+')')
        }
    })
}

function getListMaximNew() {
    maximRef = dbRef.ref('maxims/' + user_ID)
    maximRef.orderByChild('status').equalTo('new').on("value", function (snapshot) {
        //console.log(snapshot.val());
        allMaximNew = snapshot.val()
        var newObjectSort = sortDescObj(allMaximNew, 'time')
        //buildListTodoNew(newObjectSort)
        changeSortTodo('.list-maxim-new .list-group','#sort-maxim',newObjectSort);
        if(newObjectSort ==null){
            $('#maxin-total-index').html(' (0)');
            return;
        }
        $('#maxin-total-index').html(' ('+Object.keys(newObjectSort).length+')');
    })
}

//atShow .list-todo-new .list-group
//atSelect #sort-todo
function changeSortTodo(atShow, atSelect, allObj){
	var stypeSort = $(atSelect+" option:selected").val();
	changeSortTodoWithType(atShow, stypeSort, allObj)
	
}
function changeSortTodoWithType(atShow, stypeSort, allObj){
	var arrSort = stypeSort.split("_");
	var newObjectSort = sortDescObj(allObj, arrSort[0], arrSort[1]);
	var str = buildListTodo(newObjectSort,'todo')
	$(atShow).html(str);
}

function viewToDoWithType(atShow,keycat, keyfilter, allObj){
	//var arrSort = stypeSort.split("_");
	// console.log(allObj)
	var newObjectSort = onlyWithKeyObj(allObj,keycat, keyfilter);
	// console.log(newObjectSort)
	var str = buildListTodo(newObjectSort,'todo')
	$(atShow).html(str);
}

function getListTodoCompleted() {
    todoRef = dbRef.ref('todos/' + user_ID)
    todoRef.orderByChild('status').equalTo('completed').on("value", function (snapshot) {
        //console.log(snapshot.val());
        allTaskComplete = snapshot.val()
        var newObjectSort = sortDescObj(allTaskComplete, 'time')
        buildListTodoCompleted(newObjectSort)
    })
}
function getListMaximCompleted() {
    maximRef = dbRef.ref('maxims/' + user_ID)
    maximRef.orderByChild('status').equalTo('completed').on("value", function (snapshot) {
        //console.log(snapshot.val());
        allMaximComplete = snapshot.val()
        var newObjectSort = sortDescObj(allMaximComplete, 'time');
        buildListMaximCompleted(newObjectSort);
        if(newObjectSort ==null){
            $('#maxin-total-complete').html(' (0)');
            return;
        }
        $('#maxin-total-complete').html(' ('+Object.keys(newObjectSort).length+')');
    })
}

function getListGoalCompleted() {
    goalRef = dbRef.ref('goals/' + user_ID)
    goalRef.orderByChild('status').equalTo('completed').on("value", function (snapshot) {
        //console.log(snapshot.val());
        allGoalComplete = snapshot.val()
        var newObjectSort = sortDescObj(allGoalComplete, 'time')
        buildListGoalCompleted(newObjectSort)
    })
}
function getListGoalNew() {
    goalRef = dbRef.ref('goals/' + user_ID)
    goalRef.orderByChild('status').equalTo('new').on("value", function (snapshot) {
        // console.log(snapshot.val());
        allGoalNew = snapshot.val()
        var newObjectSort = sortDescObj(allGoalNew, 'time')
        buildListGoalNew(newObjectSort)
    })
}

// function getListGoalCompleted() {
//     goalRef = dbRef.ref('goals/' + user_ID)
//     goalRef.orderByChild('status').equalTo('completed').on("value", function (snapshot) {
//         //console.log(snapshot.val());
//         allGoalComplete = snapshot.val()
//         var newObjectSort = sortDescObj(allGoalComplete, 'time')
//         buildListGoalCompleted(newObjectSort)
//     })
// }

//habit
function getListHabitCompleted() {
    habitRef = dbRef.ref('habits/' + user_ID)
    //whereEqualTo("status", "new")
    //where("status", "=", "new").
    habitRef.orderByChild('type').equalTo('bad').on("value", function (snapshot) {
        //console.log(snapshot.val());
        allHabitComplete = snapshot.val()
        var newObjectSort = sortDescObj(allHabitComplete, 'time')
        buildListHabitCompleted(newObjectSort)
    })
}
function getListHabitNew() {
    habitRef = dbRef.ref('habits/' + user_ID)
    habitRef.orderByChild('type').equalTo('good').on("value", function (snapshot) {
        // console.log(snapshot.val());
        allHabitNew = snapshot.val()
        var newObjectSort = sortDescObj(allHabitNew, 'time')
        buildListHabitNew(newObjectSort)
    })
}

// function getListGoalCompleted() {
//     habitRef = dbRef.ref('habits/' + user_ID)
//     habitRef.orderByChild('status').equalTo('completed').on("value", function (snapshot) {
//         //console.log(snapshot.val());
//         allHabitComplete = snapshot.val()
//         var newObjectSort = sortDescObj(allHabitComplete, 'time')
//         buildListHabitCompleted(newObjectSort)
//     })
// }

function getListSWOT() {
    //var listKey = ['s','w','o','t'];
    //for (let index = 0; index < listKey.length; index++) {
    //var atId = listKey[index];
    var atId = 's';
    //console.log(atId)
    var swoftRef = dbRef.ref('swot/' + user_ID + '/' + atId)
    //contactsRef.orderByChild('time').on("value", function (snapshot) {
    //swoftRef.orderByChild('status').equalTo('new').on("value", function (snapshot) {
    swoftRef.orderByChild('time').on("value", function (snapshot) {
        //console.log(snapshot.val());
        allSWOT[atId] = snapshot.val()
        // if(allSWOT == null){
        //     pushSWOTFirst();
        // }
        // console.log(allSWOT)
        var newObjectSort = sortDescObj(allSWOT[atId], 'number')
        buildListSwot('s', newObjectSort)
    })


    atId = 'w';
    //console.log(atId)
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + atId)
    swoftRef.orderByChild('time').on("value", function (snapshot) {
        //console.log(snapshot.val());
        allSWOT[atId] = snapshot.val()
        // if(allSWOT == null){
        //     pushSWOTFirst();
        // }
        // console.log(allSWOT)
        // var newObjectSort = sortDescObj(allTaskNew, 'time')
        // buildListTodoNew(newObjectSort)
        var newObjectSort = sortDescObj(allSWOT[atId], 'number')
        buildListSwot('w', newObjectSort)
    })

    atId = 'o';
    //console.log(atId)
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + atId)
    swoftRef.orderByChild('time').on("value", function (snapshot) {
        //console.log(snapshot.val());
        allSWOT[atId] = snapshot.val()
        // if(allSWOT == null){
        //     pushSWOTFirst();
        // }
        // console.log(allSWOT)
        var newObjectSort = sortDescObj(allSWOT[atId], 'number')
        buildListSwot('o', newObjectSort)
    })
    atId = 't';
    //console.log(atId)
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + atId)
    swoftRef.orderByChild('time').on("value", function (snapshot) {
        //console.log(snapshot.val());
        allSWOT[atId] = snapshot.val()
        // if(allSWOT == null){
        //     pushSWOTFirst();
        // }
        // console.log(allSWOT)
        var newObjectSort = sortDescObj(allSWOT[atId], 'number')
        buildListSwot('t', newObjectSort)
    })
    // console.log(allSWOT);
    //}
}

function editSwot() {
    var idType = $('#keySwot').val();
    if (idType == '' || idType == null) {
        return;
    }
    var text = $('#name1').val();
    if (text == '') {
        return
    }
    var idKey = $('#keyAtId').val();
    if (idKey == '' || idKey == null) {
        return
    }
    updateSwot(idType, idKey, text);
    $('#name1').val('');
}

function deleteSwot() {
    var result = confirm("Want to delete?");
    if (!result) {
        return
    }

    var idType = $('#keySwot').val();
    if (idType == '' || idType == null) {
        return;
    }

    var idKey = $('#keyAtId').val();
    if (idKey == '' || idKey == null) {
        return
    }
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + idType + '/' + idKey)
    swoftRef.remove();

}

function updateSwot(idType, idKey, text) {
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + idType + '/' + idKey)
    swoftRef.update({
        status: 'edit',
        text: text,
        timeEdit: new Date().getTime(),
        // userId: user_ID
    })
}

function updateSortSwot(idType, idKey, number) {
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + idType + '/' + idKey)
    swoftRef.update({
        status: 'edit',
        number: number,
        timeEdit: new Date().getTime(),
        // userId: user_ID
    })
}

function addSWOT() {
    var keyType = $('#keySwot').val();
    if (keyType == '' || keyType == null) {
        return;
    }
    var text = $('#name1').val();
    if (text == '') {
        return
    }
    var swoftRef = dbRef.ref('swot/' + user_ID + '/' + keyType)
    swoftRef.push({
        text: text,
        number: 0,
        status: 'new',
        time: new Date().getTime(),
        // userId: user_ID
    })
    $('#name1').val('');
}
// function pushSWOTFirst() {
//     var text = '';
//     var swoftRef = dbRef.ref('swot/' + user_ID)
//     swoftRef.push({
//         task: text,
//         type: 's',
//         time: new Date().getTime(),
//         userId: user_ID
//     })
//     swoftRef.push({
//         task: text,
//         type: 'w',
//         time: new Date().getTime(),
//         userId: user_ID
//     })
//     swoftRef.push({
//         task: text,
//         type: 'o',
//         time: new Date().getTime(),
//         userId: user_ID
//     })
//     swoftRef.push({
//         task: text,
//         type: 't',
//         time: new Date().getTime(),
//         userId: user_ID
//     })
//     getListSWOT()
// }

function intToTime(value) {
    myDate = new Date(value);
    var format1 = myDate.toLocaleString();
    return format1;
}
function buildListTodo(dataIn,type_view) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]
		var objPD = buildPriority_Day(dataAt);

        var temp = '';
        if(dataAt.isClick !== undefined){
            temp = 'db-click="'+dataAt.isClick+'" ';
        }

        str +=
            '<div class="at-task pb-2 d-flex '+dataAt.fors+'" data-key="' + key + '">' +
            '<div class="col-sm-10"><div class="gv-todo">' +' <input type="checkbox" name="'+type_view+'-checkbox" title="click to Completed"/>'+' '+
            '&nbsp; '+objPD.pri+' '+objPD.day+objPD.fors+' <label '+temp+'>' + dataAt.task + '</label></div>' +
            '</div>' +
            '<div class="col-sm-2 event todo text-right"><button class="btn btn-default edit '+type_view+' text-right">Edit</button></div>' +
            '</div>';

    }
    return str;
}
function buildPriority_Day(obj){
	var priority = obj.priority
	var day = obj.day
	var fors = obj.fors
	var objReturn = {
		pri:"",
		day:"",
		fors:""
	}
	switch(priority){
		case "low":
			objReturn.pri = '<b title="low">&#9823;</b>';
			break;
		case "medium":
			objReturn.pri = '<b title="medium">&#9820;</b>';
			break;
		case "high":
			objReturn.pri = '<b title="high">&#9822;</b>';
			break;
		case "urgent":
			objReturn.pri = '<b title="urgent">&#9821;</b>';
			break;
		default:
			break;
	}
	switch(day){
		case "morning":
			objReturn.day = '<b title="morning">Mo</b>';
			break;
		case "afternoon":
			objReturn.day = '<b title="afternoon">Af</b>';
			break;
		case "evening":
			objReturn.day = '<b title="evening">Ev</b>';
			break;
		case "night":
			objReturn.day = '<b title="night">Ni</b>';
			break;
		default:
			break;
	}
	
	if(typeof fors != "undefined"){
		objReturn.fors = '<sup title="'+fors+'">'+fors+'</sup>';
	}else{
		objReturn.fors = '';
	}
	
	return objReturn;
}

function buildListTodoNew(dataIn) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]

        str +=
            '<div class="at-task pb-2 d-flex" data-key="' + key + '">' +
            '<div class="col-sm-9">' +
            '&nbsp;<input type="checkbox" name="remember" /> <label>' + dataAt.task + '</label>' +
            '</div>' +
            '<div class="col-sm-3 event todonew text-right"><button class="btn btn-default edit text-right">Edit</button></div>' +
            '</div>';

    }
    $('.list-todo-new .list-group').html(str);
}

function buildListGoalNew(dataIn) {
    var str_1 = '';
    var str_2 = '';
    var str_3 = '';
    var str_4 = '';
    var str_5 = '';
    var str_temp = '';
    for (var key in dataIn) {
		
        var dataAt = dataIn[key];
		str_temp =
            '<div class="at-task pb-2 d-flex" data-key="' + key + '">' +
            '<div class="col-sm-10 view-a">' +
            '&nbsp;<input type="checkbox" name="remember" /> <label>' + dataAt.task + '</label>' +
            '</div>' +
            '<div class="col-sm-2 event text-right"><button class="btn btn-default edit_goal text-right"><span class="edit_view"></span></button></div>' +
            '</div>';
		switch (dataAt.type){
			case "one":
				str_1 += str_temp;
				break;
			case "two":
				str_2 += str_temp;
				break;
			case "three":
				str_3 += str_temp;
				break;
			case "four":
				str_4 += str_temp;
				break;
			default:
				str_5 += str_temp;
				break;
        }

    }
    $('.list-goal-new .list-group.goal_one').html(str_1);
    $('.list-goal-new .list-group.goal_two').html(str_2);
    $('.list-goal-new .list-group.goal_three').html(str_3);
    $('.list-goal-new .list-group.goal_four').html(str_4);
    $('.list-goal-new .list-group.goal_five').html(str_5);
}
function buildListGoalCompleted(dataIn) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]
        console.log(dataAt)

        var typeGoal = getLableOfRadioChecked('type-goal',dataAt.type);
        str +=
            '<div class="at-task pb-2 d-flex" data-key="' + key + '">' +
            '<div class="col-sm-9">' +
            '<input type="checkbox" name="check-goal-completed" id="goal-comple-'+key+'"/>'+
            ' <label>' + dataAt.task + '</label><sup>'+typeGoal+'</sup>' +
            '</div>' +
            '<div class="col-sm-3 event goal-completed text-right"><button class="btn btn-default delete">Delete</button></div>' +
            '</div>';

    }
    $('.list-goal-completed .list-group').html(str);
}
//habit
function buildListHabitNew(dataIn) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]

        str +=
            '<div class="at-task pb-2 d-flex" data-key="' + key + '">' +
            '<div class="col-sm-9 view-habit-detail">' +
            '&nbsp;<input type="checkbox" name="remember" id="habit'+key+'"/><button class="remove-habit" for="habit'+key+'"></button> <label>' + dataAt.task + '</label>' +
            '</div>' +
            '<div class="col-sm-3 event habit-new text-right"><button class="btn btn-default edit_habit text-right"><span class="edit_view"></span></button></div>' +
            '</div>';

    }
    $('.list-habit-good .list-group').html(str);
}
function buildListHabitCompleted(dataIn) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]

        str +=
            '<div class="at-task pb-2 d-flex" data-key="' + key + '">' +
            '<div class="col-sm-9 view-habit-detail">' +
            '&nbsp;<input type="checkbox" name="remember" id="habit'+key+'"/><button class="remove-habit" for="habit'+key+'"></button> <label>' + dataAt.task + '</label>' +
            '</div>' +
            '<div class="col-sm-3 event habit-completed text-right"><button class="btn btn-default edit_habit"><span class="edit_view"></span></button></div>' +
            '</div>';

    }
    $('.list-habit-bad .list-group').html(str);
}

function buildListSwot(keySwot, dataIn) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]

        str += '<li keyid="' + key + '"><span class="title">' + dataAt['text'] + '</span><span class="drag-area"></span></li>';

    }
    $('h3[data-key="' + keySwot + '"]').closest('.list-drap-drop').find('ul.drag-list').html(str);

    $('.list-drap-drop li').arrangeable({
        dragSelector: '.drag-area',
        //     dragEndEvent: function(){
        //         alert('Drag End');
        //    }
    });
}

function updateKeySwot() {
    var keyId = $('#keySwot').val();
    var list = $('.title-select-swot').closest('.list-drap-drop').find('ul.drag-list li');
    var listIndex = []
    list.each(function (index, v) {
        var idAt = $(v).attr('keyid');
        updateSortSwot(keyId, idAt, index)
    })
}

function buildListTodoCompleted(dataIn) {
	var typeNoToCalendar = "dayli";
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]
		var objPD = buildPriority_Day(dataAt);
		toCalanDar = '';
		// console.log(dataAt.fors)
		if(dataAt.fors !== typeNoToCalendar){
			toCalanDar = '<button class="btn btn-default delete">To Lich</button>';
		}
		
        str +=
            '<div class="at-task mb-2 d-flex" data-key="' + key + '">' +
            '<div class="col-sm-10"><div class="gv-todo">' +'<input type="checkbox" name="todo-completed" title="click to Todo"/>'+
            '  <b class="iconbs">&#10084;</b>'+objPD.pri+objPD.fors+' <label>' + dataAt.task + '</label></div>' +
            '</div>' +
            '<div class="col-sm-2 event todo-completed text-right">' +toCalanDar+
            '</div></div>';

    }
    $('.list-todo-completed .list-group').html(str);
}

function buildListMaximCompleted(dataIn) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]
		var objPD = buildPriority_Day(dataAt);

        str +=
            '<div class="at-task pb-2 d-flex" data-key="' + key + '">' +
            '<div class="col-sm-9">' +
            '  <b class="iconbs">&#10084;</b><input type="checkbox" name="maxim-completed" title="click to maxim"/>'+objPD.pri+'<label>' + dataAt.task + '</label>' +
            '</div>' +
            '<div class="col-sm-3 event maxim-completed text-right"><button class="btn btn-default delete">Delete</button></div>' +
            '</div>';

    }
    $('.list-maxim-completed .list-group').html(str);
}


function getListScrum() {

    // var atId = 'todo';
    var sCrumRef = dbRef.ref('scrum/' + user_ID)
    var todo = [];
    var going = [];
    var testing = [];
    var done = [];
    sCrumRef.orderByChild('time').on("value", function (snapshot) {

         todo ={};
         going = {};
         testing = {};
         done = {};

        // snapshot.forEach(function (key,data) {
        for (var key in snapshot.val()) {
            var newPost = snapshot.val()[key];
            console.log(newPost)
            switch (newPost.keytype) {
                case 'todo':
                    todo[key] =newPost;
                    break;
                case 'going':
                    going[key] =newPost;
                    break;
                case 'test':
                    testing[key] =newPost;
                    break;
                case 'done':
                    done[key] =newPost;
                    break;

                default:
                    break;
            }
        }
        var newObjectSort1 = sortDescObj(todo, 'number');
        var newObjectSort2 = sortDescObj(going, 'number');
        var newObjectSort3 = sortDescObj(testing, 'number');
        var newObjectSort4 = sortDescObj(done, 'number');

        buildListScrum('todo', newObjectSort1);
        buildListScrum('going', newObjectSort2);
        buildListScrum('test', newObjectSort3);
        buildListScrum('done', newObjectSort4);
    })


    return;
    var atId = 'todo';
    var sCrumRef = dbRef.ref('scrum/' + user_ID + '/' + atId)
    sCrumRef.orderByChild('time').on("value", function (snapshot) {
        allCRUM[atId] = snapshot.val()
        var newObjectSort = sortDescObj(allCRUM[atId], 'number')
        buildListScrum('todo', newObjectSort)
    })


    atId = 'going';
    sCrumRef = dbRef.ref('scrum/' + user_ID + '/' + atId)
    sCrumRef.orderByChild('time').on("value", function (snapshot) {
        allCRUM[atId] = snapshot.val()
        var newObjectSort = sortDescObj(allCRUM[atId], 'number')
        buildListScrum('going', newObjectSort)
    })

    atId = 'test';
    sCrumRef = dbRef.ref('scrum/' + user_ID + '/' + atId)
    sCrumRef.orderByChild('time').on("value", function (snapshot) {
        allCRUM[atId] = snapshot.val()
        var newObjectSort = sortDescObj(allCRUM[atId], 'number')
        buildListScrum('test', newObjectSort)
    })
    atId = 'done';
    sCrumRef = dbRef.ref('scrum/' + user_ID + '/' + atId)
    sCrumRef.orderByChild('time').on("value", function (snapshot) {
        allCRUM[atId] = snapshot.val()
        var newObjectSort = sortDescObj(allCRUM[atId], 'number')
        buildListScrum('done', newObjectSort)
    })
}

function buildListScrum(keySwot, dataIn) {
    console.log(keySwot, dataIn)
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]
        str += '<li keyid="' + key + '" class="portlet" key-old="' + keySwot + '" number = "'+dataAt['number']+'"><span class="title portlet-content">' + dataAt['text'] + '</span><span class="drag-area portlet-header"></span></li>';
    }
    $('h3[data-key="' + keySwot + '"]').closest('.list-drap-drop').find('ul.drag-list').html(str);
}

function moveEvent(keynew){
    $('#keyScrum').val(keynew);
    //$('#text-scrum').val(text);
    //$('#keyAtIdScrum').val(keyid);
    editScrum();
}

function addScrum() {
    keyType = 'todo';
    /*
    var keyType = $('#keyScrum').val();
    if (keyType == '' || keyType == null) {
        alert(1)
        return;
    }
    */
    var text = $('#text-scrum').val();
    if (text == '') {
        alert(2)
        return
    }
    var linkScrum = 'scrum/' + user_ID;
    console.log(linkScrum);
    var sCrumRef = dbRef.ref(linkScrum)
    sCrumRef.push({
        keytype: keyType,
        text: text,
        number: 0,
        status: 'new',
        time: new Date().getTime(),
        userId: user_ID
    })
    $('#text-scrum').val('');
}

function editScrum() {
    var idType = $('#keyScrum').val();
    if (idType == '' || idType == null) {
        console.log('err-1')
        return;
    }
    var text = $('#text-scrum').val();
    if (text == '') {
        console.log('err-2')
        return
    }
    var idKey = $('#keyAtIdScrum').val();
    if (idKey == '' || idKey == null) {
        console.log('err-3')
        return
    }
    updateScrum(idType, idKey, text);
    $('#text-scrum').val('');
}
//private
function updateScrum(idType, idKey, text) {
    swoftRef = dbRef.ref('scrum/' + user_ID + '/' + idKey)
    swoftRef.update({
        keytype:idType,
        status: 'edit',
        text: text,
        timeEdit: new Date().getTime(),
        // userId: user_ID
    })
}
function sortScrum(){
    var idType = $('#keyScrum').val();
    if (idType == '' || idType == null) {
        return;
    }
    var listAt = $('.title-select-scrum').closest('.list-drap-drop').find('.drag-list li');
    var objnew = {}
    $.each(listAt,function(index,value){
        console.log(index,value);

        var keydb = $(value).attr('keyid');
        console.log(keydb);

        objnew['/'+keydb+'/number'] = index;
    })
    console.log(objnew);
    updateSortScrum(objnew);
}
//data is object multi
//{ keytype:idType, status: 'edit', text: text, timeEdit: new Date().getTime(), },{ keytype:idType, status: 'edit', text: text, timeEdit: new Date().getTime(), }
function updateSortScrum(obj){
    swoftRef = dbRef.ref('scrum/').child(user_ID);
    var a = swoftRef.update(obj);
    console.log(a)
}

function deleteScrum() {
  

   

    var idType = $('#keyScrum').val();
    if (idType == '' || idType == null) {
        alert('1er')
        return;
    }

    var idKey = $('#keyAtIdScrum').val();
    if (idKey == '' || idKey == null) {
        alert('2er')
        return;
    }

    var result = confirm("Want to delete?");
    if (!result) {
        return
    }

    //just change type for view
    moveEvent('archive');
    return;

    swoftRef = dbRef.ref('scrum/' + user_ID + '/' + idKey)
    swoftRef.remove();
}
//deleteScrum

function deleteTodoId(idKey){
	var atRef = dbRef.ref('todos/' + user_ID + '/' + idKey)
    atRef.remove()
	  .then(() => {
		console.log("Data removed successfully.");
	  })
	  .catch((error) => {
		console.error("Remove failed: ", error.message);
	  });
}

//Good_Bad Start

function getListTx() {

    var sTxRef = dbRef.ref(refGoodBad + user_ID)
    var good = [];
    var bad = [];

    sTxRef.orderByChild('time').on("value", function (snapshot) {

        good = {};
        bad = {};

        for (var key in snapshot.val()) {
            var newPost = snapshot.val()[key];
            switch (newPost.keytype) {
                case 'good':
                    good[key] = newPost;
                    break;
                case 'bad':
                    bad[key] = newPost;
                    break;

                default:
                    break;
            }
        }
        var newObjectSort1 = sortDescObj(good, 'number');
        var newObjectSort2 = sortDescObj(bad, 'number');

        buildListTx('good', newObjectSort1);
        buildListTx('bad', newObjectSort2);
    })


    return;
}

function buildListTx(keySwot, dataIn) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]
        str += '<li keyid="' + key + '" class="portlet" key-old="' + keySwot + '" number = "' + dataAt['number'] + '"><span class="title portlet-content">' + dataAt['text'] + '</span><span class="drag-area portlet-header"></span></li>';
    }
    $('h3[data-key="' + keySwot + '"]').closest('.list-drap-drop').find('ul.drag-list').html(str);
}


function addTx() {
    var keyType = $('#keyTx').val();
    if (keyType == '' || keyType == null) {
        alert(1)
        return;
    }
    var text = $('#text-tx').val();
    if (text == '') {
        alert(2)
        return
    }
    var linkTx = refGoodBad + user_ID;
    var sTxRef = dbRef.ref(linkTx)
    sTxRef.push({
        keytype: keyType,
        text: text,
        number: 0,
        status: 'new',
        time: new Date().getTime(),
        userId: user_ID
    })
    $('#text-tx').val('');
}

function editTx() {
    var idType = $('#keyTx').val();
    if (idType == '' || idType == null) {
        console.log('err-1')
        return;
    }
    var text = $('#text-tx').val();
    if (text == '') {
        console.log('err-2')
        return
    }
    var idKey = $('#keyAtIdTx').val();
    if (idKey == '' || idKey == null) {
        console.log('err-3')
        return
    }
    updateTx(idType, idKey, text);
    $('#text-tx').val('');
}
//private
function updateTx(idType, idKey, text) {
    swoftRef = dbRef.ref(refGoodBad + user_ID + '/' + idKey)
    swoftRef.update({
        keytype: idType,
        status: 'edit',
        text: text,
        timeEdit: new Date().getTime(),
        // userId: user_ID
    })
}
function sortTx() {
    var idType = $('#keyTx').val();
    if (idType == '' || idType == null) {
        return;
    }
    var listAt = $('.title-select-tx').closest('.list-drap-drop').find('.drag-list li');
    var objnew = {}
    $.each(listAt, function (index, value) {
        var keydb = $(value).attr('keyid');
        objnew['/' + keydb + '/number'] = index;
    })
    updateSortTx(objnew);
}
//data is object multi
//{ keytype:idType, status: 'edit', text: text, timeEdit: new Date().getTime(), },{ keytype:idType, status: 'edit', text: text, timeEdit: new Date().getTime(), }
function updateSortTx(obj) {
    swoftRef = dbRef.ref(refGoodBad).child(user_ID);
    var a = swoftRef.update(obj);
    console.log(a)
}

function deleteTx() {
    
    var idType = $('#keyTx').val();
    if (idType == '' || idType == null) {
        alert(1);
        return;
    }

    var idKey = $('#keyAtIdTx').val();
    if (idKey == '' || idKey == null) {
        alert(2);
        return
    }
    var result = confirm("Want to delete?");
    if (!result) {
        return
    }
    swoftRef = dbRef.ref(refGoodBad + user_ID + '/' + idKey)
    swoftRef.remove();
}

//Good_Bad End

function showPhotoPic(){
    $('#modal-Photo').modal('show');
    $('#image_preview_photo_double img').attr('src',$('#image-img-photo').attr('src'));
}
$('#image-img-photo').click(function(){
    showPhotoPic();
});

$("document").on('click', '.show-cl-detail', function() {
// $('.show-cl-detail').click(function(){
    var dmy = $(this).attr('attr-dmn')
    // alert(123)
    console.log(dmy)
    $('td[data-day="'+dmy+'"]').trigger('click');
});


$(document).ready(function() {
    var pubnub = PUBNUB({
            subscribe_key : 'demo'
        });

    pubnub.subscribe({
            channel : "pubnub-html5-notification-demo", // Subscribing to PubNub's channel
            message : function(message){
                      console.log(message);
                      notifyMe(message.text);
                }
        })
        // $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        //   })
});

function notifyMe(message) {

    if (message == undefined){
        message = "Xin chào đây là thông báo từ 03way!";
    };

    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
        var notification = new Notification(message);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
                if (permission === "granted") {
                var notification = new Notification("Hi there!");
                }
        });
    }
}
function getListTaskNoDone(atpoint){
    atpoint = parseInt(atpoint);
    var one = $('#add-task-1').val();
    var two = $('#add-task-2').val();
    var three = $('#add-task-3').val();
    var four = $('#add-task-4').val();
    var five = $('#add-task-5').val();
    var is_one = $("#check-task-1").is(':checked') ? true : false;
    var is_two = $("#check-task-2").is(':checked') ? true : false;
    var is_three = $("#check-task-3").is(':checked') ? true : false;
    var is_four = $("#check-task-4").is(':checked') ? true : false;
    var is_five = $("#check-task-5").is(':checked') ? true : false;

    switch (atpoint) {
        case 1:
            if(checkIsDoneNotEmpty(one,is_one) !==false){
                console.log('noti 1');
                notifyMe(one);
                return true;
            }
            break;
        case 2:
            if(checkIsDoneNotEmpty(two,is_two) !==false){
                console.log('noti 2');
                notifyMe(two);
                return true;
            }
            break;
        case 3:
            if(checkIsDoneNotEmpty(three,is_three) !==false){
                console.log('noti 3');
                notifyMe(three);
                return true;
            }
            break;
        case 4:
            if(checkIsDoneNotEmpty(four,is_four) !==false){
                console.log('noti 4');
                notifyMe(four);
                return true;
            }
            break;
        case 5:
            if(checkIsDoneNotEmpty(five,is_five) !==false){
                console.log('noti 5');
                notifyMe(five);
                return true;
            }
            break;
        default:
            break;
    }
    return false;
}
function autoGetOneTask(){
    var list = [1,2,3,4,5];
    shuffle(list);
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        var isAt = getListTaskNoDone(element);
        if(isAt ==true){
            return false;
        }
    }
    return true;
}

//https://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


function checkIsDoneNotEmpty(task,isTaskDone){
    if(isTaskDone == true){
        return false;
    }
    if(task == ''){
        return false;
    }
    return task;
}
var timeAutoNoti = 5*1000*60; //5 minus
function run_time() {
    var isEnd = autoGetOneTask();

    if (isEnd == true) {
        // Do something with el
    } else {
        setTimeout(run_time, timeAutoNoti); // try again in 3000 milliseconds
    }
}

function getLableOfRadioChecked(atName, value = "") {
    var checkedRadio = $('input[name="'+atName+'"][type="radio"]:checked');
    var labelText = $(`label[for="${checkedRadio.attr('id')}"]`).text();
    if(value !== ""){
        checkedRadio = $('input[name="'+atName+'"][type="radio"][value="' + value + '"]');
        labelText = $(`label[for="${checkedRadio.attr('id')}"]`).text();
    }
    // Find the radio input with the specified value
    // const radio = $('input[type="radio"][name="type-goal"][value="' + value + '"]');
  
    // Check if an element was found, then return its name
    return labelText;
}

console.log('Run task 5minus');
setTimeout(run_time, timeAutoNoti);

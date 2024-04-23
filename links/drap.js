// $('.list-drap-drop li').arrangeable({
$('.list-drap-drop li').arrangeable({
    dragSelector: '.drag-area'
  });
  
$('body').on('click', '#swot .title-swot-basic', function (event) {
	$('#name1').val("");
});

$('body').on('click', '#swot ul.drag-list', function (event) {
//$('#swot ul.drag-list *').click(function(){
	// alert(123)
    // console.log($(this))
    // console.log($(this).closest('.list-drap-drop'))

	 var title = $(this).closest('.list-drap-drop').find('h3');
     $('.list-drap-drop h3').removeClass('title-select-swot');
     title.addClass('title-select-swot');

	 $('#swot-title').html(title.html());
	 $('#keySwot').val(title.attr('data-key'));
	 //var index = $(this).parents("li").index();
	//  var index = $(this).index();
	//  $('#swot-at').html(index);
	
	// var textAt = $(this).find('.title').html();
	// $('#name1').val(textAt);
})

// $('#scrum .drag-list *').click(function(){
//     // console.log($(this))
// 	 var title = $(this).closest('.list-drap-drop').find('h3');
//      $('.list-drap-drop h3').removeClass('title-select-scrum');
//      title.addClass('title-select-scrum');

// 	 $('#scrum-title').html(title.html());
// 	 $('#keyScrum').val(title.attr('data-key'));
// 	 //var index = $(this).parents("li").index();
// 	//  var index = $(this).index();
// 	//  $('#swot-at').html(index);
	
// 	// var textAt = $(this).find('.title').html();
// 	// $('#name1').val(textAt);
// })

$('body').on('click', '#swot .drag-list li', function (event) {
// $('.drag-list li').click(function(){
    // console.log($(this))
	//  var title = $(this).closest('.list-drap-drop').find('h3').html();
	//  $('#swot-title').html(title);
	 //var index = $(this).parents("li").index();
	 var index = $(this).index();
	 $('#swot-at').html(index);
	 $('#keyAtId').val($(this).attr('keyid'));
	
	var textAt = $(this).find('.title').html();
	$('#name1').val(textAt);
    $('#swot .drag-area').removeClass('selected')
    $(this).find('.drag-area').addClass('selected')
})

// $('body').on('click', '#scrum .drag-list li', function (event) {
// 	// $('.drag-list li').click(function(){
// 	// console.log($(this))
// 	//  var title = $(this).closest('.list-drap-drop').find('h3').html();
// 	//  $('#swot-title').html(title);
// 		//var index = $(this).parents("li").index();
// 		var index = $(this).index();
// 		$('#scrum-at').html(index);
// 		$('#keyAtIdScrum').val($(this).attr('keyid'));
	
// 	var textAt = $(this).find('.title').html();
// 	$('#text-scrum').val(textAt);
// 	$('#scrum .drag-area').removeClass('selected')
// 	$(this).find('.drag-area').addClass('selected')
// })


// $('body').on('drag.end.arrangeable', '.drag-list li', function (event) {
//     alert(123)

// })
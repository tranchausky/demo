$('.list-drap-drop li').arrangeable({
    dragSelector: '.drag-area'
  });
  
$('.drag-list *').click(function(){
    // console.log($(this))
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

$('body').on('click', '.drag-list li', function (event) {
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
    $('.drag-area').removeClass('selected')
    $(this).find('.drag-area').addClass('selected')
})


// $('body').on('drag.end.arrangeable', '.drag-list li', function (event) {
//     alert(123)

// })
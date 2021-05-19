  $('.list-drap-drop li').arrangeable({
    dragSelector: '.drag-area'
  });
  
$('.drag-list li').click(function(){
	 var title = $(this).closest('.list-drap-drop').find('h3').html();
	 $('#swot-title').html(title);
	 //var index = $(this).parents("li").index();
	 var index = $(this).index();
	 $('#swot-at').html(index);
	
	var textAt = $(this).find('.title').html();
	$('#name1').val(textAt);
})

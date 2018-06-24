$(".fa-trash-alt").on("click",function(){
	
})

$("#inputTodo").on("keypress",function(event){
	if(event.which === 13)
	{
		addTodo(inputTodo.value);
	}
})

$("ul").on("click",".i1",function(){
	$(this).parent().hide("fast");
})

$("ul").on("click",".todoItem",function(){
	$(this).toggleClass("visited");
})

$(".fa-plus").on("click",function(){
	$("input").fadeToggle();
})

function addTodo(todo){
	var text = "<li> <span class='i1'><i class=\"fas fa-trash-alt\"></span></i><span>";
	text += todo + "</span></li>";
	$("ul").append(text);
	inputTodo.value = "";
	$("span:last-child").addClass("todoItem");
}

$('#ajaxGet').bind('click', function(){
	$.ajax({
		type: 'GET',
		contentType: 'application/json',
		url: '/userGet',
		success: function(data) {
		            console.log('success');
		            console.log(JSON.stringify(data));
		        }
		})
})

$('#ajaxPost').bind('click', function(){
	$.ajax({
		type: 'POST',
		data: JSON.stringify({test:'test'}),
		contentType: 'application/json',
		url: '/formPost',
		success: function(data) {
		            console.log('success');
		            console.log(JSON.stringify(data));
		        }
		})

})
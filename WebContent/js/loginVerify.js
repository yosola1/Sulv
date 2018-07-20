function isLogin(){
	var user;
	$.ajax({
		type:"post",
    	url:"isLogin",
    	async: false,
    	data:{},
    	dataType:"json",
    	success : function(data){
    		user=data.user;
    		console.log(user);
    	}
	});
	return user;
}
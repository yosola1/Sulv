

$(function(){
	
			$("#registerkey").click(function(){
				var userName=$("#userName").val();
				var password=$("#password").val();
				var sex=$('input:radio:checked').val();
				//alert(sex);
				var education=$("#education option:selected").text();
				//alert(education);
				var address=$("#address").val();
			
				var vail=$("#register").valid();
				if(vail){
					
					$.ajax({
						type:'post',
						url:'checkUser',
						data:{
							userName:userName
						},
						//dataType:"json",
						success:function(data){
							var user=data.user;
							if(user==null){
								$.ajax({
							    	type:'post',
							    	url:'addUser',
							    	data:{
										 userName:userName,
										 password:password,
										 sex:sex,
									    education:education,
									     address:address 
							    	},	
							    	dataType:"json",	
							    	success : function(data){
							    		alert("注册成功");0
			
										location.href="notlogin_home.jsp";
							    		
							    	},
							    	error : function() {
							    		alert("注册失败");
							        }
							    });
						
							}
							else{
							
								alert("用户名已存在！")
							}
						},
						error:function(){
							
							alert("error");
						},
					});
				}
			});
			});
$(document).ready(function(){ 
	$("#register").validate({
		
		rules : {
			userName : {
				required : true,
			
				checkName:true,
			
			},
			password : {
				required : true,
				minlength : 5,
				maxlength : 20,
				  checkPassword:true,

			},
			secondpassword : {
				required : true,
				equalTo : "#password" ,//不能与已有的重复
				
			},
			education : {
				required : true,
			},
		 sex : {
				required : true,
			},
			address : {
				required : true,
			},
		},
		messages : {
			userName : {
				required : "用户名不能为空",
				maxlength : "用户名不能多于10位",
				
			},
			password : {
				required : "密码不能为空",
				minlength : "密码不能少于5位",
				maxlength : "密码不能多于20位",
				
			},
			secondpassword : {
				required : "请输入确认密码",
				equalTo : "两次输入密码不一致"
				
			},
			sex : {
				required : "请选择性别",
			
				
			},
			education : {
				required : "请输入教育经历",
				
				
			},
			address : {
				required : "请输入地址",
				
				
			},
		
		},
		 //是否在获取焦点时验证  
        onfocusout:true,  
        //是否在敲击键盘时验证  
        onkeyup:true,  
	
	});

	   $.validator.addMethod("checkName",function(value,element,params){  
           var checkName = /^\w{2,10}$/g;  
           return this.optional(element)||(checkName.test(value));  
       },"*只允许2-10位英文字母、数字或者下画线！");  
     
   $.validator.addMethod("checkPassword",function(value,element,params){  
           var checkPassword = /^\w{6,16}$/g;  
           return this.optional(element)||(checkPassword.test(value));  
       },"*只允许6-16位英文字母、数字或者下画线！"); })
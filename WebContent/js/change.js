var userId=localStorage.getItem("userId");
$(document).ready(function(){
	var change=$("#change");
	$.ajax({
    	type:"post",
    	url:"getUser",
    	data:{
    		userId:userId,
    	},
    	dataType:"json",
    	success : function(data){
    		
    		//alert("haode");
    	 var list=data.userlist;
    		//alert(list.userName);
    		$("#userName").val(list.userName);
    		$('#password').val(list.password);
    		if(list.sex=="男"){
    			$("#nan").attr("checked","checked");
    		}else{
    			$("#nv").attr("checked","checked");
    		}

    		var str="";
    		$("#education option").each(function(i){  
    			if(list.education==$(this).val()){
    				str+="<option  selected='selected'>"+$(this).val()+"</option>";
    			}else{
        			str+="<option  >"+$(this).val()+"</option>";
        		}
    	     })
    		$("#education").html(str);
    		$("#address").val(list.address);
    	},
    	error : function() {
    		change.append("<h2>请求失败</h2>");
        }
    });
});
$(function(){
	
	$("#changekey").click(function(){
		alert("cccc");
		var userName=$("#userName").val();
		var password=$("#password").val();
		var sex=$('input:radio:checked').val();
		//alert(sex);
		var education=$("#education option:selected").text();
		//alert(education);
		var address=$("#address").val();
	
		var vail=$("#change").valid();
		if(vail){
			alert("vail");
			$.ajax({
				type:'post',
				url:'checkUser',
				data:{
					userName:userName
				},
				//dataType:"json",
				success:function(data){
					alert("check");
					var user=data.user;
					if(user==null){
						
						$.ajax({
						
					    	type:'post',
					    	url:'updateUser',
					    	data:{
					    	    userId:userId,
							    userName:userName,
							    password:password,
								sex:sex,
							    education:education,
							    address:address 
					    	},	
					    	//dataType:"json",	
					    	success : function(data){
					    		alert("修改成功");
	
								location.href="personal.jsp";
					    		
					    	},
					    	error : function() {
					    		alert("修改失败");
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

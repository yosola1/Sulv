var dialogInstace , onMoveStartId;	//	用于记录当前可拖拽的对象



	
		// var zIndex = 9000;

		//	获取元素对象	
		function g(id){return document.getElementById(id);}

		//	自动居中元素（el = Element）
		function autoCenter( el ){
			var bodyW = document.documentElement.clientWidth;
			var bodyH = document.documentElement.clientHeight;

			var elW = el.offsetWidth;
			var elH = el.offsetHeight;

			el.style.left = (bodyW-elW)/2 + 'px';
			el.style.top = (bodyH-elH)/2 + 'px';
			
		}

		//	自动扩展元素到全部显示区域
		function fillToBody( el ){
			el.style.width  = document.documentElement.clientWidth  +'px';
			el.style.height = document.documentElement.clientHeight + 'px';
		}

		

		//	重新调整对话框的位置和遮罩，并且展现
		function showDialog(){
			g('dialogMove').style.display = 'block';
			g('mask').style.display = 'block';
			autoCenter( g('dialogMove') );
			fillToBody( g('mask') );
		}

		//	关闭对话框
		function hideDialog(){
			g('dialogMove').style.display = 'none';
			g('mask').style.display = 'none';
		}	
		
		$(function(){
			$("#userLogin").click(function(){
				
				validate();
				var vail=$("#login").valid();
				if(vail){
					vaildateUserExist();
				}
			});
			});

		function validate(){
		$("#login").validate({
			rules:{
				username:{
					required: true,
					maxlength:10,
					checkName:/^[\u4E00-\u9FA5A-Za-z0-9]+$/
				},
				password: {
					required: true,
			        maxlength: 20,
			        minlength:5,
			        checkPassword:/^[A-Za-z0-9]+$/
			      },
			},
			messages:{
				username: {
			        required: "请输入用户名",
			        maxlength:"用户名长度不能超过10个字符"
			      },
			      password: {
			        required: "请输入密码",
			        maxlength: "密码长度不能超过20个字符",
			        minlength: "密码长度不能小于 5 个字符"
			      },
			}
		});
		
		jQuery.validator.addMethod("checkName", function (value, element,params) {
			return this.optional(element) || (params.test(value));
			}, "用户名不合法");
		jQuery.validator.addMethod("checkPassword", function (value, element,params) {
			return this.optional(element) || (params.test(value));
			}, "密码不合法");
		}
		function vaildateUserExist(){
			
			$.ajax({
				type:'post',
				url:'selectUser',
				data:{
					userName:$("#username").val(),
					password:$("#password").val()
				},
				success:function(data){
					if(data.user==null){
						alert("用户名或密码错误")
					}
					else{
						localStorage.setItem("userName",data.user.userName);
						localStorage.setItem("userId",data.user.userId);
						location.href="login_home.jsp";
					}
				}
				
			});
		}
		
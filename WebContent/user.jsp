<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
<link href="css/bootstrap.min.css" type="text/css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/style-1.css"> 
<link href="css/user.css" type="text/css" rel="stylesheet">
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script src="js/dice-menu.min.js"></script>
<script type="text/javascript" src="js/loginVerify.js"></script>
<script type="text/javascript" src="js/function.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/login.js"></script> 
<script type="text/javascript" src="js/messages_zh.js"></script> 
<script type="text/javascript" src="js/user.js"></script>
<script type="text/javascript" src="js/loadArticle.js"></script>
<title>Insert title here</title>
</head>
<body>
<div  class="all"><!-- all -->
<div id="loginTitle" class="title" style="display: none"><!-- title -->
	<a class="home" href="login_home.jsp">素履轻文</a>
	 
		<button type="button" class="btn btn-info btn-lg dropdown-toggle" 
				data-toggle="dropdown" id="userName" style="float: right;">用户名
				<span class="glyphicon glyphicon-user "></span>
		</button>
		<ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1">
				<li role="presentation">
					<a role="menuitem" tabindex="-1" href="javascript:personal()">我的主页</a>
				</li>
				<li role="presentation">
					<a role="menuitem" tabindex="-1" href="writing.jsp">写文章</a>
				</li>
				<li role="presentation">
					<a role="menuitem" tabindex="-1" href="logout.action">注销</a>
				</li>
		</ul> 
	</div>
	
	<div id="notloginTitle" class="title" ><!-- Title -->
			<a class="home" href="notlogin_home.jsp">素履轻文</a>
			<a type="button" class="btn btn-link btn-lg" href="register.jsp" style="float: right;">注册</a>
			<a type="button" class="btn btn-info btn-lg" onclick="showDialog()" style="float: right;">登录</a>
			<form style="float: right;margin: 0px 50px;">
				<input class="searchText" type="text"  placeholder="搜索从这里开始...">
				<button class="searchButton" type="submit" style="color: rgb(255, 251, 240)" >
				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
				</button>
			</form>
		</div>
	<div class="content"><!-- content -->
		<div class="contentLeft">
			<div id="article">
			</div>

		</div>
		
	
</div>
<!-- --------------------------------------------------------- -->
<div class="ui-mask" id="mask" onselectstart="return false"></div>
	<div class="ui-dialog" id="dialogMove" onselectstart='return false;'>
		<div class="ui-dialog-title" id="dialogDrag"  onselectstart="return false;" >
			登录通行证
			<a class="ui-dialog-closebutton" href="javascript:hideDialog();"></a>
		</div>
		<form id="login" class="ui-dialog-content">
			<div class="ui-dialog-l40 ui-dialog-pt15">
				<input id="username" name="username" class="ui-dialog-input ui-dialog-input-username" type="text"/>
			</div>
			<br>
			<p></p>
			<div class="ui-dialog-l40 ui-dialog-pt15">
				<input id="password" name="password" class="ui-dialog-input ui-dialog-input-password" type="password"  />
			</div>
			<br>
			<br>
			<div class="ui-dialog-l40">
				<a href="#">忘记密码</a>
			</div>
			<div>
				<a id="userLogin" class="ui-dialog-submit" style="cursor:pointer;" >登录</a>
			</div>
			<div class="ui-dialog-l40">
				<a href="#">立即注册</a>
			</div>
		</form>
	</div> 
	<!-- -------------------------------------------------------- -->
</div>

</body>
</html>
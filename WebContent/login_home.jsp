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
<link href="css/login_home.css" type="text/css" rel="stylesheet">
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/loginVerify.js"></script>
<script type="text/javascript" src="js/loadArticle.js"></script>
<script type="text/javascript" src="js/function.js"></script>
<script type="text/javascript" src="js/recommend.js"></script>
<script type="text/javascript" src="js/login_home.js"></script>
<title>素履轻文网</title>
</head>
<body>
<div  class="all"><!-- all -->
<div class="title"><!-- title -->
	<a class="home" href="login_home.jsp">素履轻文</a>
	 
		<button type="button" class="btn btn-info btn-lg dropdown-toggle" id="userName" 
				data-toggle="dropdown"  style="float: right;">用户名
				<span class="glyphicon glyphicon-user "></span>
		</button>
		<ul class="dropdown-menu pull-right" role="menu" aria-labelledby="userName">
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
<div class="navBar"><!-- navBar -->
	<ul class="nav navbar-nav nav-pills navbar-left">
		<li class="active"><a type="button" class="btn btn-info btn-lg" href="login_home.jsp" style="margin: 5px">首&emsp;页</a></li>
		<li><a type="button" class="btn btn-info btn-lg" href="message.jsp" style="margin: 5px" >消&emsp;息</a></li>
	    <li><a type="button" class="btn btn-info btn-lg" href="choosehobbit.jsp" style="margin: 5px" >兴&emsp;趣</a></li>
	</ul>

		 <form class="navbar-form navbar-right" role="search" style="padding-right: 50px">
			<input id="text" class="searchText" type="text"  placeholder="搜索文章从这里开始...">
			<input onclick="search()" class="searchButton" type="Button"  value="查询"style="color: rgb(255, 251, 240)" />
						
			
		
		</form> 
		

</div>

<div class="content"><!-- 主体 -->

<div id="left" class="contentLeft"><!-- 左侧（推荐文章） -->



</div>

<div class="contentRight"><!-- 右侧  -->
		<div class="hotArticle"><!-- 热门文章 -->
			<table class="table table-striped" border="3" bordercolor="#ff9393">
			<caption>&nbsp;&nbsp;最热文章</caption>
				<tbody id="hotarticle">
					
				</tbody>
			</table>
		</div>
				<div class="hotWriter">
			<table class="table table-striped" border="3" bordercolor="#ff9393">
			<caption>&nbsp;&nbsp;热门作者</caption>
				<tbody id="hotwriter">
					
				</tbody>
			</table>
		</div>
	</div>

</div>


</div>

</body>
</html>
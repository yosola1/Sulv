<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 
<link href="css/bootstrap.min.css" type="text/css" rel="stylesheet">

<link rel="stylesheet" type="text/css" href="css/style-1.css"> 
<link href="css/notlogin_home.css" type="text/css" rel="stylesheet">

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/loginVerify.js"></script>
<script type="text/javascript" src="js/loadArticle.js"></script>

<script type="text/javascript" src="js/notlogin_home.js"></script>
<script type="text/javascript" src="js/function.js"></script>
<script type="text/javascript" src="js/login.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script> 
<script type="text/javascript" src="js/messages_zh.js"></script> 
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<title>素履轻文网</title>
</head>
<body>

	<div class="all"><!-- All -->
	
		<div class="title"><!-- Title -->
			<a class="home" href="notlogin_home.jsp">素履轻文</a>
			<a type="button" class="btn btn-link btn-lg" href="register.jsp" style="float: right;">注册</a>
			<a type="button" class="btn btn-info btn-lg" onclick="showDialog()" style="float: right;">登录</a>
		
		</div>
	
		<div class="classify"><!-- 分类 -->
			<div class="navigation">
				<button class="navLeft" onclick = "moveleft()"></button>
					<ul id="navUl">
						<li  id="1" onclick="clickType(this)" class="navMenu">
							<a id="navHref">
								<img alt="culture" src="img/culture.jpg">
							</a>
							<div class="imgBody">
							    <h2>人文</h2>
							</div>
						</li>
						<li id="2" onclick="clickType(this)" class="navMenu">
							<a class="navHref">
								<img alt="film" src="img/film.jpg">
							</a>
							<div class="imgBody">
							    <h2>电影</h2>
							</div>
						</li>
						<li id="3" onclick="clickType(this)" class="navMenu">
							<a class="navHref">
								<img alt="news" src="img/news.jpg">
							</a>
							<div class="imgBody">
								<h2>新闻</h2>
							</div>
						</li>
						<li id="4" onclick="clickType(this)" class="navMenu">
							<a class="navHref">
								<img alt="animation" src="img/animation.jpg">
							</a>
							<div class="imgBody">
								<h2>动漫</h2>
							</div>
						</li>
						<li id="5" onclick="clickType(this)" class="navMenu">
							<a class="navHref">
								<img alt="music" src="img/music.jpg">
							</a>
							<div class="imgBody">
								<h2>音乐</h2>
							</div>
						</li>
						<li id="6" onclick="clickType(this)" class="navMenu">
							<a class="navHref">
								<img alt="science" src="img/science.jpg">
							</a>
							<div class="imgBody">
								<h2>科技</h2>
							</div>
						</li>
						<li id="7" onclick="clickType(this)" class="navMenu">
							<a class="navHref">
								<img alt="game" src="img/game.jpg">
							</a>
							<div class="imgBody">
								<h2>游戏</h2>
							</div>
						</li>
						<li id="8" onclick="clickType(this)" class="navMenu">
							<a class="navHref">
								<img alt="food" src="img/food.jpg">
							</a>
							<div class="imgBody">
								<h2>美食</h2>
							</div>
						</li>
						<li id="9" onclick="clickType(this)" class="navMenu">
							<a class="navHref">
								<img alt="history" src="img/history.jpg">
							</a>
							<div class="imgBody">
								<h2>历史</h2>
							</div>
						</li>
						<li id="10" onclick="clickType(this)" class="navMenu">
							<a class="navHref">
								<img alt="tour" src="img/tour.jpg">
							</a>
							<div class="imgBody">
								<h2>旅游</h2>
							</div>
						</li>
				</ul>
				<button class="navRight" onclick = "moveright()"></button>
			</div>
		</div>
	
	<div class="content"><!-- 主体 -->
	
	<div id="left" class="contentLeft"><!-- 左侧（推荐文章） -->
		
	</div>
	
	<div class="contentRight"><!-- 右侧（热门作者） -->
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
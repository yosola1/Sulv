<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,firefox=1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/choosehobbit.css">
<link rel="stylesheet" type="text/css" href="css/segment.css" />
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
<script src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/segment.js"></script>
<script type="text/javascript" src="js/choosehobbit.js"></script>

</head>
<body>
	<div id="container">

		<div id="main">
			<div id="top-left">
				<div id="yingshi"></div>
				<div id="dianying" >
				
					<p >电影</p>
				</div>
				<div  >
				<Button id="attention2" type="Button" class="btn btn-info" onclick = "add2()" >+关注</Button>
				<Button id="unattention2"  type="Button"class="btn btn-info" onclick = "cancle2()" style="display: none;" >已关注</Button>
				</div>
			</div>
			<div id="top-right">

				<div id="dongman"></div>
				<div name="动漫" >
					<p>动漫</p>
				</div>
				<div id="dongmanxia">
				
					<button id="attention4" class="btn btn-info" onclick = "add4()">+关注</button>
				<button id="unattention4" class="btn btn-info" onclick = "cancle4()" style="display: none;">已关注</button>
					
				</div>
			</div>
			<br>
			<div id="min-top-left">
				<div id="yinyue"></div>
				<div name="音乐" >
					<p>音乐</p>
				</div>
				<div id="yinyuexia">
					
				<button id="attention5" class="btn btn-info" onclick = "add5()">+关注</button>
				<button id="unattention5" class="btn btn-info" onclick = "cancle5()" style="display: none;">已关注</button>
				
				</div>
			</div>
			<div id="min-top-right">
				<div id="keji"></div>
				<div name="科技" >
					<p>科技</p>
				</div>
				<div id="kejixia">
					
					<button id="attention6" class="btn btn-info" onclick = "add6()">+关注</button>
				<button id="unattention6" class="btn btn-info" onclick = "cancle6()" style="display: none;">已关注</button>
					
				</div>
			</div>
			<br>
			<div id="middle-left">
				<div id="renwen"></div>
				<div name="人文" >
					<p>人文</p>
				</div>
				<div id=renwenxia>
				
						<button id="attention1" class="btn btn-info" onclick = "add1()">+关注</button>
				<button id="unattention1" class="btn btn-info" onclick = "cancle1()" style="display: none;">已关注</button>
					
				</div>
			</div>
			<div id="middle-right">
				<div id="meishi"></div>
				<div name="美食" >
					<p>美食</p>
				</div>
				<div id="meishixia">
				
						<button id="attention8" class="btn btn-info" onclick = "add8()">+关注</button>
				<button id="unattention8" class="btn btn-info" onclick = "cancle8()" style="display: none;">已关注</button>
				
				</div>
			</div>
			<br>
			<div id="min-bottom-left">
				<div id="youxi"></div>
				<div name="游戏" >
					<p>游戏</p>
				</div>
				<div id="youxixia">
					
						<button id="attention7" class="btn btn-info" onclick = "add7()">+关注</button>
				<button id="unattention7" class="btn btn-info" onclick = "cancle7()" style="display: none;">已关注</button>
					
				</div>
			</div>
			<div id="min-bottom-right">
				<div id="xinwen"></div>
				<div name="新闻" >
					<p>新闻</p>
				</div>
				<div id="xinwenxia">
				
						<button id="attention3" class="btn btn-info" onclick = "add3()">+关注</button>
				<button id="unattention3" class="btn btn-info" onclick = "cancle3()" style="display: none;">已关注</button>
					
				</div>
			</div>
			<br>
			<div id="bottom-left">
				<div id="lishi"></div>
				<div name="历史" >
					<p>历史</p>
				</div>
				<div id="lishixia">
					
						<button id="attention9" class="btn btn-info" onclick = "add9()">+关注</button>
				<button id="unattention9" class="btn btn-info" onclick = "cancle9()" style="display: none;">已关注</button>
				
				</div>
			</div>
			<div id="bottom-right">
				<div id="lvxing"></div>
				<div name="旅游" >
					<p>旅游</p>
				</div>
				<div id="lvxingxia">
					
						<button id="attention10" class="btn btn-info" onclick = "add10()">+关注</button>
				<button id="unattention10" class="btn btn-info" onclick = "cancle10()" style="display: none;">已关注</button>
					
				</div>
			</div>
		</div>
		<div id="button">
		<a href="login_home.jsp">去主页</a>

		</div>
	</div>


</body>
</html>
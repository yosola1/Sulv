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

<link href="css/message.css" type="text/css" rel="stylesheet">
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/loginVerify.js"></script>
<script type="text/javascript" src="js/function.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/loadAttention.js"></script>
<script type="text/javascript" src="js/message.js"></script>
<title>Insert title here</title>
</head>
<body>
<div  class="all"><!-- all -->
<div class="title"><!-- title -->
	<a class="home" href="login_home.jsp">素履轻文</a>
	 
		<button type="button" class="btn btn-info btn-lg dropdown-toggle" id="username" 
				data-toggle="dropdown" style="float: right;">用户名
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
<div class="change">
		<button type="button" class="btn btn-info btn-lg dropdown-toggle" id="username" >用户名</button><a  href="change.jsp" class="connect">修改个人信息</a>
</div>

<div class="container">

            <div class="tab" role="tabpanel">
                <!-- Nav tabs -->
                <ul class="nav  nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#Section1" id="1"aria-controls="home"  onclick="clickM(this)"role="tab" data-toggle="tab"><i class="fa fa-home"></i> <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"><span>&nbsp点赞       <input type="button"  class="b"
						 value="清空"  onclick="clearL()"/></span></a></li>
                    <li role="presentation"><a href="#Section2" id="2"aria-controls="messages"  onclick="clickM(this)" role="tab" data-toggle="tab"><i class="fa fa-globe"></i> <span class="glyphicon glyphicon-user" aria-hidden="true"><span>&nbsp关注       <input type="button"  class="b"
						 value="清空"  onclick="clearA()"/></span></a></li>
                    <li role="presentation"><a href="#Section3" id="3" aria-controls="messages" onclick="clickM(this)" role="tab" data-toggle="tab" ><i class="fa fa-globe"></i> <span class="glyphicon glyphicon-list-alt" aria-hidden="true"><span>&nbsp收藏       <input type="button"  class="b"
						 value="清空"  onclick="clearC()"/></span></a></li>
                    <li role="presentation"><a href="#Section4" id="4" aria-controls="messages" onclick="clickM(this)" role="tab" data-toggle="tab" ><i class="fa fa-globe"></i> <span class="glyphicon glyphicon-list-alt" aria-hidden="true"><span>&nbsp评论       <input type="button"  class="b"
						 value="清空"  onclick="clearP()"/></span></a></li>
                </ul>
               <!--  -->
                <!-- Tab panes -->
                <div class="tab-content tabs">
                    <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                       <div id="attention">
                      </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="Section2">
                     
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="Section3">
                    	<!-- <div class="article">
                    		<a style='font-size:xx-large;' id='"+list[i].articleId+"' onclick='getid(this)'>title</a>
                    		<a style="float: right;">删除</a><br>
                    		<a style="float: right;">编辑</a>
                    	</div> -->
                    </div>
                            <div role="tabpanel" class="tab-pane fade" id="Section4">
                    	<!-- <div class="article">
                    		<a style='font-size:xx-large;' id='"+list[i].articleId+"' onclick='getid(this)'>title</a>
                    		<a style="float: right;">删除</a><br>
                    		<a style="float: right;">编辑</a>
                    	</div> -->
                    </div>
                    
             

        </div>
</div>

</div>


</div>

</body>
</html>
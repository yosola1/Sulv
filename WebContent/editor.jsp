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
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
<link href="css/bootstrap.min.css" type="text/css" rel="stylesheet">

<link href="css/writing.css" type="text/css" rel="stylesheet">
<script type="text/javascript" src="js/wangEditor.min.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/editor.js"></script>
<title>Insert title here</title>
</head>
<body>
<div class="all"><!-- All -->
	<div class="write"><!-- write -->
		<form>
			<input id="title" class="title" type="text" maxlength="50" placeholder="标题">
			<div id="tool" class="toolbar">
			</div>
			
			<div id="editor" class="text">
				<p>请输入内容...</p>
			</div>
			
			<div class="pub">
			
			<div class="sel" >
				<label>文章类型：</label>
				<select id="selectType" class="form-control">
					<option value="1">人文</option>
					<option value="2">电影</option>
					<option value="3">新闻</option>
					<option value="4">动漫</option>
					<option value="5">音乐</option>
					<option value="6">科技</option>
					<option value="7">游戏</option>
					<option value="8">美食</option>
					<option value="9">历史</option>
					<option value="10">旅游</option>
				</select>
			</div>
			
			<button id="publish" type="button" class="btn btn-lg" style="float: right">发表</button>
			<button id="concal" type="button" class="btn btn-lg" style="float: right">放弃</button>
			</div>
		</form>
	</div>
</div>
</body>
</html>
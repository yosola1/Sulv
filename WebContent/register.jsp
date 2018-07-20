<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/cityselect.css">
<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
<link rel="stylesheet" type="text/css" href="css/register.css">
<!-- <script
	src="http://static.runoob.com/assets/jquery-validation-1.14.0/lib/jquery.js"></script>
<script
	src="http://static.runoob.com/assets/jquery-validation-1.14.0/dist/jquery.validate.min.js"></script> -->
<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/jquery.validate.min.js" type="text/javascript"></script>
<script src="js/cityselect.js" type="text/javascript"></script>
<script src="js/register.js" type="text/javascript"></script>


</head>
<body>
	<form id="register"  type="post">
		<div id="content">
			<div id="main">

				<table width="0" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td><span
							style="display: inline-block; width: 200px; text-align: right;">用
								户 名：</span>
								 <input id="userName" type="text" class="a" name="userName" />

						</td>
					</tr>	
					<tr>
						<td>
								<span
									style="display: inline-block; width: 200px; text-align: right;">密
									码 ：</span> 
									<input id="password" type="password" class="a"name="password" />
						</td>
					</tr>

					<tr>
						<td><span
							style="display: inline-block; width: 200px; text-align: right;">
								确认密码 ：</span> <input id="secondpassword" type="password" class="a"
							name="secondpassword" /></td>
					</tr>
					<tr >
						<td><span style="display: inline-block; width: 200px; text-align: right;">性别：</span>
						<input id="sex" type="radio" name="sex" value="男"
							 />男<input id= "sex" type="radio" name="sex" value="女" />女
						</td>
					</tr>

					<tr>
						  <td><span
							style="display: inline-block; width: 200px; text-align: right;">学
								历 ：</span> <select id="education" class="a">
								
								<option  value="小学">小学</option>
								<option value="初中">初中</option>
								<option value="高中">高中</option>
								<option value="大学">大学</option>
								<option value="研究生">研究生</option>
								<option value="博士">博士</option>
							
						</select></td>
					</tr>
					<tr>
						<td><span
							style="display: inline-block; width: 200px; text-align: right;">地
								址：</span> <input type="text" class="a" name="address" id="address"
							placeholder="请输入目的地"></input></td>
					</tr>

					<tr>

						<td>
							<input type="button" id="registerkey" class="btn btn-primary" 
								style="margin-top: 50px; margin-left: 200px;" value="注册" />
                             
						</td>
					</tr>




				</table>

			</div>

		</div>
	</form>

	<script src="js/Map.js" type="text/javascript"></script>
	
</body>
</html>
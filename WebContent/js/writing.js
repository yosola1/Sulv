$(function(){
	var E = window.wangEditor
	var editor = new E('#tool','#editor')
	var user=isLogin();
	console.log(user);
	//自定义菜单
	editor.customConfig.menus = [
	'head',  // 标题
    'bold',  // 粗体
    'italic',  // 斜体
    'underline',  // 下划线
    'foreColor',  // 文字颜色
    'emoticon',  // 表情
    'table',  // 表格
    'image',  // 插入图片
    'code',  // 插入代码
    'undo',  // 撤销
    'redo'  // 重复
	                         ]
	//不显示网络图片
	editor.customConfig.showLinkImg = false;
	//上传本地图片
	editor.customConfig.uploadImgShowBase64 = true
	editor.customConfig.uploadImgMaxSize = 50* 1024
	editor.create();
	
	var articleContent="";
	document.getElementById('publish').addEventListener('click', function () {
	        // 读取 html
	  	    
		articleContent=editor.txt.html();
		var title=$('#title').val();
		var typeId=$('#selectType').val();
		if(title==null||title==""){
			alert("标题不能为空");
		}
		else if(title.length>30){
			alert("标题长度不能大于30个字符");
		}
		else if(articleContent==null||articleContent==""){
			alert("内容不能为空");
		}
		else{
	    $.ajax({
	    	type:"post",
	    	url:"add",
	    	data:{
	    		userId:user.userId,
	    		title:title,
	    		articleContent:articleContent,
	    		typeId:typeId
	    		
	    	},
	    	
	    	dataType:"json",
	    	success : function(data){
	    		alert("发表成功");
	    		window.location.href="/Sulv/personal.jsp";
	    	},
	    	error : function() {
                alert("发布失败");
            }
	    });
		}
	 }, false);
	document.getElementById('concel').addEventListener('click', function(){
		location.href="login_home.jsp";
	}, false)
});



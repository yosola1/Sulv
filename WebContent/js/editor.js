var articleId=localStorage.getItem("articleId");
$(function(){
	var E = window.wangEditor
	var editor = new E('#tool','#editor')
	
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
	editor.customConfig.uploadImgShowBase64 = true;
	editor.customConfig.uploadImgMaxSize = 100 * 1024
	editor.customConfig.uploadImgMaxLength = 4
	editor.create();
	
	$.ajax({
    	type:"post",
    	url:"selectArticle",
    	data:{
    		articleId:articleId
    	},
    	
    	dataType:"json",
    	success : function(data){
    		console.log(data);
    		var map=data.map;
    		var art=map.art;
    		editor.txt.html(art.articleContent);
    		$("#title").val(art.title);
    		$("#selectType").get(0).selectedIndex=art.typeId-1;
    	},
    	error : function() {
    		editor.txt.html("<h2>加载内容失败</h2>");
        }
    });
	
	document.getElementById('publish').addEventListener('click', function () {
	        // 读取 html
	  	    
		var articleContent=editor.txt.html();
		var title=$('#title').val();
		var typeId=$('#selectType').val();
		if(title==null||title==""){
			alert("标题不能为空");
		}
		else if(title.length>15){
			alert("标题长度不能大于15个字符");
		}
		else if(articleContent==null||articleContent==""){
			alert("内容不能为空");
		}
		else{
	    $.ajax({
	    	type:"post",
	    	url:"updateMyArticle",
	    	data:{
	    		articleId:articleId,
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
                alert("发布失败,图片总大小不能大于50K");
            }
	    });
		}
	 }, false);
});
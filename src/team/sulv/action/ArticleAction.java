package team.sulv.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.ActionSupport;

import team.sulv.mybatis.po.Article;
import team.sulv.mybatis.po.User;
import team.sulv.service.ArticleService;

public class ArticleAction extends ActionSupport {
	private static final long serialVersionUID = 1L;
	private int start;
	private int userId;
	private int num;
	private int articleId;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getArticleId() {
		return articleId;
	}

	public void setArticleId(int articleId) {
		this.articleId = articleId;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}
	private String articleContent;
	private String title;
	private int typeId;
	ArticleService artService=new ArticleService();
	private Map<String, Object> map=new HashMap<String, Object>();
	
	public String getArticleContent() {
		return articleContent;
	}

	public void setArticleContent(String articleContent) {
		this.articleContent = articleContent;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getTypeId() {
		return typeId;
	}

	public void setTypeId(int typeId) {
		this.typeId = typeId;
	}

	

	public Map<String, Object> getMap() {
		return map;
	}

	public void setMap(Map<String, Object> map) {
		this.map = map;
	}

	public String addArticle() throws Exception{

		Boolean result=artService.addArticle(userId,title,articleContent,typeId);
		map.put("result", result);
		if(result){
			return SUCCESS;
		}else{
			return ERROR;
		}
			
	}
	public String selectArticleList() throws IOException{
		List<Article> artList=artService.selectArticleList(start,num);
		map.put("artList", artList);
		
		return SUCCESS;
	}
	public String selectArticle() throws IOException{
		Article art=artService.selectArticle(articleId);
		map.put("art", art);
		return SUCCESS;
	}
	public String selectHotArticle() throws IOException{
		List<Article> list=artService.selectHotArticle(0, 5);
		map.put("list", list);
		return SUCCESS;
	}
	
	public String selectMyArticle() throws IOException{
		List<Article> artList=artService.selectMyArticle(userId,start,num);
		map.put("artList", artList);
		return SUCCESS;
	}
	public String selectCollectionArticle() throws IOException{
		List<Article> artList=artService.selectCollectionArticle(userId,start,num);
		
		map.put("artList", artList);
		return SUCCESS;
	}
	
	public String deleteMyArticle() throws IOException{
		Boolean result=artService.deleteMyArticle(articleId);
		map.put("result", result);
		return SUCCESS;
	}
	
	public String updateMyArticle() throws IOException{
		Boolean result=artService.updateMyArticle(articleId, title, articleContent, typeId);
		map.put("result", result);
		return SUCCESS;
	}
	
	public String recommendArticleA() throws IOException{
		List<Article> artList=artService.recommendArticleA(userId,start,num);
		
		map.put("artList", artList);
		return SUCCESS;
	}
	
	public String recommendArticleB() throws IOException{
		List<Article> artList=artService.recommendArticleB(userId,start,num);
		map.put("artList", artList);
		return SUCCESS;
	}
	
	public String selectThisType() throws IOException{
		List<Article> artList=artService.selectThisType(typeId,start,num);
		map.put("artList", artList);
		return SUCCESS;
	}
	public String checkArticle() throws IOException{

		Article article=artService.checkArticle(title);
		
		map.put("article", article);
		return SUCCESS;
	}
	
}

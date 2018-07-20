package team.sulv.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;

import team.sulv.mybatis.po.Collection;
import team.sulv.mybatis.po.Like;
import team.sulv.service.CollectionService;

public class CollectionAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private CollectionService service=new CollectionService();
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
	public Map<String, Object> getMap() {
		return map;
	}
	public void setMap(Map<String, Object> map) {
		this.map = map;
	}
	private int userId;
	private int articleId;
	private Map<String, Object> map=new HashMap<String, Object>();
	
	public String addCollection() throws IOException{
		Boolean result=service.addCollection(userId, articleId);
		map.put("result", result);
		return SUCCESS;
		
	}
	
	public String isCollection() throws IOException{
		Boolean result=service.isCollection(userId, articleId);
		map.put("result", result);
		return SUCCESS;
		
	}
	
	public String deleteCollection() throws IOException{
		Boolean result=service.deleteCollection(userId, articleId);
		map.put("result", result);
		return SUCCESS;
		
	}
	public String getMessageC() throws IOException{
		List<Collection> collectionList=service.getMessageC(userId);
		map.put("collectionList", collectionList);
     
		return SUCCESS;
	}
	public String clearC() throws IOException{
		Boolean result=service.clearC(userId);
		map.put("result", result);
		System.out.println(result);
		return SUCCESS;
	}

}

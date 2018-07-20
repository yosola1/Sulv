package team.sulv.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;

import team.sulv.mybatis.po.Attention;
import team.sulv.mybatis.po.Like;
import team.sulv.service.LikeService;

public class LikeAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private int articleId;
	private int userId;
	LikeService likeService=new LikeService();
	private Map<String, Object> map=new HashMap<String, Object>();
	
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
	public String addLike() throws IOException{
		Boolean result=likeService.addLike(userId, articleId);
		map.put("result", result);
		return SUCCESS;
		
	}
	public String deleteLike() throws IOException{
		Boolean result=likeService.deleteLike(userId, articleId);
		map.put("result", result);
		return SUCCESS;
		
	}
	public String isLike() throws IOException{
		Boolean result=likeService.isLike(userId, articleId);
		map.put("result", result);
		return SUCCESS;
		
	}
	public String getMessageL() throws IOException{
		List<Like> likeList=likeService.getMessageL(userId);
		map.put("likeList", likeList);
		return SUCCESS;
	}
	public String clearL() throws IOException{
		Boolean result=likeService.clearL(userId);
		map.put("result", result);
		return SUCCESS;
	}

}

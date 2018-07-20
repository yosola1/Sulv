package team.sulv.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;

import team.sulv.mybatis.po.Collection;
import team.sulv.mybatis.po.Comment;
import team.sulv.service.CommentService;

public class CommentAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int articleId;
	private int userId;
	private String commentContent;
	private Map<String, Object> map=new HashMap<String, Object>();
	CommentService comSer=new CommentService();
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getCommentContent() {
		return commentContent;
	}
	public void setCommentContent(String commentContent) {
		this.commentContent = commentContent;
	}
	public Map<String, Object> getMap() {
		return map;
	}
	public void setMap(Map<String, Object> map) {
		this.map = map;
	}
	public int getArticleId() {
		return articleId;
	}
	public void setArticleId(int articleId) {
		this.articleId = articleId;
	}
	
	public String selectComment() throws IOException{
		List<Comment> comList=comSer.selectComment(articleId);
		map.put("comList", comList);
		return SUCCESS;
		
	}
	
	public String addComment() throws IOException{
		Boolean result=comSer.addComment(userId,articleId, commentContent);
		map.put("result", result);
		return SUCCESS;
		
	}
	
	public String deleteComment() throws IOException{
		Boolean result=comSer.deleteComment(userId, articleId);
		map.put("result", result);
		return SUCCESS;
		
	}
	public String getMessageP() throws IOException{
		List<Comment> commentList=comSer.getMessageP(userId);
		map.put("commentList", commentList);
     
		return SUCCESS;
	}
	
	public String clearP() throws IOException{
		Boolean result=comSer.clearP(userId);
		map.put("result", result);
		System.out.println(result);
		return SUCCESS;
	}

}

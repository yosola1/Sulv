package team.sulv.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;

import team.sulv.mybatis.po.Attention;
import team.sulv.service.AttentionService;

public class AttentionAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private int followerId;
	private int byFollowerId;
	private Map<String, Object> map=new HashMap<String, Object>();
	AttentionService attentService=new AttentionService();

	public int getFollowerId() {
		return followerId;
	}
	public void setFollowerId(int followerId) {
		this.followerId = followerId;
	}
	public int getByFollowerId() {
		return byFollowerId;
	}
	public void setByFollowerId(int byFollowerId) {
		this.byFollowerId = byFollowerId;
	}
	
	public Map<String, Object> getMap() {
		return map;
	}
	public void setMap(Map<String, Object> map) {
		this.map = map;
	}
	public String addAttention() throws IOException{
		
		Boolean result=attentService.addAttention(followerId, byFollowerId);
		map.put("result", result);
		if(result)
			return SUCCESS;
		else
			return ERROR;
		
	}
	public String isAttention() throws IOException{
		Boolean result=attentService.isAttention(followerId, byFollowerId);
		map.put("result", result);
			return SUCCESS;
		
	}
public String deleteAttention() throws IOException{
		Boolean result=attentService.deleteAttention(followerId, byFollowerId);
		map.put("result", result);
		if(result)
			return SUCCESS;
		else
			return ERROR;
	}
public String getFansList() throws IOException{

	List<Attention> fansList=attentService.getFansList(byFollowerId);
	map.put("fansList", fansList);
	return SUCCESS;
}
public String getAttention() throws IOException{
	List<Attention> attentionList=attentService.getAttention(followerId);
	map.put("attentionList", attentionList);
	return SUCCESS;
}
public String clearA() throws IOException{
	Boolean result=attentService.clearA(byFollowerId);
	map.put("result", result);
	return SUCCESS;
}
	

}

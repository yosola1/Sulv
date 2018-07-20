package team.sulv.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;

import team.sulv.service.InterestService;

public class InterestAction extends ActionSupport {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int userId;
	private int typeId;
	private Map<String, Object> map=new HashMap<String, Object>();
	InterestService interestService=new InterestService();
	public Map<String, Object> getMap() {
		return map;
	}
	public void setMap(Map<String, Object> map) {
		this.map = map;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getTypeId() {
		return typeId;
	}
	public void setTypeId(int typeId) {
		this.typeId = typeId;
	}
	public String addInterest() throws IOException{
		
		Boolean result=interestService.addInterest(userId, typeId);
		map.put("result", result);
		if(result)
			return SUCCESS;
		else
			return ERROR;
		
	}
	public String isInterest() throws IOException{
	
		Boolean result=interestService.isInterest(userId, typeId);
		map.put("result", result);
	   
			return SUCCESS;

		
	}
	public String cancleInterest() throws IOException{
		
		Boolean result=interestService.cancleInterest(userId, typeId);
		map.put("result", result);
		if(result)
			return SUCCESS;
		else
			return ERROR;
		
	}
}

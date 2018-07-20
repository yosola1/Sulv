package team.sulv.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import team.sulv.mybatis.po.User;
import team.sulv.service.UserService;

public class UserAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private int userId;

	private String userName;
	private String password;
	private String address;
	private String education;
	private String sex;
	private int fansNum;
	UserService service=new UserService();
	private Map<String,Object> map=new HashMap<String,Object>();
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEducation() {
		return education;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public int getFansNum() {
		return fansNum;
	}
	public void setFansNum(int fansNum) {
		this.fansNum = fansNum;
	}


	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Map<String, Object> getMap() {
		return map;
	}
	public void setMap(Map<String, Object> map) {
		this.map = map;
	}
	
	public String selectUser() throws IOException{
		User user=service.selectUser(userName, password);
		if(user!=null){
			Map session = ActionContext.getContext().getSession(); 
			
			session.put("user", user);
			
		}
		map.put("user", user);
		return SUCCESS;
	}
	public String checkUser() throws IOException{

		User user=service.checkUser(userName);
		
		map.put("user", user);
	
		return SUCCESS;
	}
	
	public String logout(){
		Map session = ActionContext.getContext().getSession(); 
		session.remove("user");
		return SUCCESS;
		
	}
	public String selectHotWriter() throws IOException{
		List<User> writerlist=service.selectHotWriter(0, 5);
		map.put("writerlist", writerlist);
		return SUCCESS;
	}
	public String addUser() throws Exception{
	Boolean result=service.addUser(userName,password,sex,education,address);
		map.put("result", result);
		//System.out.println(result);
		if(result){
			return SUCCESS;
		}else{
			return ERROR;
		}
			
	}
	public String getUser() throws IOException{
		List<User> userlist=service.getUser(userId);
		//map.put("userlist", userlist);
		/*for(int i=0;i<userlist.size();i++){
		System.out.println(userlist.get(i));
		}*/
		for(User user:userlist){
			map.put("userlist", user);
		}
		
		return SUCCESS;
	}
	public String updateUser() throws IOException{
		Boolean result=service.updateUser(userId, userName,password,sex,education,address);
		map.put("result", result);
		return SUCCESS;
	}
}

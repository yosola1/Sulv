package team.sulv.service;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import team.sulv.Iservice.IUserService;
import team.sulv.mybatis.dao.UserDao;
import team.sulv.mybatis.po.Article;
import team.sulv.mybatis.po.User;

public class UserService implements IUserService {
	UserDao dao=new UserDao();

	
	@Override
	public User selectUser(String userName, String password) throws IOException {
		// TODO Auto-generated method stub
		User user=new User();
		user.setUserName(userName);
		user.setPassword(password);
		return dao.selectUser(user);
	}
	@Override
	public User checkUser(String userName) throws IOException {
		// TODO Auto-generated method stub
		User user=new User();
		user.setUserName(userName);

		return dao.checkUser(user);
	}
	@Override
	public List<User> selectHotWriter(int start, int num) throws IOException {
		// TODO Auto-generated method stub
		List<User> writerlist=dao.selectHotWriter(start,num);
		return writerlist;
	}
	public boolean addUser(String userName, String password,String sex, String education, String address)throws IOException {
		User user=new User();
	  
	    user.setUserName(userName);
	    user.setPassword(password);
	    user.setSex(sex);
	    user.setEducation(education);
	    user.setAddress(address);
	    user.setFansNum(0);
	    Boolean result=dao.addUser(user);
		return result;
    
}
	@Override
	public List<User> getUser(int userId) throws IOException {
		// TODO Auto-generated method stub
		List<User> userlist=dao.getUser(userId);
		return userlist;
	}
	@Override
	public boolean updateUser(int userId, String userName, String password,String sex, String education, String address) throws IOException {
		// TODO Auto-generated method stub
	    User	user=new User();
	    user.setUserId(userId);
	    user.setUserName(userName);
	    user.setPassword(password);
	    user.setSex(sex);
	    user.setEducation(education);
	    user.setAddress(address);
		return dao.updateUser(user);
	}
}

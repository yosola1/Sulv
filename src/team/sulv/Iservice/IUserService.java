package team.sulv.Iservice;

import java.io.IOException;
import java.util.List;

import team.sulv.mybatis.po.Article;
import team.sulv.mybatis.po.User;

public interface IUserService {
	public User selectUser(String userName,String password) throws IOException;
	public User checkUser(String userName) throws IOException;
	public List<User> selectHotWriter(int start,int num) throws IOException;
	public List<User> getUser(int userId) throws IOException;
	public boolean addUser(String userName,String password,String sex,String education,String address) throws IOException ;
	public boolean updateUser(int userId,String userName,String password,String sex,String education,String address) throws IOException ;
}

package team.sulv.mybatis.dao;

import java.io.IOException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import team.sulv.mybatis.Idao.ArticleMapper;
import team.sulv.mybatis.Idao.UserMapper;
import team.sulv.mybatis.po.Article;
import team.sulv.mybatis.po.User;
import team.sulv.tool.DatabaseConnect;

public class UserDao {
	DatabaseConnect dbcon=new DatabaseConnect();
	private UserMapper map;
	public User selectUser(User user) throws IOException{
		SqlSession session=dbcon.Connect();
		map=session.getMapper(UserMapper.class);
		User userInfo=map.selectUser(user);
		session.commit();
		session.close();
		return userInfo;
	}
	public User checkUser(User user) throws IOException{
		SqlSession session=dbcon.Connect();
		map=session.getMapper(UserMapper.class);
		User information=map.checkUser(user);
		session.commit();
		session.close();

		return information;
	}
	public List<User> selectHotWriter(int a1,int a2) throws IOException{
		SqlSession session=dbcon.Connect();
		map=session.getMapper(UserMapper.class);
		List<User> writerlist=map.selectHotWriter(a1, a2);
		session.commit();
		session.close();
		return writerlist;
		
	}
	public Boolean addUser(User user) throws IOException{
		SqlSession session=dbcon.Connect();
		map=session.getMapper(UserMapper.class);
		int b=map.insert(user);
		session.commit();
		session.close();
		if(b>0){
			return true;
		}
		else
			return false;
	}
	public List<User> getUser(int userId) throws IOException{
		SqlSession session=dbcon.Connect();
		map=session.getMapper(UserMapper.class);
		List<User> userlist=map.getUser(userId);
		session.commit();
		session.close();
		return userlist;
		
	}
	public Boolean updateUser(User user) throws IOException{
		SqlSession session=dbcon.Connect();
		map=session.getMapper(UserMapper.class);
		int a=map.updateByPrimaryKeySelective(user);
		session.commit();
		session.close();
		if(a>0)
			return true;
		else
			return false;
	}

}

package team.sulv.mybatis.dao;

import java.io.IOException;

import org.apache.ibatis.session.SqlSession;

import team.sulv.mybatis.Idao.InterestMapper;
import team.sulv.mybatis.po.InterestKey;
import team.sulv.tool.DatabaseConnect;

public class InterestDao {
	DatabaseConnect dbcon=new DatabaseConnect();
	private InterestMapper interestmap;
	public Boolean addInterest(InterestKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		interestmap=session.getMapper(InterestMapper.class);
		int a=interestmap.insert(key);
		session.commit();
		session.close();
		if(a>0)
			return true;
		else
			return false;
		
	}
	public Boolean isInterest(InterestKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		interestmap=session.getMapper(InterestMapper.class);
		InterestKey a=interestmap.selectByPrimaryKey(key);
		session.commit();
		session.close();
		if(a!=null){
			return true;
		}
		else
			return false;
		
	}
	public Boolean cancleInterest(InterestKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		interestmap=session.getMapper(InterestMapper.class);
		int a=interestmap.cancleInterest(key);
		session.commit();
		session.close();
		if(a>0)
			return true;
		else
			return false;
		
	}
	

}

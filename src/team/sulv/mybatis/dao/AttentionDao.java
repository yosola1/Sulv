package team.sulv.mybatis.dao;

import java.io.IOException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import team.sulv.mybatis.Idao.AttentionMapper;
import team.sulv.mybatis.Idao.LikeMapper;
import team.sulv.mybatis.Idao.UserMapper;
import team.sulv.mybatis.po.Attention;
import team.sulv.mybatis.po.AttentionKey;
import team.sulv.mybatis.po.Like;
import team.sulv.tool.DatabaseConnect;

public class AttentionDao {
	DatabaseConnect dbcon=new DatabaseConnect();
	private AttentionMapper attentionmap;
	private UserMapper usermap;
	@SuppressWarnings("null")
	public Boolean addAttention(Attention attention){
		SqlSession session = null;
		int a=0;
		int b=0;
		try {
			session = dbcon.Connect();
			attentionmap=session.getMapper(AttentionMapper.class);
			a=attentionmap.insert(attention);
			usermap=session.getMapper(UserMapper.class);
			b=usermap.updateAttentionNum(attention.getByFollowerId());
			session.commit();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			session.rollback();
		}
		finally {
			session.close();
		}
		
		if(a>0 && b>0)
			return true;
		else
			return false;
	}
	
	public Boolean isAttention(AttentionKey attent) throws IOException{
		SqlSession session=dbcon.Connect();
		attentionmap=session.getMapper(AttentionMapper.class);
		Attention a=attentionmap.selectByPrimaryKey(attent);
		session.commit();
		session.close();
		if(a!=null){
			return true;
		}
		else
			return false;
		
	}
	
	@SuppressWarnings("null")
	public Boolean deleteAttention(AttentionKey key){
		SqlSession session=null;
		int a=0;
		int b=0;
		try {
			session = dbcon.Connect();
			attentionmap=session.getMapper(AttentionMapper.class);
			a=attentionmap.deleteByPrimaryKey(key);
			usermap=session.getMapper(UserMapper.class);
			b=usermap.subAttentionNum(key.getByFollowerId());
			session.commit();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			session.rollback();
			e.printStackTrace();
		}finally {
			session.close();
		}
		if(a>0 && b>0)
			return true;
		else
			return false;
	}
	public List<Attention> getFansList(int byFollowerId) throws IOException{
		SqlSession session=dbcon.Connect();
		attentionmap=session.getMapper(AttentionMapper.class);
		List<Attention> fansList=attentionmap.getFans(byFollowerId);
	
		session.commit();
		session.close();
		return fansList;
		
	}
	public List<Attention> getAttention(int followerId) throws IOException{
		SqlSession session=dbcon.Connect();
		attentionmap=session.getMapper(AttentionMapper.class);
		List<Attention> attentionList=attentionmap.getAttention(followerId);
	
		session.commit();
		session.close();
		return attentionList;
		
	}
	public Boolean clearA(AttentionKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		attentionmap=session.getMapper(AttentionMapper.class);
		int a=attentionmap.clearA(key);
		session.commit();
		session.close();
		if(a>0)
			return true;
		else
			return false;
	}
}

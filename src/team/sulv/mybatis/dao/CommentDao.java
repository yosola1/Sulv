package team.sulv.mybatis.dao;


import java.io.IOException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import team.sulv.mybatis.Idao.CollectionMapper;
import team.sulv.mybatis.Idao.CommentMapper;
import team.sulv.mybatis.po.Collection;
import team.sulv.mybatis.po.CollectionKey;
import team.sulv.mybatis.po.Comment;
import team.sulv.mybatis.po.CommentKey;
import team.sulv.tool.DatabaseConnect;

public class CommentDao {
	DatabaseConnect dbcon=new DatabaseConnect();
	private CommentMapper commap;
	public List<Comment> selectComment(int articleId) throws IOException{
		SqlSession session=dbcon.Connect();
		commap=session.getMapper(CommentMapper.class);
		List<Comment> comList=commap.selectComment(articleId);
		session.commit();
		session.close();
		return comList;
	}
	
	public Boolean addComment(Comment comment) throws IOException{
		SqlSession session=dbcon.Connect();
		commap=session.getMapper(CommentMapper.class);
		int a=commap.insert(comment);
		session.commit();
		session.close();
		if(a>0)
		return true;
		else
			return false;
		
	}
	
	public Boolean deleteComment(CommentKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		commap=session.getMapper(CommentMapper.class);
		int a=commap.deleteByPrimaryKey(key);
		session.commit();
		session.close();
		if(a>0)
			return true;
		else
			return false;
		
	}
	public List<Comment> getMessageP(CommentKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		commap=session.getMapper(CommentMapper.class);
		List<Comment> commentList=commap.getComment(key);
	    
		session.commit();
		session.close();
		return commentList;
		
	}
	public Boolean clearP(CommentKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		commap=session.getMapper(CommentMapper.class);
		int a=commap.clearP(key);
		session.commit();
		session.close();
		if(a>0)
			return true;
		else
			return false;
	}
}

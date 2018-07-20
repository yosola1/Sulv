package team.sulv.mybatis.dao;

import java.io.IOException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import team.sulv.mybatis.Idao.ArticleMapper;
import team.sulv.mybatis.Idao.AttentionMapper;
import team.sulv.mybatis.Idao.LikeMapper;
import team.sulv.mybatis.Idao.UserMapper;
import team.sulv.mybatis.po.Attention;
import team.sulv.mybatis.po.Like;
import team.sulv.mybatis.po.LikeKey;
import team.sulv.mybatis.po.User;
import team.sulv.tool.DatabaseConnect;

public class LikeDao {
	DatabaseConnect dbcon=new DatabaseConnect();
	private LikeMapper likemap;
	private ArticleMapper article;
	@SuppressWarnings("null")
	public Boolean addLike(Like like){
		SqlSession session = null;
		int a = 0;
		int b=0;
		try {
			session = dbcon.Connect();
			likemap=session.getMapper(LikeMapper.class);
			a=likemap.insert(like);
			article=session.getMapper(ArticleMapper.class);
			b=article.updateLikeNum(like.getArticleId());
			session.commit();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			session.rollback();
			e.printStackTrace();
		}finally{
			session.close();
			
		}
		if(a>0 && b>0){
			return true;
		}
		else
			return false;
		
	}
	
	public Boolean isLike(LikeKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		likemap=session.getMapper(LikeMapper.class);
		Like a=likemap.selectByPrimaryKey(key);
		session.commit();
		session.close();
		if(a!=null){
			return true;
		}
		else
			return false;
	}
	
	@SuppressWarnings("null")
	public Boolean deleteLike(LikeKey key){
		SqlSession session=null;
		int a=0;
		int b=0;
		try {
			session = dbcon.Connect();
			likemap=session.getMapper(LikeMapper.class);
			a=likemap.deleteByPrimaryKey(key);
			article=session.getMapper(ArticleMapper.class);
			b=article.subLikeNum(key.getArticleId());
			session.commit();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			session.rollback();
			e.printStackTrace();
		}finally {
			session.close();
		}
		
		if(a>0 && b>0){
			return true;
		}
		else
			return false;
	}
	public List<Like> getMessageL(LikeKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		likemap=session.getMapper(LikeMapper.class);
		List<Like> likeList=likemap.getLike(key);
	    
		session.commit();
		session.close();
		return likeList;
		
	}
	public Boolean clearL(Like like) throws IOException{
		SqlSession session=dbcon.Connect();
		likemap=session.getMapper(LikeMapper.class);
		int a=likemap.clearL(like);
		session.commit();
		session.close();
		if(a>0)
			return true;
		else
			return false;
	}

}

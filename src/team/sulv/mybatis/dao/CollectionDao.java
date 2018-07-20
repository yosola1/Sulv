package team.sulv.mybatis.dao;

import java.io.IOException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import team.sulv.mybatis.Idao.ArticleMapper;
import team.sulv.mybatis.Idao.CollectionMapper;
import team.sulv.mybatis.Idao.LikeMapper;
import team.sulv.mybatis.po.Collection;
import team.sulv.mybatis.po.CollectionKey;
import team.sulv.mybatis.po.Like;
import team.sulv.mybatis.po.LikeKey;
import team.sulv.tool.DatabaseConnect;

public class CollectionDao {
	DatabaseConnect dbcon=new DatabaseConnect();
	private CollectionMapper mapper;
	private ArticleMapper articlemap;
	@SuppressWarnings("null")
	public Boolean addCollection(Collection collection){
		SqlSession session=null;
		int a=0;
		int b=0;
		try {
			session = dbcon.Connect();
			mapper=session.getMapper(CollectionMapper.class);
			a=mapper.insert(collection);
			articlemap=session.getMapper(ArticleMapper.class);
			b=articlemap.updateCollecctionNum(collection.getArticleId());
			session.commit();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			session.rollback();
			e.printStackTrace();
		}
		finally {
			session.close();
		}
		
		if(a>0 && b>0)
			return true;
		else
			return false;
		
	}
	
	@SuppressWarnings("null")
	public Boolean deleteCollection(CollectionKey key) {
		SqlSession session=null;
		int a=0;
		int b=0;
		try {
			session = dbcon.Connect();
			mapper=session.getMapper(CollectionMapper.class);
			a=mapper.deleteByPrimaryKey(key);
			articlemap=session.getMapper(ArticleMapper.class);
			b=articlemap.subCollecctionNum(key.getArticleId());
			session.commit();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			session.rollback();
			e.printStackTrace();
		}
		finally {
			session.close();
		}
		
		if(a>0 && b>0)
			return true;
		else
			return false;
		
	}
	
	public Boolean isCollection(CollectionKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		mapper=session.getMapper(CollectionMapper.class);
		Collection collection=mapper.selectByPrimaryKey(key);
		session.commit();
		session.close();
		if(collection!=null)
			return true;
		else
			return false;
		
	}
	public List<Collection> getMessageC(CollectionKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		mapper=session.getMapper(CollectionMapper.class);
		List<Collection> collectionList=mapper.getCollection(key);
	    
		session.commit();
		session.close();
		return collectionList;
		
	}
	public Boolean clearC(CollectionKey key) throws IOException{
		SqlSession session=dbcon.Connect();
		mapper=session.getMapper(CollectionMapper.class);
		int a=mapper.clearC(key);
		session.commit();
		session.close();
		if(a>0)
			return true;
		else
			return false;
	}

}

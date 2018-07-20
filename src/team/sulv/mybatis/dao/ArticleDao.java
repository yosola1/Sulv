package team.sulv.mybatis.dao;

import java.io.IOException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import team.sulv.mybatis.Idao.ArticleMapper;
import team.sulv.mybatis.Idao.UserMapper;
import team.sulv.mybatis.po.Article;
import team.sulv.mybatis.po.User;
import team.sulv.tool.DatabaseConnect;

public class ArticleDao {
	DatabaseConnect dbcon=new DatabaseConnect();
	private ArticleMapper artmap;
	
	public Boolean addArticle(Article art) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		int a=artmap.insert(art);
		session.commit();
		session.close();
		if(a>0){
			return true;
		}
		else
			return false;
	}
	
	
	public List<Article> selectArticleList(int a1,int a2) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		List<Article> artList=artmap.selectArticleList(a1, a2);
		session.commit();
		session.close();
		return artList;
	}
	
	public Article selectArticle(int articleId) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		Article art=artmap.selectByPrimaryKey(articleId);
		session.commit();
		session.close();
		return art;
	}
	
	public List<Article> selectHotArticle(int a1,int a2) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		List<Article> list=artmap.selectHotArticle(a1, a2);
		session.commit();
		session.close();
		return list;
		
	}
	
	public List<Article> selectMyArticle(int userId,int a1,int a2) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		List<Article> artList=artmap.selectMyArticle(userId,a1, a2);
		session.commit();
		session.close();
		return artList;
	}
	public List<Article> selectThisType(int typeId,int a1,int a2) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		List<Article> artList=artmap.selectThisType(typeId,a1, a2);
		session.commit();
		session.close();
		return artList;
	}
	
	public Boolean deleteMyArticle(int articleId) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		int a=artmap.deleteByPrimaryKey(articleId);
		session.commit();
		session.close();
		if(a>0)
			return true;
		else
			return false;
	}
	
	public Boolean updateMyArticle(Article article) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		int a=artmap.updateByPrimaryKeySelective(article);
		session.commit();
		session.close();
		if(a>0)
			return true;
		else
			return false;
	}
	
	public  List<Article> recommendArticleA(int userId,int offset ,int limit) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		List<Article> artList=artmap.recommendArticleA(userId,offset, limit);
		
		session.commit();
		session.close();
		return artList;
	}
	
	public  List<Article> recommendArticleB(int userId,int offset ,int limit) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		List<Article> artList=artmap.recommendArticleB(userId,offset, limit);
		
		session.commit();
		session.close();
		return artList;
	}
	
	public List<Article> selectCollectionArticle(int userId, int offset, int limit) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		List<Article> artList=artmap.selectCollectionArticle(userId,offset, limit);
		session.commit();
		session.close();
		return artList;
	}
	public Article checkArticle(String title) throws IOException{
		SqlSession session=dbcon.Connect();
		artmap=session.getMapper(ArticleMapper.class);
		Article information=artmap.checkArticle(title);
		session.commit();
		session.close();

		return information;
	}

}

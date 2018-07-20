package team.sulv.service;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import team.sulv.Iservice.IArticleService;
import team.sulv.mybatis.dao.ArticleDao;
import team.sulv.mybatis.po.Article;
import team.sulv.mybatis.po.User;
import team.sulv.tool.CreateArticleId;

public class ArticleService  implements IArticleService  {
	
	ArticleDao dao=new ArticleDao();
	Article art;

	public boolean addArticle(int userId,String title,String articleContent,int typeId) throws IOException{
		CreateArticleId creatid=new CreateArticleId();
		art=new Article();
		Date date=new Date();
		int articleId=creatid.setArticleId(userId, date);
		art.setTitle(title);
		art.setArticleContent(articleContent);
		
		art.setTypeId(typeId);
		art.setCreateDate(date);
		art.setFinalDate(date);
		art.setUserId(userId);
		art.setArticleId(articleId);
		art.setLikeNum(0);
		art.setCollectionNum(0);
		return dao.addArticle(art);

	}

	@Override
	public List<Article> selectArticleList(int start,int num) throws IOException {
		// TODO Auto-generated method stub
		List<Article> artList=dao.selectArticleList(start,num);
		
		return artList;
	}

	@Override
	public Article selectArticle(int articleId) throws IOException {
		// TODO Auto-generated method stub
		Article art=dao.selectArticle(articleId);
		return art;
	}

	@Override
	public List<Article> selectHotArticle(int start, int num) throws IOException {
		// TODO Auto-generated method stub
		List<Article> list=dao.selectHotArticle(start,num);
		return list;
	}

	@Override
	public List<Article> selectMyArticle(int userId,int start, int num) throws IOException {
		// TODO Auto-generated method stub
		List<Article> list=dao.selectMyArticle(userId,start,num);
		return list;
	}

	@Override
	public boolean deleteMyArticle(int articleId) throws IOException {
		// TODO Auto-generated method stub
		return dao.deleteMyArticle(articleId);
	}

	@Override
	public boolean updateMyArticle(int articleId, String title, String articleContent, int typeId) throws IOException {
		// TODO Auto-generated method stub
		art=new Article();
		Date date=new Date();
		art.setTitle(title);
		art.setArticleId(articleId);
		art.setArticleContent(articleContent);
		art.setFinalDate(date);
		art.setTypeId(typeId);
		return dao.updateMyArticle(art);
	}

	@Override
	public List<Article> recommendArticleA(int userId, int start, int num) throws IOException {
		// TODO Auto-generated method stub
		List<Article> list=dao.recommendArticleA(userId,start,num);
		return list;
	}

	@Override
	public List<Article> recommendArticleB(int userId, int start, int num) throws IOException {
		// TODO Auto-generated method stub
		List<Article> list=dao.recommendArticleB(userId,start,num);
		return list;
	}

	@Override
	public List<Article> selectThisType(int typeId, int start, int num) throws IOException {
		// TODO Auto-generated method stub
		List<Article> list=dao.selectThisType(typeId,start,num);
		return list;
	}

	@Override
	public List<Article> selectCollectionArticle(int userId, int offset, int limit) throws IOException {
		// TODO Auto-generated method stub
		List<Article> list=dao.selectCollectionArticle(userId,offset,limit);
		return list;
	}
	@Override
	public Article checkArticle(String title) throws IOException {
		// TODO Auto-generated method stub
	

		return dao.checkArticle(title);
	}
	

}

package team.sulv.Iservice;

import java.io.IOException;
import java.util.List;

import team.sulv.mybatis.po.Article;
import team.sulv.mybatis.po.User;

public interface IArticleService {
	public boolean addArticle(int userId,String title,String articleContent,int typeId) throws IOException ;
	public List<Article> selectArticleList(int start,int num) throws IOException;
	public Article selectArticle(int articleId) throws IOException;
	public List<Article> selectHotArticle(int start,int num) throws IOException;
	public List<Article> selectMyArticle(int userId,int start,int num) throws IOException;
	public boolean deleteMyArticle(int articleId) throws IOException ;
	public boolean updateMyArticle(int articleId,String title,String articleContent,int typeId) throws IOException ;
	public List<Article> recommendArticleA(int userId,int start,int num) throws IOException;
	public List<Article> selectCollectionArticle(int userId,int offset ,int limit) throws IOException;
	public List<Article> recommendArticleB(int userId,int start,int num) throws IOException;
	public List<Article> selectThisType(int typeId,int start,int num) throws IOException;
	public Article checkArticle(String title) throws IOException;
}

package team.sulv.mybatis.Idao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import team.sulv.mybatis.po.Article;
import team.sulv.mybatis.po.User;

public interface ArticleMapper {
    int deleteByPrimaryKey(Integer articleId);

    int insert(Article record);
    Article checkArticle(String title);
    int insertSelective(Article record);
    int updateCollecctionNum(Integer articleId);
    List<Article> recommendArticleA(int userId,int offset ,int limit);
    int subCollecctionNum(Integer articleId);
    List<Article> recommendArticleB(int userId,int offset ,int limit);

    Article selectByPrimaryKey(Integer articleId);

    int updateByPrimaryKeySelective(Article record);
    
    int updateLikeNum(Integer articleId);
    int subLikeNum(Integer articleId);
    int updateByPrimaryKey(Article record);
    
    List<Article> selectHotArticle(int offset,int limit);
    
    List<Article> selectArticleList(int offset ,int limit);
    
    List<Article> selectCollectionArticle(int userId,int offset ,int limit);
    
    List<Article> selectMyArticle(int userId,int offset ,int limit);
    
    List<Article> selectThisType(int typeId,int offset ,int limit);
}
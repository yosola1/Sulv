package team.sulv.mybatis.Idao;

import java.util.List;

import team.sulv.mybatis.po.Collection;
import team.sulv.mybatis.po.CollectionKey;
import team.sulv.mybatis.po.Comment;
import team.sulv.mybatis.po.CommentKey;

public interface CommentMapper {
    int deleteByPrimaryKey(CommentKey key);

    int insert(Comment record);

    int insertSelective(Comment record);

    Comment selectByPrimaryKey(CommentKey key);
    
    List<Comment> selectComment(int articleId);

    int updateByPrimaryKeySelective(Comment record);
    int clearP(CommentKey key);
    int updateByPrimaryKey(Comment record);
    List<Comment>  getComment(CommentKey key);
}
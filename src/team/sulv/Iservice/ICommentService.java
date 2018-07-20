package team.sulv.Iservice;

import java.io.IOException;
import java.util.List;

import team.sulv.mybatis.po.Collection;
import team.sulv.mybatis.po.Comment;

public interface ICommentService {
	public List<Comment> selectComment(int articleId) throws IOException;
	public Boolean addComment(int userId,int articleId,String comment) throws IOException;
	public Boolean deleteComment(int userId,int articleId) throws IOException;
	public List<Comment> getMessageP(int userId) throws IOException;
	public boolean clearP(int userId) throws IOException ;
}

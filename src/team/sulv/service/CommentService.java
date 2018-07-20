package team.sulv.service;

import java.io.IOException;
import java.util.List;

import team.sulv.Iservice.ICommentService;
import team.sulv.mybatis.dao.CommentDao;
import team.sulv.mybatis.po.Collection;
import team.sulv.mybatis.po.Comment;
import team.sulv.mybatis.po.CommentKey;

public class CommentService implements ICommentService {
	CommentDao dao=new CommentDao();
	Comment comment=new Comment();
	CommentKey key=new CommentKey();

	@Override
	public List<Comment> selectComment(int articleId) throws IOException {
		// TODO Auto-generated method stub
		List<Comment> comList=dao.selectComment(articleId);
		return comList;
	}

	@Override
	public Boolean addComment(int userId,int articleId,String commentContent) throws IOException {
		// TODO Auto-generated method stub
		comment=new Comment();
		comment.setCommentContent(commentContent);
		comment.setUserId(userId);
		comment.setArticleId(articleId);
		comment.setState(1);
		return dao.addComment(comment);
	}

	@Override
	public Boolean deleteComment(int userId,int articleId) throws IOException {
		// TODO Auto-generated method stub
		key.setArticleId(articleId);
		key.setUserId(userId);
		return dao.deleteComment(key);
	}
	@Override
	public List<Comment> getMessageP(int userId) throws IOException {
		// TODO Auto-generated method stub
		key.setUserId(userId);
		List<Comment> commentList=dao.getMessageP(key);
		
		return commentList;
	}
	@Override
	public boolean clearP(int userId) throws IOException {
		// TODO Auto-generated method stub

	    key.setUserId(userId);
	
		return dao.clearP(key);
	}
}

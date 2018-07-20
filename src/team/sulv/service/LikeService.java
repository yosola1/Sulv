package team.sulv.service;

import java.io.IOException;
import java.util.List;

import team.sulv.Iservice.ILikeService;
import team.sulv.mybatis.dao.LikeDao;
import team.sulv.mybatis.po.Attention;
import team.sulv.mybatis.po.Like;
import team.sulv.mybatis.po.LikeKey;
import team.sulv.mybatis.po.User;

public class LikeService implements ILikeService {
	LikeDao dao=new LikeDao();
	LikeKey key=new LikeKey();
	Like like=new Like();
	@Override
	public Boolean addLike(int userId, int articleId) throws IOException {
		// TODO Auto-generated method stub
		like.setUserId(userId);
		like.setArticleId(articleId);
		like.setState(1);
		return dao.addLike(like);
	}
	@Override
	public Boolean deleteLike(int userId, int articleId) throws IOException {
		// TODO Auto-generated method stub
		key.setUserId(userId);
		key.setArticleId(articleId);
		return dao.deleteLike(key);
	}
	@Override
	public Boolean isLike(int userId, int articleId) throws IOException {
		// TODO Auto-generated method stub
		key.setUserId(userId);
		key.setArticleId(articleId);
		return dao.isLike(key);
	}
	@Override
	public List<Like> getMessageL(int userId) throws IOException {
		// TODO Auto-generated method stub
		key.setUserId(userId);
		List<Like> likeList=dao.getMessageL(key);
		
		return likeList;
	}
	@Override
	public boolean clearL(int userId) throws IOException {
		// TODO Auto-generated method stub
	  Like like=new Like();
	    like.setUserId(userId);
	
		return dao.clearL(like);
	}

}

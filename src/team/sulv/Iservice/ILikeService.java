package team.sulv.Iservice;

import java.io.IOException;
import java.util.List;

import team.sulv.mybatis.po.Like;



public interface ILikeService {
	Boolean addLike(int userId,int articleId) throws IOException;
	Boolean deleteLike(int userId,int articleId) throws IOException;
	Boolean isLike(int userId,int articleId) throws IOException;
	public List<Like> getMessageL(int userId) throws IOException;
	public boolean clearL(int userId) throws IOException ;
}

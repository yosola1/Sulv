package team.sulv.Iservice;

import java.io.IOException;
import java.util.List;

import team.sulv.mybatis.po.Collection;


public interface ICollectionService {
	public Boolean addCollection(int userId,int articleId) throws IOException;
	public Boolean isCollection(int userId,int articleId) throws IOException;
	public Boolean deleteCollection(int userId,int articleId) throws IOException;
	public List<Collection> getMessageC(int userId) throws IOException;
	public boolean clearC(int userId) throws IOException ;
}

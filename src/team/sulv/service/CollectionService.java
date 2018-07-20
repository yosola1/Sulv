package team.sulv.service;

import java.io.IOException;
import java.util.List;

import team.sulv.Iservice.ICollectionService;
import team.sulv.mybatis.dao.CollectionDao;
import team.sulv.mybatis.po.Collection;
import team.sulv.mybatis.po.CollectionKey;
import team.sulv.mybatis.po.Like;

public class CollectionService implements ICollectionService {
	CollectionKey key=new CollectionKey();
	CollectionDao dao=new CollectionDao();
	Collection collection=new Collection();

	@Override
	public Boolean addCollection(int userId, int articleId) throws IOException {
		// TODO Auto-generated method stub
		collection.setUserId(userId);
		collection.setArticleId(articleId);
		collection.setState(1);
		return dao.addCollection(collection);
	}

	@Override
	public Boolean isCollection(int userId, int articleId) throws IOException {
		// TODO Auto-generated method stub
		key.setUserId(userId);
		key.setArticleId(articleId);
		return dao.isCollection(key);
	}

	@Override
	public Boolean deleteCollection(int userId, int articleId) throws IOException {
		// TODO Auto-generated method stub
		key.setUserId(userId);
		key.setArticleId(articleId);
		return dao.deleteCollection(key);
	}
	@Override
	public List<Collection> getMessageC(int userId) throws IOException {
		// TODO Auto-generated method stub
		key.setUserId(userId);
		List<Collection> collectionList=dao.getMessageC(key);
		
		return collectionList;
	}
	@Override
	public boolean clearC(int userId) throws IOException {
		// TODO Auto-generated method stub

	    key.setUserId(userId);
	
		return dao.clearC(key);
	}

}

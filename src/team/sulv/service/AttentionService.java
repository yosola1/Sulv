package team.sulv.service;

import java.io.IOException;
import java.util.List;

import team.sulv.Iservice.IAttentionService;
import team.sulv.mybatis.dao.AttentionDao;
import team.sulv.mybatis.po.Attention;
import team.sulv.mybatis.po.AttentionKey;
import team.sulv.mybatis.po.Like;

public class AttentionService implements IAttentionService {
	AttentionDao dao=new AttentionDao();
	AttentionKey key=new AttentionKey();
	Attention attention=new Attention();

	@Override
	public Boolean addAttention(int followerId,int byFollowerId) throws IOException {
		// TODO Auto-generated method stub
		attention.setFollowerId(followerId);
		attention.setByFollowerId(byFollowerId);
		attention.setState(1);
		Boolean result=dao.addAttention(attention);
		return result;
	}

	@Override
	public Boolean isAttention(int followerId, int byFollowerId) throws IOException {
		// TODO Auto-generated method stub
		key.setFollowerId(followerId);
		key.setByFollowerId(byFollowerId);
		Boolean result=dao.isAttention(key);
		return result;
	}

	@Override
	public Boolean deleteAttention(int followerId, int byFollowerId) throws IOException {
		// TODO Auto-generated method stub
		key=new AttentionKey();
		key.setFollowerId(followerId);
		key.setByFollowerId(byFollowerId);
		Boolean result=dao.deleteAttention(key);
		return result;
	}
	@Override
	public List<Attention> getFansList(int byFollowerId) throws IOException {
		// TODO Auto-generated method stub
		List<Attention> fansList=dao.getFansList(byFollowerId);
		
		return fansList;
	}
	@Override
	public List<Attention> getAttention(int followerId) throws IOException {
		// TODO Auto-generated method stub
		List<Attention> attentionList=dao.getAttention(followerId);
		
		return attentionList;
	}
	@Override
	public boolean clearA(int followerId) throws IOException {
		// TODO Auto-generated method stub
		key=new AttentionKey();
		key.setFollowerId(followerId);
	
		return dao.clearA(key);
	}
	

}

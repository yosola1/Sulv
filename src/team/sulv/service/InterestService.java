package team.sulv.service;

import java.io.IOException;

import team.sulv.Iservice.IInterestService;
import team.sulv.mybatis.dao.InterestDao;
import team.sulv.mybatis.po.InterestKey;

public class InterestService implements IInterestService {
	InterestDao dao=new InterestDao();
	InterestKey key=new InterestKey();
	@Override
	public Boolean addInterest(int userId,int typeId) throws IOException {
		// TODO Auto-generated method stub
		key.setUserId(userId);
		key.setTypeId(typeId);
		Boolean result=dao.addInterest(key);
		return result;
	}
	public Boolean isInterest(int userId,int typeId) throws IOException {
		// TODO Auto-generated method stub
		key.setUserId(userId);
		key.setTypeId(typeId);
		
		return dao.isInterest(key);
	}
	@Override
	public Boolean cancleInterest(int userId,int typeId) throws IOException {
		// TODO Auto-generated method stub
		key.setUserId(userId);
		key.setTypeId(typeId);
		Boolean result=dao.cancleInterest(key);
		return result;
	}
}

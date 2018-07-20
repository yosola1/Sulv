package team.sulv.Iservice;

import java.io.IOException;


public interface  IInterestService {
	Boolean addInterest(int userId,int typeId) throws IOException;
	Boolean isInterest(int userId,int typeId) throws IOException;
	Boolean cancleInterest(int userId,int typeId) throws IOException;
}

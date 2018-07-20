package team.sulv.Iservice;

import java.io.IOException;
import java.util.List;

import team.sulv.mybatis.po.Attention;

public interface IAttentionService {
	Boolean addAttention(int followerId,int byFollowerId) throws IOException;
	Boolean isAttention(int followerId,int byFollowerId) throws IOException;
	Boolean deleteAttention(int followerId,int byFollowerId) throws IOException;
	public List<Attention> getFansList(int byFollowerId) throws IOException;
	public List<Attention> getAttention(int followerId) throws IOException;
	public boolean clearA(int byFollowerId) throws IOException ;
}

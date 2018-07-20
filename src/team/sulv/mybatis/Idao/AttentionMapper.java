package team.sulv.mybatis.Idao;

import java.util.List;

import team.sulv.mybatis.po.Attention;
import team.sulv.mybatis.po.AttentionKey;
import team.sulv.mybatis.po.Like;

public interface AttentionMapper {
    int deleteByPrimaryKey(AttentionKey key);

    int insert(Attention record);
    
    int attention(AttentionKey key);

    int insertSelective(Attention record);

    Attention selectByPrimaryKey(AttentionKey key);

    int updateByPrimaryKeySelective(Attention record);
    int clearA(AttentionKey key);
    int updateByPrimaryKey(Attention record);
    List<Attention> getFans(int byFollowerId);
    List<Attention> getAttention(int followerId);
}
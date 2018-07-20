package team.sulv.mybatis.Idao;
import team.sulv.mybatis.po.InterestKey;


public interface InterestMapper {
    int deleteByPrimaryKey(InterestKey key);

    int insert(InterestKey record);
    int insertSelective(InterestKey record);
    InterestKey selectByPrimaryKey(InterestKey key);
    int cancleInterest(InterestKey key);
}
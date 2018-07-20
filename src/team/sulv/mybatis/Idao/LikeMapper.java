package team.sulv.mybatis.Idao;




import java.util.List;

import team.sulv.mybatis.po.Like;
import team.sulv.mybatis.po.LikeKey;
import team.sulv.mybatis.po.User;

public interface LikeMapper {
    int deleteByPrimaryKey(LikeKey key);

    int insert(Like record);

    int insertSelective(Like record);

    Like selectByPrimaryKey(LikeKey key);
    int clearL(Like like);
    int updateByPrimaryKeySelective(Like like);
    int updateByPrimaryKey(Like record);
   List<Like>  getLike(LikeKey key);
}
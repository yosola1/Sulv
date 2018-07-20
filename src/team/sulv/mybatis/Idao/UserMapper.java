package team.sulv.mybatis.Idao;

import java.util.List;

import team.sulv.mybatis.po.Article;
import team.sulv.mybatis.po.AttentionKey;
import team.sulv.mybatis.po.User;

public interface UserMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);
    int addUser(User user);
    User checkUser(User user);
    int addFunsNum(Integer userId);
    int subAttentionNum(Integer userId);
    User selectByPrimaryKey(Integer userId);
    int updateAttentionNum(Integer userId);
    User selectUser(User user);
  
    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
    List<User> selectHotWriter(int offset,int limit);
    List<User> getUser(int userId);
}
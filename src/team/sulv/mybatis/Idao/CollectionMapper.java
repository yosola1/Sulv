package team.sulv.mybatis.Idao;

import java.util.List;



import team.sulv.mybatis.po.Collection;
import team.sulv.mybatis.po.CollectionKey;
import team.sulv.mybatis.po.Like;


public interface CollectionMapper {
    int deleteByPrimaryKey(CollectionKey key);

    int insert(Collection record);

    int insertSelective(Collection record);

    Collection selectByPrimaryKey(CollectionKey key);
    int clearC(CollectionKey key);
    int updateByPrimaryKeySelective(Collection record);

    int updateByPrimaryKey(Collection record);
    List<Collection>  getCollection(CollectionKey key);
}
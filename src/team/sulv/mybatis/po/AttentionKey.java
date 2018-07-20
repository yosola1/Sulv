package team.sulv.mybatis.po;

public class AttentionKey {
    private Integer followerId;

    private Integer byFollowerId;

    public Integer getFollowerId() {
        return followerId;
    }

    public void setFollowerId(Integer followerId) {
        this.followerId = followerId;
    }

    public Integer getByFollowerId() {
        return byFollowerId;
    }

    public void setByFollowerId(Integer byFollowerId) {
        this.byFollowerId = byFollowerId;
    }
}
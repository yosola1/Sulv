package team.sulv.mybatis.po;

public class Like extends LikeKey {
    private Integer state;
    private String userName;
    private String title;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Integer getState() {
        return state;
    }
    public void setState(Integer state) {
        this.state = state;
    }
}
package team.sulv.mybatis.po;

public class Comment extends CommentKey {
    private String commentContent;
   private String title;
	public String getTitle() {
	return title;
}

public void setTitle(String title) {
	this.title = title;
}

	private String userName;

    private Integer state;

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent == null ? null : commentContent.trim();
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }
    
    public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}
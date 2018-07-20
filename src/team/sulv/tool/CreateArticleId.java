package team.sulv.tool;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CreateArticleId {
	public int setArticleId(int userId,Date date){
		int articleId;
		String user;
		user=userId+"";
		SimpleDateFormat df = new SimpleDateFormat("HHmmss");
		String id=user+df.format(date);
		articleId=Integer.parseInt(id);
		return articleId;
	}

}

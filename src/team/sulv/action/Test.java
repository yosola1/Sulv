package team.sulv.action;

import java.io.IOException;

import team.sulv.mybatis.dao.ArticleDao;

public class Test {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		ArticleDao aa=new ArticleDao();
		aa.recommendArticleB(1, 0, 3);
	}
}

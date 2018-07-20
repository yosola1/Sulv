package team.sulv.interceptor;

import java.util.HashMap;
import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
import com.opensymphony.xwork2.interceptor.MethodFilterInterceptor;

import team.sulv.mybatis.po.User;

public class LoginVerify extends MethodFilterInterceptor {

	@Override
	protected String doIntercept(ActionInvocation arg) throws Exception {
		
		// TODO Auto-generated method stub
		Map session=arg.getInvocationContext().getSession();
		User user=(User) session.get("user");
	//	System.out.println(user);
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("user", user);
		String result="";
		ObjectMapper mapper = new ObjectMapper();
		result = mapper.writeValueAsString(map);
		
		ServletActionContext.getResponse().setContentType("text/html");
		ServletActionContext.getResponse().setCharacterEncoding("UTF-8");
		ServletActionContext.getResponse().getWriter().printf(result);
		ServletActionContext.getResponse().getWriter().flush();
		ServletActionContext.getResponse().getWriter().close();

		return null;
	}



}

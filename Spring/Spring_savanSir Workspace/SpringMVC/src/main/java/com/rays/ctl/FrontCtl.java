package com.rays.ctl;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.rays.form.LoginForm;

public class FrontCtl extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {

		HttpSession sessio = request.getSession();
		LoginForm form = new LoginForm();
		if (sessio.getAttribute("user") == null) {
			request.setAttribute("error", "your session has bean expierd");
			
			// String uri = request.getRequestURI();
		
			
			RequestDispatcher rd = request.getRequestDispatcher("/Login");
			rd.forward(request, response);
			return false;
		}

		return true;
	}

}

package com.rays.common;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.rays.config.JWTUtil;
import com.rays.dto.UserDTO;
import com.rays.service.JWTUserDetailsService;

import io.jsonwebtoken.JwtException;

/**
 * Front controller verifies if user id logged in
 * 
 * @authorHarsh Patidars
 * 
 */
@Component
public class FrontCtl extends HandlerInterceptorAdapter {

	@Autowired
	private JWTUtil jwtUtil;

	@Autowired
	private JWTUserDetailsService jwtUserDetailsService;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		System.out.println("FrontCtl......");
//		String origin = request.getHeader("Origin");

		String path = request.getServletPath();
		HttpSession session = request.getSession(false);

		if (session == null ||(UserDTO) session.getAttribute("user") == null) {
//			if (origin != null) {
//			response.setHeader("Access-Control-Allow-Origin", origin);
//			response.setHeader("Access-Control-Allow-Credentials", "true");
//			response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
//			System.out.println("CORS headers set");
//		}
			System.out.println("inter the session null.....!!!!" + path);
			response.setContentType("application/json");
			response.setStatus(HttpServletResponse.SC_FORBIDDEN);
			PrintWriter out = response.getWriter();
			out.write("OOPS! Your session has been expired");
			out.close();
			System.out.println("going to return false ");

			return false;
		}

		System.out.println("going to return true");
		return true;
	}

	// application se return hote vkt controller se.
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
//		String origin = request.getHeader("Origin");
//		response.setHeader("Access-Control-Allow-Origin", origin);
//		response.setHeader("Access-Control-Allow-Credentials", "true");
//		response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
		

		String requestUrl = request.getRequestURL().toString();
		String requestMethod = request.getMethod();
		int responseStatus = response.getStatus();
//		modelAndView.addObject("additionalAttribute", "value");
//		modelAndView.setViewName("customViewName");
//		response.addHeader("Custom-Header", "value");


//
		System.out.println("Request URL: {" + requestUrl + "}  " + "Method: {" + requestMethod + "}  "
				+ "Response Status: {" + responseStatus + "}");

	}
}

package com.rays.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.rays.service.JWTUserDetailsService;

import io.jsonwebtoken.JwtException;

@Component
public class JWTRequestFilter extends OncePerRequestFilter {

	@Autowired
	private JWTUtil jwtUtil;

	@Autowired
	private JWTUserDetailsService jwtUserDetailsService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		try {
			final String authorizationHeader = request.getHeader("Authorization");
			String origin = request.getHeader("Origin");//you doing when you not overried  addCorsMappings and configer cors.
			String methode = request.getMethod();

			System.out.println("JWT Token ======>>>>> " + authorizationHeader);

			String username = null;
			String jwtToken = null;

			if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
				jwtToken = authorizationHeader.substring(7);
				username = jwtUtil.extractUsername(jwtToken);
			}

			if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
				UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(username);
				if (jwtUtil.validateToken(jwtToken)) {
					UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
							userDetails, null, userDetails.getAuthorities());
					authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
					SecurityContextHolder.getContext().setAuthentication(authenticationToken);
				}
			}

//			response.setHeader("Access-Control-Allow-Origin", origin);
//			response.setHeader("Access-Control-Allow-Headers", "authorization, content-type");
//			response.setHeader("Access-Control-Max-Age", "3600");
//			response.setHeader("Access-Control-Allow-Credentials", "true");
//			response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
			
			filterChain.doFilter(request, response);
		} catch (JwtException | AuthenticationException e) {
			response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
			response.getWriter().write("Token is invalid... plz login again..!!");
			response.getWriter().flush();
			response.getWriter().close();
		}
	}
}

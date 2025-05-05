package com.rays.config;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpSession;

import org.springframework.security.web.session.SessionInformationExpiredEvent;
import org.springframework.security.web.session.SessionInformationExpiredStrategy;

public class MyExpiredSessionStrategy implements SessionInformationExpiredStrategy {

	@Override
	public void onExpiredSessionDetected(SessionInformationExpiredEvent event) throws IOException, ServletException {
		HttpSession session = event.getRequest().getSession();
		session.setMaxInactiveInterval(300*600);

	}

}

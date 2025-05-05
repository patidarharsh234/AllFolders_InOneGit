package com.rays.config;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.session.SessionInformation;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.session.CompositeSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.ConcurrentSessionControlAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionFixationProtectionStrategy;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JWTRequestFilter jwtRequestFilter;
	private SessionRegistry sessionRegistry;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.maximumSessions(1)

				.expiredSessionStrategy(new MyExpiredSessionStrategy())

				.maxSessionsPreventsLogin(false).sessionRegistry(sessionRegistry()).sessionRegistry(sessionRegistry);

		http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
		http.cors();
	}

	@Bean
	public SessionAuthenticationStrategy sessionAuthenticationStrategy() {
		SessionRegistry sessionRegistry = sessionRegistry();

		// Create SessionFixationProtectionStrategy to protect against session fixation
		// attacks
		SessionFixationProtectionStrategy sessionFixationProtectionStrategy = new SessionFixationProtectionStrategy();

		// Create ConcurrentSessionControlAuthenticationStrategy to control concurrent
		// sessions
		ConcurrentSessionControlAuthenticationStrategy concurrentSessionControlAuthenticationStrategy = new ConcurrentSessionControlAuthenticationStrategy(
				sessionRegistry);
		concurrentSessionControlAuthenticationStrategy.setMaximumSessions(1); // Set maximum allowed sessions per user

		// Return a composite SessionAuthenticationStrategy combining both strategies
		return new CompositeSessionAuthenticationStrategy(
				Arrays.asList(sessionFixationProtectionStrategy, concurrentSessionControlAuthenticationStrategy));
	}

	

	@Bean
	public SessionRegistry sessionRegistry() {
		return new SessionRegistryImpl();
	}

}

package com.rays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ORS10Application {

	public static void main(String[] args) {

		SpringApplication.run(ORS10Application.class, args);

	}

	@Bean
	public WebMvcConfigurer corsConfig() {
		WebMvcConfigurer w = new WebMvcConfigurer() {
		
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				System.out.println("hey i am spring boot....!!!");
				registry.addMapping("/**").allowedOrigins("http://localhost:4200");
			}
		};
		return w;
	}

}

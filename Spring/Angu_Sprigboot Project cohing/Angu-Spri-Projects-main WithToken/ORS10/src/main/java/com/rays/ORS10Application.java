package com.rays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.rays.common.FrontCtl;

@SpringBootApplication
public class ORS10Application {

	@Autowired
	FrontCtl frontCtl;

	public static void main(String[] args) {

		SpringApplication.run(ORS10Application.class, args);

	}

	@Bean
	public WebMvcConfigurer corsConfig() {
		System.out.println("webMvcConfiger corsConfig");
		WebMvcConfigurer w = new WebMvcConfigurer() {

			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://localhost:4200").allowedMethods("GET", "POST", "PUT",
						"DELETE");
				System.out.println("addCorsMappings....!!!");
			}

			@Override
			public void addInterceptors(InterceptorRegistry registry) {
				registry.addInterceptor(frontCtl).addPathPatterns("/**").excludePathPatterns("/Auth/**",
						"/User/profilePic/**");
				System.out.println("frontctl...!!!");

			}
		};
		return w;
	}

}

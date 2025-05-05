package com.rays.Test;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import com.rays.dto.UserDTO;
import com.rays.service.UserServiceInt;

@Component("testUserService") // consider as candidate for auto-detection jab hm use krte annotation based
								// configuration ka.and class path scanig
public class TestUserService {

	@Autowired
	public UserServiceInt service = null;

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("ApplicationContext.xml");

		TestUserService test = (TestUserService) context.getBean("testUserService");

		// test.testadd();
		// test.testupdate();
		// test.delete();
		// test.findByPk();
		// test.Search();
		// test.testmailSend();
		// test.authentication();
		test.findBylogin();
	}

	private void findBylogin() {
		UserDTO dto = service.findByLogin("harsh@gmail.com");
		System.out.println(dto.getId());
		System.out.println(dto.getFirstNmae());
		System.out.println(dto.getLastName());
		System.out.println(dto.getLogin());
		System.out.println(dto.getPassword());

	}

	private void authentication() {
		UserDTO dto = service.authenticate("harsh@gmail.com", "harsh@123");

		System.out.println(dto.getId());
		System.out.println(dto.getFirstNmae());
		System.out.println(dto.getLastName());
		System.out.println(dto.getLogin());
		System.out.println(dto.getPassword());

	}

	private void Search() {
		UserDTO dto = null;
		List<UserDTO> list = service.Search();
		// System.out.println(list);
		Iterator<UserDTO> it = list.iterator();

		while (it.hasNext()) {
			dto = (UserDTO) it.next();
			System.out.println(dto.getId());
			System.out.println(dto.getFirstNmae());
			System.out.println(dto.getLastName());
			System.out.println(dto.getLogin());
			System.out.println(dto.getPassword());

		}

	}

	private void findByPk() {
		UserDTO dto = service.findByPk(2);
		if (dto != null) {

			System.out.println(dto.getId());
			System.out.println(dto.getFirstNmae());
			System.out.println(dto.getLastName());
			System.out.println(dto.getLogin());
			System.out.println(dto.getPassword());

		}

	}

	private void delete() {
		UserDTO dto = new UserDTO();
		dto.setId(1);
		service.delete(dto);
		System.out.println("success");
	}

	private void testupdate() {
		UserDTO dto = new UserDTO();
		dto.setId(1);
		dto.setFirstNmae("sahil");
		dto.setLastName("patidar");
		dto.setLogin("harsh@m.com");
		dto.setPassword("harsh");

		service.update(dto);
		System.out.println("success");

	}

	private void testadd() {
		UserDTO dto = new UserDTO();
		dto.setId(3);
		dto.setFirstNmae("harsh");
		dto.setLastName("patidar");
		dto.setLogin("harsh@gmail.com");
		dto.setPassword("harsh@123");
		long pk = service.add(dto);
		System.out.println("success");

	}

	private void testmailSend() {

		service.sendEmail();

		System.out.println("Mail Send...");
	}
}

package com.rays.test;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.rays.dao.UserDAOInt;
import com.rays.dto.UserDTO;
import com.rays.service.UserServiceInt;

@Component("testUserService")
public class TestUserService {

	@Autowired
	private UserServiceInt service = null;

	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

		TestUserService test = (TestUserService) context.getBean("testUserService");

		// test.testAdd();
		 test.testDelete();
		// test.testauthenticate();
		// test.search();
		//test.findByPk();
		//test.findByLogin();
		// test.update();

	}

	private void update() {
		service.update(null);
		
	}

	private void findByLogin() {
		UserDTO dto = service.findByLogin("yash123@gmail.com");

		System.out.println(dto.getId());
		System.out.println(dto.getFirstNmae());
		System.out.println(dto.getLastName());
		System.out.println(dto.getLogin());
		System.out.println(dto.getPassword());


		
	}

	private void findByPk() {
		UserDTO dto = service.findByPk(2);

		System.out.println(dto.getId());
		System.out.println(dto.getFirstNmae());
		System.out.println(dto.getLastName());
		System.out.println(dto.getLogin());
		System.out.println(dto.getPassword());

	}

	private void search() {
		UserDTO dto = null;
		List<UserDTO> list = service.search();
		Iterator<UserDTO> it = list.iterator();

		while (it.hasNext()) {
			dto = it.next();

			System.out.println(dto.getId());
			System.out.println(dto.getFirstNmae());
			System.out.println(dto.getLastName());
			System.out.println(dto.getLogin());
			System.out.println(dto.getPassword());

			System.out.println("Done");
		}

	}

	private void testauthenticate() {
		UserDTO dto = service.authenticate("harsh123@gmail.com", "harsh@123");
		System.out.println(dto.getId());
		System.out.println(dto.getFirstNmae());
		System.out.println(dto.getLastName());
		System.out.println(dto.getLogin());
		System.out.println(dto.getPassword());

	}

	private void testDelete() {
		UserDTO dto = new UserDTO();
		dto.setId(2);
		service.delete(dto);

	}

	private void testAdd() {

		UserDTO dto = new UserDTO();
		dto.setFirstNmae("urvashi");
		dto.setLastName("bajpay");
		dto.setLogin("aditi@gmail.com");
		dto.setPassword("aditi@123");

		service.add(dto);

		System.out.println("Data inserted");

	}
}

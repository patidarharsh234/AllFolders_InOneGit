package com.rays.bean;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TeslMultipleXml {
	public static void main(String[] args) {
		
		ApplicationContext context=new ClassPathXmlApplicationContext("multiple.xml");
		 User user=(User)context.getBean("user");
		 Person person=(Person) context.getBean("Person");
		 //// Person person= context.getBean(person.class);
		 
		 System.out.println(user.getLogin());
		 System.out.println(person.getName());
		
	}

}

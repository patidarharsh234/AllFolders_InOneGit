package com.rays.child;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestChild {

	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("child.xml");

		TestBean childClass = context.getBean("derivedTestBean", DerivedTestBean.class);

		System.out.println(childClass.toString());

	}

}

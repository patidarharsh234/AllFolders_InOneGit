package com.rays.bean;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;

public class TestPerson {
	public static void main(String[] args) {
		BeanFactory factory=new XmlBeanFactory(new ClassPathResource("Person.xml"));
		Person bean=(Person)factory.getBean("Person");
		System.out.println(bean.getId());
		System.out.println(bean.getName());
		System.out.println(bean.getSalary());
}
}

package com.rays.dto;

import java.util.Date;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "ST_USER")
public class UserDTO {

	// primary key ke liye
	@Id
	@GeneratedValue(generator = "ncsPk")
	@GenericGenerator(name = "ncsPk", strategy = "native")
	@Column(name = "ID", unique = true, nullable = false)
	private long id;

	@Column(name = "FIRST_NAME", length = 50) // First_Name=esme first or name me space ke liye esa likha
	private String firstName;

	@Column(name = "LAST_NAME", length = 50) // constant ke name jese seam name likhna hoata he.like(Last_Name).
	private String lastName;

	@Column(name = "LOGIN", length = 50)
	private String login;

	@Column(name = "PASSWORD", length = 50)
	private String password;
	
	@Column(name = "DOB", length = 50)
	private Date dob;
	
	@Column(name = "ADDRESS", length = 50)
	private String address;
	

	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getLogin() {
		return login;
	}


	public void setLogin(String login) {
		this.login = login;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public Date getDob() {
		return dob;
	}


	public void setDob(Date dob) {
		this.dob = dob;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	@Override
	public String toString() {
		System.out.println(id + "  " + firstName + "  " + lastName + "  " + login + "  " + password);
		return super.toString();
	}
}

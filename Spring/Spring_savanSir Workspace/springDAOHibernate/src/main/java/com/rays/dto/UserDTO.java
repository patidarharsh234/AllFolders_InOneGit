package com.rays.dto;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "USER")
public class UserDTO {

	// primaery key ke liye
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

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstNmae() {
		return firstName;
	}

	public void setFirstNmae(String firstName) {
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

	@Override
	public String toString() {
		System.out.println(id + "  " + firstName + "  " + lastName + "  " + login + "  " + password);
		return super.toString();
	}
}

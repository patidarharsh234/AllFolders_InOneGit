package com.rays.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

//javax.persistence se lagbhag sare hi anotation use honge
 // @Entity anota. lagaya vo persistence object he like hibrnate me parsistence type me class ka obj pass krte the->hbm.xml fiel ki madad se hibernet me banate the
@Entity	
@Table(name = "SPRINGDAO")
public class UserDTO {

	// primaery key ke liye
	@Id
	@GeneratedValue(generator = "ncsPk") // value me kuch bhi le lo

	// org.hibernate se ye anota.
	@GenericGenerator(name = "ncspk", strategy = "native") // native=ye database se decied karta ki next id kya
															// hogi(same apni nextpk jesa work krta he)
	// native serieal wies se koi mtlb nhi ye max id layega or increment krva dega.

	@Column(name = "ID", unique = true, nullable = false) // unique-yani Pk hr id unique
	private int id;

	@Column(name = "FIRST_NAME", length = 50) // First_Name=esme first or name me space ke liye esa likha
												// //javax.persistence se liya
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

	public void setId(int id) {
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
		System.out.println(id+"  "+firstName+"  "+lastName+"  "+login+"  "+password);
		return super.toString();
	}
}

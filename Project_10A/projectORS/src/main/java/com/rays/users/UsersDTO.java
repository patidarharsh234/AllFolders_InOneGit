package com.rays.users;

import java.util.Date;


import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;



/**
 * 
 */
@Entity
@Table(name = "UsersDTO")
public class UsersDTO extends BaseDTO{
	
	
	@Column(name = "name",length = 50) 
	private String name;
	

	@Column(name = "login",length =50 ) 
	private String login;
	

	@Column(name = "password",length = 50) 
	private String password;


	@Column(name = "dateOfBirth") 
	private Date dateOfBirth;
	
	
	@Column(name = "mobile")
	private Long mobile;
	





	public String getname() {
		return name;
	}


	public void setname(String name) {
		this.name = name;
	}







	public String getlogin() {
		return login;
	}


	public void setlogin(String login) {
		this.login = login;
	}


	public String getpassword() {
		return password;
	}


	public void setpassword(String password) {
		this.password = password;
	}


	public Date getdateOfBirth() {
		return dateOfBirth;
	}


	public void setdateOfBirth(Date date) {
		this.dateOfBirth = date;
	}





	public Long getmobile() {
		return mobile;
	}


	public void setmobile(Long mobile) {
		this.mobile = mobile;
	}


	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "login";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return login;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "login";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("login", "asc");
		return map;

	}



	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		// TODO Auto-generated method stub
		return null;
	}

}

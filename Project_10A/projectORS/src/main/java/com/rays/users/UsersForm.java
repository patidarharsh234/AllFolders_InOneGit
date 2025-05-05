package com.rays.users;

import java.text.ParseException;



import java.text.SimpleDateFormat;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.NumberFormat;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.validateanotation.ValidAlphabetic;
import com.rays.validateanotation.ValidDate;
import com.rays.validateanotation.ValidDouble;
import com.rays.validateanotation.ValidName;
import com.rays.validateanotation.ValidNumber;
import com.rays.validateanotation.ValidPassword;
import com.rays.validateanotation.ValidPhoneNO;
import com.rays.validateanotation.ValidVersion;
import com.rays.validateanotation.validDoubleManyDecimals;


public class UsersForm extends BaseForm {

	
	

	@ValidName(minlength = 1,maxlength = 40)
	private String name;

	
	@NotBlank(message = "This field is required and cannot be empty.")
   	@Email
   	@Size(max = 30,message = "This field maxlength is 30.")
	private String login;
	

	@ValidPassword(maxlength = 20)
	private String password;
  
	
	@ValidDate
	private String dateOfBirth;
	

	@ValidPhoneNO(maxlength = 10)
	private String mobile;



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

	public String getdateOfBirth() {
		return dateOfBirth;
	}

	public void setdateOfBirth(String date) {
		this.dateOfBirth = date;
	}



	public String getmobile() {
		return mobile;
	}

	public void setmobile(String mobile) {
		this.mobile = mobile;
	}

	@Override
	public BaseDTO getDto() {

		UsersDTO dto = initDTO(new UsersDTO());

		dto.setname(name);
		
	    dto.setlogin(login);
	    
	    dto.setpassword(password);
	    
	    
		try {
			if (dateOfBirth != null && !dateOfBirth.isEmpty()) {
				dto.setdateOfBirth(new SimpleDateFormat("yyyy-MM-dd").parse(dateOfBirth));

			}
		} catch (ParseException e) {
			e.printStackTrace();
		}

		if (mobile != null && !mobile.isEmpty()) {
			dto.setmobile(Long.parseLong(mobile));
		}
		
		


		return dto;
	}

}

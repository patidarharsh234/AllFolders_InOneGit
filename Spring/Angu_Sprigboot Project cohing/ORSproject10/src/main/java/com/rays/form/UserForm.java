package com.rays.form;

import java.util.Date;

import javax.persistence.Column;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.UserDTO;

public class UserForm extends BaseForm {

	@NotEmpty(message = "please enter your firstName")
	private String firstName;

	@NotEmpty(message = "please enter your lastName")
	private String lastName;

	@NotEmpty(message = "please enter your loginId")
	private String loginId;

	@NotEmpty(message = "please enter your password")
	private String password;

	@NotNull(message = "please enter your dob")
	private Date dob;

	
	private Long imageId;

	@NotNull(message = "please enter your roleId")
	private Long roleId;


	private String roleName;

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

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
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
	public Long getImageId() {
		return imageId;
	}

	public void setImageId(Long imageId) {
		this.imageId = imageId;
	}

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public BaseDTO getDto() {
		UserDTO dto = new UserDTO();
		// UserDTO dto=initDTO(new UserDTO(); //or
		dto = initDTO(dto);
		dto.setFirstName(firstName);
		dto.setLastName(lastName);
		dto.setLoginId(loginId);
		dto.setPassword(password);
		dto.setDob(dob);
		dto.setImageId(imageId);
		dto.setRoleId(roleId);
		dto.setRoleName(roleName);
		return dto;
	}

}

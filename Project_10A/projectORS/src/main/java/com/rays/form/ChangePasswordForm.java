package com.rays.form;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.rays.common.BaseForm;
import com.rays.validateanotation.ValidPassword;

/**
 * Contains change password form elements and their declarative input validations.
 * @authorHarsh Patidar
 */

public class ChangePasswordForm extends BaseForm {

	@NotBlank(message = "This Filed Is Requerd can note be Empty")
	@Size(min = 2, max = 10)
	private String oldPassword;

	@ValidPassword(maxlength = 10)
	private String newPassword;
	
	@ValidPassword(maxlength = 10)
	private String confirmPassword;
	
	
	
	private String forgotPasswordLogin;
	
	private String loginId; 
	
	
	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getForgotPasswordLogin() {
		return forgotPasswordLogin;
	}

	public void setForgotPasswordLogin(String forgotPasswordLogin) {
		this.forgotPasswordLogin = forgotPasswordLogin;
	}



	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

}

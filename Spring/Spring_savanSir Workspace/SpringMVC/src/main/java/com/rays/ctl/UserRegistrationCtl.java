package com.rays.ctl;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rays.dto.UserDTO;
import com.rays.form.UserRegistrationForm;
import com.rays.service.UserServiceImpl;
import com.rays.util.DataUtility;

@Controller
@RequestMapping(value = "UserRegistration")
public class UserRegistrationCtl {
	
@Autowired	
UserServiceImpl service;
	
	
	@GetMapping
	public String display(@ModelAttribute("form") UserRegistrationForm form, Model model) {
		return "UserRegistration";
	}

	@PostMapping
	public String submit(@ModelAttribute("form") @Valid UserRegistrationForm form,BindingResult bindingresult, Model model) {
		
		if(bindingresult.hasErrors()) {
			return "UserRegistration";
		}
		
		UserDTO dto=new UserDTO();
		dto.setFirstName(form.getFirstName());
		dto.setLastName(form.getLastName());
		dto.setLogin(form.getLogin());
		dto.setPassword(form.getPassword());
		dto.setDob(DataUtility.stringToDate(form.getDob()));
		dto.setAddress(form.getAddress());

		service.add(dto);
		return "UserRegistration";
	}

}

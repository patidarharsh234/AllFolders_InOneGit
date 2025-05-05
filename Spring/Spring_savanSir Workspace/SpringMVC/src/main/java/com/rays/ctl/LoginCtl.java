package com.rays.ctl;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.rays.dto.UserDTO;
import com.rays.form.LoginForm;
import com.rays.service.UserServiceImpl;

@Controller
@RequestMapping(value = "Login")
public class LoginCtl {
	@Autowired
	UserServiceImpl service;

	// modelAttribute=>two way data binding-yani=("loginForm") front end se data le
	// kr LoginForm class me set kr ra.
	@GetMapping
	public String display(@ModelAttribute("loginForm") LoginForm form, HttpSession session, Model model) {

		if (form.getLogout() != null) {
			session.invalidate();
			model.addAttribute("success", "logout success fully....!!");
		}

		return "LoginView";

	}

	@PostMapping()
	public String authentication(@ModelAttribute("loginForm") @Valid LoginForm form, BindingResult bindingresult,
			HttpSession session, @RequestParam(required = false) String Operation, Model model) {

		if (bindingresult.hasErrors()) {

			System.out.println("validation");
			return "LoginView";
		}

		if (Operation.equalsIgnoreCase("signIn")) {

			System.out.println(form.getLogin() + "" + form.getPassword());

			UserDTO dto = service.authenticate(form.getLogin(), form.getPassword());

			if (dto != null) {

				session.setAttribute("user", dto);

				return "redirect:/Welcome";

			} else {

				model.addAttribute("error", "INVALID USERNAME OR PASSWORD....!!!!");
			}

		} else if (Operation.equalsIgnoreCase("signUp")) {
			return "redirect:/UserRegistration";
		}

		return "LoginView";

	}
}

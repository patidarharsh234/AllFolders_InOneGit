package com.rays.ctl;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "Welcome")
public class WelcomeCtl {

	/*
	 * @GetMapping public String display() { System.out.println("Display...");
	 * return "Welcome"; }
	 */
	
	@GetMapping
		public String getMessage(Model model) {
		model.addAttribute("msg", "welcome to SpringMvc...!!");
		System.out.println("Display...");
		return "Welcome";
	}
}

package com.rays.ctl;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.rays.dto.UserDTO;
import com.rays.form.UserForm;
import com.rays.service.UserServiceImpl;
import com.rays.util.DataUtility;

@Controller
@RequestMapping(value = "/ctl/User")
//@RequestMapping(value = "User")
public class UserCtl {

	@Autowired
	UserServiceImpl service;

//preload
	@ModelAttribute("form")
	public void preload(Model model) {
		List<UserDTO> list = service.search();

		model.addAttribute("preList", list);
	}

// User-Add/Update-veiw
	@GetMapping()
	public String userUpdateDisplay(@ModelAttribute("form") UserForm form, Model model) throws ParseException {
		UserDTO dto = null;
		if (form.getId() > 0) {
			dto = service.findByPk(form.getId());
			form.setFirstName(dto.getFirstName());
			form.setLastName(dto.getLastName());
			form.setLogin(dto.getLogin());
			form.setPassword(dto.getPassword());
			form.setDob(DataUtility.dateToString(dto.getDob()));
			form.setAddress(dto.getAddress());

			model.addAttribute("form", form);
		}

		return "UserView";

	}

//userView-Add-Update-submit
	@PostMapping()
	public String userUpdate(@ModelAttribute("form") UserForm form, @RequestParam(required = false) String operation,
			Model model) {
		UserDTO dto = null;
		if (operation.equals("Update")) {
			dto = new UserDTO();
			dto.setId(form.getId());
			dto.setFirstName(form.getFirstName());
			dto.setLastName(form.getLastName());
			dto.setLogin(form.getLogin());
			dto.setPassword(form.getPassword());
			dto.setDob(DataUtility.stringToDate(form.getDob()));
			dto.setAddress(form.getAddress());

			service.update(dto);

		} else if (operation.equals("Add")) {

			dto = new UserDTO();
			dto.setFirstName(form.getFirstName());
			dto.setLastName(form.getLastName());
			dto.setLogin(form.getLogin());
			dto.setPassword(form.getPassword());
			dto.setDob(DataUtility.stringToDate(form.getDob()));
			dto.setAddress(form.getAddress());

			service.add(dto);
		}
		return "UserView";
	}





//search-get/post
	@GetMapping("search")
	public String display(@ModelAttribute("form") UserForm form, Model m) {
	//	int pageNo = 1;
		
		int pageNo = DataUtility.getInt(form.getPageNo());
		int pageSize = form.pageSize;

		UserDTO dto = null;
		List list = service.search(dto, pageNo, pageSize);

		System.out.println("in");

		m.addAttribute("list", list);

	//	form.setPageNo(DataUtility.getStringData(pageNo));

		System.out.println("user");
		return "UserListView";

	}
	
	
	

	@PostMapping("search")
	public String search(@ModelAttribute("form") UserForm form, @RequestParam(required = false) String operation,
			Model model) {

		int pageNo = DataUtility.getInt(form.getPageNo());
		int pageSize = form.pageSize;
		System.out.println("pageNo=" + pageNo);
		System.out.println("operation=" + operation);

		UserDTO dto = null;
		if (operation.equals("search")) {
			System.out.println("postSearch-param=" + form.getFirstName());
			dto = new UserDTO();
			dto.setId(form.getUserId());
			dto.setFirstName(form.getFirstName());
			dto.setLastName(form.getLastName());
			dto.setLogin(form.getLogin());
			dto.setPassword(form.getAddress());
			dto.setDob(DataUtility.stringToDate(form.getDob()));

			// dto = (UserDTO) form.getDto(); sir ne banayi thi crack krna he

		}

		if (operation.equals("Add")) {

			return "redirect:/ctl/User";
		}

		if (operation.equals("next")) {
			System.out.println("operation=" + operation);
			pageNo++;

		}

		if (operation.equals("previous")) {
			System.out.println("operation=" + operation);
			pageNo--;

		}

		if (operation.equals("delete")) {
			pageNo = 1;
			if (form.getIds() != null && form.getIds().length > 0) {
				for (Long id : form.getIds()) {
					UserDTO delete = new UserDTO();
					System.out.println("ids=" + id);
					delete.setId(id);
					service.delete(delete);

				}
			}

		}
		System.out.println("delete==done");
		form.setPageNo(DataUtility.getStringData(pageNo));
		List list = service.search(dto, pageNo, pageSize);
		model.addAttribute("list", list);

		return "UserListView";
	}

}

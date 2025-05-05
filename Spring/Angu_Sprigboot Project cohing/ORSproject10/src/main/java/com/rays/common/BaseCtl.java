package com.rays.common;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

public class BaseCtl<F extends BaseForm, T extends BaseDTO, S extends BaseServiceInt<T>> {

	@Autowired
	public S baseService;

	@PostMapping("/add")
	public ORSResponse add(@RequestBody F form) {
		ORSResponse res = new ORSResponse(true);

		T dto = (T) form.getDto();

		long id = baseService.add(dto);
		res.addMessage("Your data has been add..!!" + id);

		return res;

	}

	@RequestMapping(value = "/search", method = { RequestMethod.GET, RequestMethod.POST })
	public ORSResponse search(@RequestBody F form, @RequestParam("pageNo") int pageNo) {
		ORSResponse res = new ORSResponse();
		T dto = (T) form.getDto();

		List<T> list = baseService.search(dto, pageNo, 5);
		if (list != null && list.size() > 0) {
			res.addData(list);
		} else {
			res.addMessage("No recourd Found....!!!!");
		}
		return res;

	}

	@PostMapping("/save")
	public ORSResponse save(@RequestBody @Valid F form, BindingResult bindingResult) {

		ORSResponse res = validate(bindingResult);

		if (!res.isSuccess()) {
			return res;
		}

		T dto = (T) form.getDto();//getDto() method form ka data DTO me Load Karvati he.
		if (dto.getId() != null && dto.getId() > 0) {
			T loginId = baseService.findByUniqueKey(dto.getUniqueKey(), dto.getUniqueValue());

			if (loginId != null && loginId.getId() != dto.getId()) {
				res.addMessage(dto.getUniqueKey() + "Already exesist....!!");

			} else {

				long id = baseService.save(dto);
				// baseService.update(dto);
				res.addInputError("  Data Is Updated...!" + id);
			}
		} else {
			// baseService.add(dto);
			long id = baseService.save(dto);
			res.addMessage("UserData is Added.....!" + id);
		}

		return res;

	}

	// @pathVariable->url se data ko get krna ho to->data ko url me data append
	// karva ke bhejte he tab
	@GetMapping("/get/{id}")
	public ORSResponse get(@PathVariable Long id) {
		ORSResponse res = new ORSResponse(true);

		T dto = baseService.findById(id);

		res.addData(dto);

		return res;

	}

	// @RequestParam-> query string me data key-Value pare me bhejna ->pageNo bhejte
	// he->us data
	// ko get karne ke liye
	@PostMapping("/deleteMany/{ids}")
	public ORSResponse deleteMany(@PathVariable String[] ids, @RequestBody F form, @RequestParam("pageNo") int pageNo) {

		ORSResponse res = new ORSResponse(true);
		for (String id : ids) {
			T dto = baseService.findById(Long.parseLong(id));
			baseService.delete(dto);
			res.addMessage("User Hase benn deleted...!");

		}
		T dto = (T) form.getDto();
		List<T> list = baseService.search(dto, pageNo, 5);
		res.addData(list);

		return res;

	}
	
	/*
	 * //with out- search method
	 * 
	 * @PostMapping("/deleteMany/{ids}") public ORSResponse deleteMany(@PathVariable
	 * String[] ids, @RequestBody F form, @RequestParam("pageNo") int pageNo) {
	 * 
	 * ORSResponse res = new ORSResponse(true); for (String id : ids) { T dto =
	 * baseService.findById(Long.parseLong(id)); baseService.delete(dto);
	 * res.addMessage("User Hase benn deleted...!");
	 * 
	 * } T dto = (T) form.getDto(); List<T> list = baseService.search(dto, pageNo,
	 * 5); res.addData(list);
	 * 
	 * return res;
	 * 
	 * }
	 */

	public ORSResponse validate(BindingResult bindingresult) {
		ORSResponse res = new ORSResponse(true);

		if (bindingresult.hasErrors()) {

			res.setSuccess(false);

			Map<String, String> error = new HashMap<String, String>();

			List<FieldError> list = bindingresult.getFieldErrors();
			list.forEach(e -> {
				error.put(e.getField(), e.getDefaultMessage());
			});

			res.addInputError(error);
		}

		return res;
	}

}

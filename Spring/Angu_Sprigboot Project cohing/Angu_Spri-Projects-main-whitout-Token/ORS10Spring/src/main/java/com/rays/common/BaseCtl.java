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


/*note->project4=populate me data_request.getperameter se_get_kr- bean.setfir._me set_kravte he
 * 
 *            and _methdoes_model me_bana_kr_unko_get bhi_karvate_and_preparedStatment_me set _karvate_he_jise data save_hoata he. 
 *  
 *             and_nikalene_ke_liye_resultSet_ka_use_karte_he.
 *  
 *              yha_setter_getter _ka use manualy krte hm.
 *  
 *   
 * project 3=Me setter_getter method automatically work karti_he hbm.xml file_ki_help_se.
 *   
 *            forntend_se_data_ata_to_setter work_karti and data Save time_getter_work_kr_data_get_and_database_me_set_kr_save.
 *   
 *    
 *    
 *    project 10=Me form ke_attribute and_froentend_ke_Property_ts_Pr_seam_hona_chahiye_and_form_ki_setter_automaticaly_work_krti
 *               _and_dataSeat_and_Dto_me_Set_Karvaya_form_class_me_dto_ka_object_save_methode_me_pass_krte_vha
 *               _dto_ki_getterMethode_work_karti_and_database_ki_setter_ka_use_kr_save_karva_deti_he.
 *               
 *               
 *               forentend_pr_ts_ki_property_ka_use_kr_html_pr_data_ko_lata_or_le_jata_he.
*/




public class BaseCtl<F extends BaseForm, T extends BaseDTO, S extends BaseServiceInt<T>> {

	@Autowired
	public S baseService;

	public ORSResponse validat(BindingResult bindingResult) {

		ORSResponse res = new ORSResponse(true);

		if (bindingResult.hasErrors()) {

			res.setSuccess(false);

			Map<String, String> errors = new HashMap<String, String>();

			List<FieldError> list = bindingResult.getFieldErrors();

			list.forEach(e -> {
				errors.put(e.getField(), e.getDefaultMessage());
			});

			res.addInputError(errors);
		}
		return res;
	}

	@PostMapping("save")
	public ORSResponse save(@RequestBody @Valid F form, BindingResult bindingResult) {

		ORSResponse res = validat(bindingResult);

		if (!(res.isSuccess())) {
			return res;
		}

		T dto = (T) form.getDto();

		if (dto.getId() != null && dto.getId() > 0) {
			baseService.update(dto);
			res.addMessage("User Updated Successfully..!!!");
		} else {
			baseService.add(dto);
			res.addMessage("User Registered Successfully..!!!");
		}
		res.addData(dto.getId());
		return res;
	}

	@GetMapping("/get/{id}")
	public ORSResponse get(@PathVariable Long id) {

		ORSResponse res = new ORSResponse(true);

		T dto = baseService.findById(id);

		res.addData(dto);

		return res;
	}

	// http://loacthost:8080/User/deleteMany+/+this.deleteRecordList +'?pageNo=' +this.form.pageNo,this.form.data,function()
	@PostMapping("/deleteMany/{ids}")
	public ORSResponse deleteMany(@PathVariable String[] ids, @RequestBody F form, @RequestParam int pageNo) {

		ORSResponse res = new ORSResponse(true);

		try {

			for (String id : ids) {
				baseService.delete(Long.parseLong(id));
			}

			T dto = (T) form.getDto();

			List list = baseService.search(dto, pageNo, 5);

			if(list.size()>0 && list !=null) {
			
			     res.addData(list);
			}else {
				res.addData(list);
				res.setSuccess(false);
				res.addMessage("Record is note found....!!!!");
				return res;
			}
			
			
			res.addMessage("Records deleted successfully..!!!");
		} catch (Exception e) {
			res.addMessage(e.getMessage());
		}

		return res;
	}

	//'http://localhost:8080/User/search' + self.pageNo ,self.form.searchParam,funtion(res){})
	@RequestMapping(value = "/search/{pageNo}", method = { RequestMethod.GET, RequestMethod.POST })
	public ORSResponse search(@RequestBody F form, @PathVariable int pageNo) {

		ORSResponse res = new ORSResponse(true);

		T dto = (T) form.getDto();

		List list = baseService.search(dto, pageNo, 5);
		
		List nextList=baseService.search(dto, pageNo+1, 5);

		if(list.size()>0 && list !=null) {
		res.addData(list);
		res.addResult("nextList", nextList);
		}else {
			res.addData(list);
			res.setSuccess(false);
			res.addMessage("Record is note found....!!!!");
		}
		return res;
	}
}

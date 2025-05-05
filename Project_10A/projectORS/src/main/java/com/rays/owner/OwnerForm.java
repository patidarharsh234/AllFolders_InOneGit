
package com.rays.owner;

import java.text.ParseException;



import java.text.SimpleDateFormat;

import javax.validation.constraints.Min;

import javax.validation.constraints.Size;


import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.validateanotation.ValidAlphabetic;

import com.rays.validateanotation.ValidDate;
import com.rays.validateanotation.ValidName;
import com.rays.validateanotation.ValidNumber;
import com.rays.validateanotation.ValidPassword;





public class OwnerForm extends BaseForm {

	
	

  @ValidName(minlength = 1,maxlength = 25)
	private String name;

	
    @ValidNumber(minlength = 1,maxlength = 10,minvalue = 1,maxvalue = 500000)
	private String insuranceAmout;

	
	
	@ValidDate
	private String dateOfBirth;
	
	@ValidNumber
	private String vehicleId;
	


	public String getvehicleId() {
		return vehicleId;
	}

	public void setvehicleId(String vehicleId) {
		this.vehicleId = vehicleId;
	}

	public String getname() {
		return name;
	}

	public void setname(String name) {
		this.name = name;
	}

	public String getdateOfBirth() {
		return dateOfBirth;
	}

	public void setdateOfBirth(String date) {
		this.dateOfBirth = date;
	}

	public String getinsuranceAmout() {
		return insuranceAmout;
	}

	public void setinsuranceAmout(String insuranceAmout) {
		this.insuranceAmout = insuranceAmout;
	}





	@Override
	public BaseDTO getDto() {

		OwnerDTO dto = initDTO(new OwnerDTO());

		dto.setname(name);

		if (insuranceAmout != null && !insuranceAmout.isEmpty()) {
			dto.setinsuranceAmout(Long.parseLong(insuranceAmout));
		}

		try {
			if (dateOfBirth != null && !dateOfBirth.isEmpty()) {
				dto.setdateOfBirth(new SimpleDateFormat("yyyy-MM-dd").parse(dateOfBirth));

			}
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		
		if (vehicleId != null && !vehicleId.isEmpty()) {
		dto.setvehicleId(Long.parseLong(vehicleId));
	}



		return dto;
	}

}


package com.rays.vehicle;


import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;



@Entity
@Table(name = "ST_VEHICLEDTO")
public class VehicleDTO extends BaseDTO {
	
	  
	@Column(name = "vehicle", length = 500) // 1
	private String vehicle;





	public String getvehicle() {
		return vehicle;
	}

	public void setvehicle(String vehicle) {
		this.vehicle = vehicle;
	}

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return vehicle;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "vehicle";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return vehicle;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "vehicle";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("vehicle", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		// TODO Auto-generated method stub
		return null;
	}

}

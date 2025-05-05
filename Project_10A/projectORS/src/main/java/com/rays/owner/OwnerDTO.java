package com.rays.owner;

import java.util.Date;

//Usecase #2: Owner

//2. Name
//3. dateOfBirth (preload)
//4. vehicle (preload)
//5.
//insuranceAmout



import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_OWNERDTO")
public class OwnerDTO extends BaseDTO{
	
	
	@Column(name = "NAME",length = 25) 
	private String name;
	
	


	@Column(name = "insuranceAmout")
	private Long insuranceAmout;




	@Column(name = "DATE_OF_BIRTH") 
	private Date dateOfBirth;
	

	
	

	@Column(name = "vehicle", length = 25) 
	private String vehicle;


	@Column(name = "vehicle_ID")
	private Long vehicleId;

	



	public Long getinsuranceAmout() {
		return insuranceAmout;
	}


	public void setinsuranceAmout(Long insuranceAmout) {
		this.insuranceAmout = insuranceAmout;
	}


	public String getname() {
		return name;
	}


	public void setname(String name) {
		this.name = name;
	}


	public Date getdateOfBirth() {
		return dateOfBirth;
	}


	public void setdateOfBirth(Date date) {
		this.dateOfBirth = date;
	}


	
	
	public String getvehicle() {
		return vehicle;
	}


	public void setvehicle(String vehicle) {
		this.vehicle = vehicle;
	}


	public Long getvehicleId() {
		return vehicleId;
	}


	public void setvehicleId(Long vehicleId) {
		this.vehicleId = vehicleId;
	}

	
	
	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "name";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return name;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "name";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("name", "asc");
		return map;

	}



	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		// TODO Auto-generated method stub
		return null;
	}

}

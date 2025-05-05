package com.rays.assignto;


import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;



@Entity
@Table(name = "ST_ASSIGNTODTO")
public class AssignToDTO extends BaseDTO {
	
	  
	@Column(name = "user", length = 500) // 1
	private String user;





	public String getuser() {
		return user;
	}

	public void setuser(String user) {
		this.user = user;
	}

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return user;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "user";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return user;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "user";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("user", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		// TODO Auto-generated method stub
		return null;
	}

}

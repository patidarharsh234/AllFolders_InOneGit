package com.rays.comman.attachment;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

import com.rays.common.BaseDTO;

@MappedSuperclass
public class AttachmentBaseDTO extends BaseDTO {

	
	@Column(name="TYPE" , length = 500)
	protected String type;
	
	@Column(name = "USER_ID" )
	protected Long userId;
	
	@Column(name = "NAME", length=500)
	protected String name;
	
	@Column(name="DESCRIPTION" ,length = 500)
	protected String description;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUniqueKey() {

		return "name";
	}


	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return name;
	}

}

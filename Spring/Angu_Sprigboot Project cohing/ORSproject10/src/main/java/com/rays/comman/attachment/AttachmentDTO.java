package com.rays.comman.attachment;

import java.io.IOException;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "ST_ATTACHMENT")
public class AttachmentDTO extends AttachmentBaseDTO {

	
	
	public AttachmentDTO() {

	}
	 public AttachmentDTO(MultipartFile file)  {
		type = file.getContentType();
		name= file.getOriginalFilename();
		
		try {
		doc= file.getBytes();
		
		}catch (Exception e) {
			e.printStackTrace();
		}
	 }

	@Lob
	@Column(name = "DOC")
	private byte[] doc;

	public byte[] getDoc() {
		return doc;
	}

	public void setDoc(byte[] doc) {
		this.doc = doc;
	}

}

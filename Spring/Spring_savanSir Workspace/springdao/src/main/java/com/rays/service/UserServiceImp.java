package com.rays.service;

import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.rays.dao.UserDaoInt;
import com.rays.dto.UserDTO;

@Service // spring ko bata re ye service class he
public class UserServiceImp implements UserServiceInt {
	
	@Autowired
	private JavaMailSender mailSender = null;

	@Autowired
	private UserDaoInt dao = null; // class ka object ese banate spring me

	// handel transaction add ,update, delete
	// Propagation.REQUIRED= eska mtlb transaction handal krna reuired he
	// =transaction hoga to usko use krega other wise new create karega.
	// @Transactional(readOnly = true)= ye read ke liye only nhi to bina bat ki
	// exception layega
	@Transactional(propagation = Propagation.REQUIRED)
	public long add(UserDTO dto) {
		long pk = dao.add(dto);
		return pk;
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public void update(UserDTO dto) {

		dao.update(dto);
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public void delete(UserDTO id) {
		
		dao.delete(id);
		
	
	}

	@Transactional(readOnly = true)
	public UserDTO findByPk(int pk) {
	UserDTO dto=	dao.findByPk(pk);
		return dto;
	}

	@Transactional(readOnly = true)
	public List<UserDTO> Search() {
	List<UserDTO> dto=dao.Search();
	
		return dto;
	}
	
	public void sendEmail() {

		MimeMessage msg = mailSender.createMimeMessage();

		try {
			MimeMessageHelper helper = new MimeMessageHelper(msg, true);
			helper.setTo("rajatdhakad5@gmail.com");
			helper.setSubject("Test Subject");
			helper.setText("Test Msg", true);

			mailSender.send(msg);
		} catch (MessagingException e) {
			e.printStackTrace();
		}

	}

	public UserDTO findByLogin(String login) {
		UserDTO dto=dao.findByLogin(login);
		return dto;
	}

	public UserDTO authenticate(String login, String Password) {
	UserDTO dto=dao.authenticate(login, Password);
		return dto;
	}
	

}

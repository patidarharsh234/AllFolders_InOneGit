package com.rays.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.dao.UserDAOInt;
import com.rays.dto.UserDTO;

@Service
@Transactional
public class UserServiceImpl implements UserServiceInt {

	@Autowired
	private UserDAOInt dao = null;

	//@Transactional(propagation = Propagation.REQUIRED)
	public void add(UserDTO dto) {
		dao.add(dto);
	}

	//@Transactional(propagation = Propagation.REQUIRED)
	public void update(UserDTO dto) {
		dao.update(dto);

	}

	//@Transactional(readOnly = true)
	public UserDTO findByPk(long pk) {
		UserDTO dto = dao.findByPk(pk);
		return dto;
	}

	public List search() {
		List list = dao.search();
		return list;
	}

	public void delete(UserDTO dto) {
		dao.delete(dto);

	}

	public UserDTO authenticate(String login, String password) {
		UserDTO dto = dao.authenticate(login, password);
		return dto;
	}

	public UserDTO findByLogin(String login) {
		UserDTO dto=dao.findByLogin(login);
		return dto;
	}

}

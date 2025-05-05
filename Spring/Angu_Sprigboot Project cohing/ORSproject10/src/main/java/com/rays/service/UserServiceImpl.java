package com.rays.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;


import com.rays.common.BaseServiceImpl;

import com.rays.dao.UserDAOInt;
import com.rays.dto.UserDTO;


@Service
@Transactional
public class UserServiceImpl extends BaseServiceImpl<UserDTO, UserDAOInt> implements UserServiceInt {
	
public 	UserDAOInt userDaoInt;


public UserDTO authenticate(String loginId, String password) {
	   UserDTO dto=  baseDao.findByUniqueKey(loginId, password);
	   
	   if(dto !=null) {
		   
		   if(password.equals(dto.getPassword())) {
			   
			   return dto;
		   }
	   }
	return dto;
} 

	

}

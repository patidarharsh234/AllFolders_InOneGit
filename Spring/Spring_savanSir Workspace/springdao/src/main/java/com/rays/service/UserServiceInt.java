package com.rays.service;

import java.util.List;

import com.rays.dto.UserDTO;

public interface UserServiceInt {
	public long add(UserDTO dto);

	public void update(UserDTO dto);

	public void delete(UserDTO id);

	public UserDTO findByPk(int pk);

	public List<UserDTO> Search();

	public UserDTO findByLogin(String login);

	public UserDTO authenticate(String login,String Password);

	

	public void sendEmail();
	

}

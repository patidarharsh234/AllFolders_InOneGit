package com.rays.dao;

import java.util.List;

import com.rays.dto.UserDTO;

public interface UserDAOInt {

	public void add(UserDTO dto);
	public void update(UserDTO dto);
	public UserDTO findByPk(long pk);
	public UserDTO findByLogin(String login);
	public List search();
	public UserDTO authenticate(String login,String password);
	public void delete(UserDTO dto);

}

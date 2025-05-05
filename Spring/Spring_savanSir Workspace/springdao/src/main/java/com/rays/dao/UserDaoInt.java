package com.rays.dao;

import java.util.List;

import com.rays.dto.UserDTO;

//interFace 100% abstraction provide karta he
public interface UserDaoInt {
	public long add(UserDTO dto);

	public void update(UserDTO dto);

	public void delete(UserDTO id);

	public UserDTO findByPk(int pk);

	public List<UserDTO> Search();

	public UserDTO findByLogin(String login);

	public UserDTO authenticate(String login,String Password);

	

}

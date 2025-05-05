package com.rays.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.rays.dto.UserDTO;

@Repository // spring container ko bata re ho ki yhi se me data ko hit karunga(call krunga)
			// or excess karunga lane lejane ka kam.
public class UserDAOJDBCImp implements UserDaoInt {

	private JdbcTemplate jdbcTemplate; // jis bhi technology ka use krna uska atribute le lo

	// Like=1.mongo use krna to mongo Template ka use /2.jdbc ke liye jdbcTemplate/
	// 3.hiberneat ke liye sessionFactory /JPA ke liye Entity ka use.

	// datasource sare dataBase ki configration holad kiye hue he=>databace ke
	// connection propeties Aplicationcontex.xml me bean me de rakhi he.
	// seterInjection=>he ye why setermethode se kr re and autowired laga diya
	// jdbcTemplate cfg ki sari values de di he ye cfg ka kam kr rha he=>datasource
	// me bean ki sari values aa rhi he
	@Autowired
	public void setDataSource(DataSource datasource) {

		this.jdbcTemplate = new JdbcTemplate(datasource);
	}

	public long add(UserDTO dto) {
		String sql = "INSERT INTO USERDAO VALUES(?,?,?,?,?)";
		int pk = jdbcTemplate.update(sql, dto.getId(), dto.getFirstNmae(), dto.getLastName(), dto.getLogin(),
				dto.getPassword());

		return pk;
	}

	public void update(UserDTO dto) {
		String sql = "UPDATE USERDAO SET FIRST_NAME=?,LAST_NAME=?,LOGIN=?,PASSWORD=? WHERE ID=?";
		int pk = jdbcTemplate.update(sql, dto.getFirstNmae(), dto.getLastName(), dto.getLogin(), dto.getPassword(),
				dto.getId());

	}

	public void delete(UserDTO id) {
		String sql = "DELETE FROM USERDAO WHERE ID=?";
		Object[] param = { id };
		jdbcTemplate.update(sql, param);
	}

	public UserDTO findByPk(int pk) {

		String sql = "SELECT ID,FIRST_NAME,LAST_NAME,LOGIN,PASSWORD FROM USERDAO WHERE ID=?";

		Object[] params = { pk };
		// queryForObject method 1 row ke liye hoti- jo authenticate me use hoti he.
		List list = jdbcTemplate.query(sql, params, new UserMapper());

		UserDTO dto = null;
		if (list.size() > 0) {
			dto = (UserDTO) list.get(0);
		}
		return dto;

	}

	public List<UserDTO> Search() {

		String Sql = "SELECT * FROM USERDAO";

		List list = jdbcTemplate.query(Sql, new UserMapper());

		return list;

	}

	public UserDTO findByLogin(String login) {
		// bina aaray ki methode dekhni he and->queryForObject--methode se replace
		// karani he

		UserDTO dto = null;
		String sql = "SELECT * FROM USERDAO WHERE login=?";
		Object[] params = { login };
		dto = jdbcTemplate.queryForObject(sql, params, new UserMapper());
		return dto;
	}

	public UserDTO authenticate(String login, String Password) {
		UserDTO dto = null;
		String sql = "SELECT * FROM USERDAO WHERE login=? and password=?";
		Object[] params = { login, Password };
		dto = jdbcTemplate.queryForObject(sql, params, new UserMapper());

		return dto;

	}

}

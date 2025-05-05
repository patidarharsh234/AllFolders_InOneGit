package com.rays.users;

import java.util.ArrayList;


import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rays.assignto.AssignToDAOInt;
import com.rays.assignto.AssignToDTO;
import com.rays.common.BaseDAOImpl;
import com.rays.common.UserContext;


@Repository
public class UsersDAOImp extends BaseDAOImpl<UsersDTO> implements UsersDAOInt {


	@Override
	public Class<UsersDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return UsersDTO.class;
	}

	@Override
	protected List<Predicate> getWhereClause(UsersDTO dto, CriteriaBuilder builder, Root<UsersDTO> qRoot) {
		List<Predicate> condition = new ArrayList<Predicate>();

		if (isNotNull(dto.getmobile())) {
			condition.add(builder.equal(qRoot.get("mobile"), dto.getmobile()));
		}

		
		if (isNotNull(dto.getdateOfBirth())) {
			condition.add(builder.equal(qRoot.get("dateOfBirth"), dto.getdateOfBirth()));
		}

		
		if (!isEmptyString(dto.getname())) {
			condition.add(builder.like(qRoot.get("name"), dto.getname() + "%"));
		}
	
		if (!isEmptyString(dto.getlogin())) {
			condition.add(builder.like(qRoot.get("login"), dto.getlogin() + "%"));
		}
		
		
		if (!isEmptyString(dto.getpassword())) {
			condition.add(builder.like(qRoot.get("password"), dto.getpassword() + "%"));
		}
		

		

		return condition;
	}


}

package com.rays.dao;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.RoleDTO;


@Repository
public class RoleDAOImpl extends BaseDAOImpl<RoleDTO> implements RoleDAOInt{

	@Override
	public Class<RoleDTO> getDtoClass() {
		
		return RoleDTO.class;
	}

	@Override
	public List<Predicate> getWereClaues(RoleDTO dto, CriteriaBuilder criteriaBuilder, Root<RoleDTO> qroot) {
		
		return null;
	}

}

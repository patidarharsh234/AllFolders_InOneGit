package com.rays.assignto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;

@Repository
public class AssignToDAOImp extends BaseDAOImpl<AssignToDTO> implements AssignToDAOInt {

	@Override
	public Class<AssignToDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return AssignToDTO.class;
	}

	@Override
	protected List<Predicate> getWhereClause(AssignToDTO dto, CriteriaBuilder builder, Root<AssignToDTO> qRoot) {
		List<Predicate> condoition=new ArrayList<Predicate>();
		return condoition;
	}

}

package com.rays.vehicle;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;

@Repository
public class VehicleDAOImp extends BaseDAOImpl<VehicleDTO> implements VehicleDAOInt {

	@Override
	public Class<VehicleDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return VehicleDTO.class;
	}


	@Override
	protected List<Predicate> getWhereClause(VehicleDTO dto, CriteriaBuilder builder, Root<VehicleDTO> qRoot) {
		List<Predicate> condition = new ArrayList<Predicate>();
		return condition;
	}


}

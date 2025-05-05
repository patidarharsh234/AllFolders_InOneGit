package com.rays.owner;

import java.util.ArrayList;


import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.common.UserContext;
import com.rays.vehicle.VehicleDAOInt;
import com.rays.vehicle.VehicleDTO;

@Repository
public class OwnerDAOImp extends BaseDAOImpl<OwnerDTO> implements OwnerDAOInt {

	@Autowired
	protected VehicleDAOInt vehicleDAOInt;

	@Override
	public Class<OwnerDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return OwnerDTO.class;
	}
	
	
	@Override
	protected void populate(OwnerDTO dto, UserContext userContext) {

		if (dto.getvehicleId() > 0 && dto.getvehicleId() != null) {

			VehicleDTO vehicleDTO = vehicleDAOInt.findByPK(dto.getvehicleId(), userContext);
			dto.setvehicle(vehicleDTO.getvehicle());

		}

	}
	

	@Override
	protected List<Predicate> getWhereClause(OwnerDTO dto, CriteriaBuilder builder, Root<OwnerDTO> qRoot) {
		List<Predicate> condition = new ArrayList<Predicate>();

		if (isNotNull(dto.getvehicleId())) {
			condition.add(builder.equal(qRoot.get("vehicleId"), dto.getvehicleId()));
		}

		if (!isEmptyString(dto.getname())) {
			condition.add(builder.like(qRoot.get("name"), dto.getname() + "%"));
		}

		if (isNotNull(dto.getinsuranceAmout())) {
			condition.add(builder.equal(qRoot.get("insuranceAmout"), dto.getinsuranceAmout()));
		}

		if (isNotNull(dto.getdateOfBirth())) {
			condition.add(builder.equal(qRoot.get("dateOfBirth"), dto.getdateOfBirth()));
		}

		return condition;
	}



}

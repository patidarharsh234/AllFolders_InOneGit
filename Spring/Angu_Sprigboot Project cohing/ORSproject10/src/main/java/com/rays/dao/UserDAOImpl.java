package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rays.comman.attachment.AttachmentDAOInt;
import com.rays.comman.attachment.AttachmentDTO;
import com.rays.common.BaseDAOImpl;
import com.rays.dto.RoleDTO;
import com.rays.dto.UserDTO;

@Repository
public class UserDAOImpl extends BaseDAOImpl<UserDTO> implements UserDAOInt {

	@Autowired
	public RoleDAOInt roldaoInt;

	@Autowired
	public AttachmentDAOInt attachmentDaoInt;

	@Override
	public Class<UserDTO> getDtoClass() {

		return UserDTO.class;
	}

	@Override
	public List<Predicate> getWereClaues(UserDTO dto, CriteriaBuilder criteriaBuilder, Root<UserDTO> qroot) {
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getFirstName())) {
			whereCondition.add(criteriaBuilder.equal(qroot.get("firstName"), dto.getFirstName() + "%"));
		}
		if (!isEmptyString(dto.getLastName())) {
			whereCondition.add(criteriaBuilder.equal(qroot.get("lastName"), dto.getLastName() + "%"));
		}
		if (!isEmptyString(dto.getLoginId())) {
			whereCondition.add(criteriaBuilder.equal(qroot.get("loginId"), dto.getLoginId() + "%"));
		}

		if (!isEmptyString(dto.getPassword())) {
			whereCondition.add(criteriaBuilder.equal(qroot.get("password"), dto.getPassword()));
		}

		return whereCondition;
	}

	@Override
	public void populate(UserDTO dto) {

		if (dto.getRoleId() != null && dto.getRoleId() > 0) {
			RoleDTO roledto = roldaoInt.findByPk(dto.getRoleId());
			dto.setRoleName(roledto.getName());

			if (dto.getId() != null && dto.getId() > 0) {
				UserDTO user = findByPk(dto.getId());
				dto.setImageId(user.getImageId());

			}

		}
	}

	// user ke sath image filed ko delete krvane ke liye user se link image.
	@Override
	public void delete(UserDTO dto) {
		AttachmentDTO attachmentDto = attachmentDaoInt.findByPk(dto.getImageId());
		attachmentDaoInt.delete(attachmentDto);
		super.delete(dto);

	}

}

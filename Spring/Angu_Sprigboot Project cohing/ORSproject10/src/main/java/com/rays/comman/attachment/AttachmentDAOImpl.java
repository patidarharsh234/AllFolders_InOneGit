package com.rays.comman.attachment;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;



@Repository
public class AttachmentDAOImpl extends BaseDAOImpl<AttachmentDTO> implements AttachmentDAOInt {

	@Override
	public Class<AttachmentDTO> getDtoClass() {
		
		return AttachmentDTO.class;
	}

	@Override
	public List<Predicate> getWereClaues(AttachmentDTO dto, CriteriaBuilder criteriaBuilder,
			Root<AttachmentDTO> qroot) {
		// TODO Auto-generated method stub
		return null;
	}

}

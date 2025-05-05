package com.rays.common;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

public class BaseServiceImpl<T extends BaseDTO, D extends BaseDAOInt<T>> implements BaseServiceInt<T> {

	@Autowired
	public D baseDao;

	@Transactional(propagation = Propagation.REQUIRED)
	public long add(T dto) {

		long d = baseDao.add(dto);
		return d;
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public void update(T dto) {
		baseDao.update(dto);

	}

	@Transactional(propagation = Propagation.REQUIRED)
	public void delete(T dto) {
		baseDao.delete(dto);

	}

	@Transactional(propagation = Propagation.REQUIRED)
	public long save(T dto) {

		Long id = dto.getId();
		if (id != null && id > 0) {
			baseDao.update(dto);

		} else {
			id = baseDao.add(dto);

		}

		return id;

	}

	@Transactional(readOnly = true)
	public T findById(long id) {
		T dto = baseDao.findByPk(id);
		return dto;
	}

	public List search(T dto, int pageNo, int PageSize) {
		return baseDao.search(dto, pageNo, PageSize);
	}

	@Override
	public T findByUniqueKey(String attribute, Object value) {
		return baseDao.findByUniqueKey(attribute, value);
	}

}

package com.rays.common;

import java.util.List;

import javax.persistence.EntityManager;

import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.hibernate.Criteria;

public abstract class BaseDAOImpl<T extends BaseDTO> implements BaseDAOInt<T> {

	@PersistenceContext
	protected EntityManager entitymanager;

	public void populate(T dto) {

	}

	public long add(T dto) {
		populate(dto);
		entitymanager.persist(dto);
		long id = dto.getId();
		return id;
	}

	public void update(T dto) {
		populate(dto);
		entitymanager.merge(dto);

	}

	public void delete(T dto) {
		entitymanager.remove(dto);

	}

	public abstract Class<T> getDtoClass();

	public T findByUniqueKey(String attribute, Object value) {
		CriteriaBuilder builder = entitymanager.getCriteriaBuilder();
		CriteriaQuery<T> cq = builder.createQuery(getDtoClass());
		Root<T> qroot = cq.from(getDtoClass()); // colums nikalne ke liye LIKE-firstName,lastName

		Predicate condition = builder.equal(qroot.get(attribute), value);// predicate=>bacha hua part .kabhi chlta kabhi
																			// nahi.
		cq.where(condition);

		TypedQuery<T> tq = entitymanager.createQuery(cq);// build query complete.

		List<T> list = tq.getResultList();// execute query->

		T dto = null;
		if (list.size() > 0) {
			dto = (T) list.get(0);
		}
		return dto;
	}

	public T findByPk(long id) {
		T dto = entitymanager.find(getDtoClass(), id);
		return dto;
	}

	public abstract List<Predicate> getWereClaues(T dto, CriteriaBuilder criteriaBuilder, Root<T> qroot);

	public List search(T dto, int pageNo, int PageSize) {
		CriteriaBuilder builder = entitymanager.getCriteriaBuilder();
		CriteriaQuery<T> cq = builder.createQuery(getDtoClass());
		Root<T> qroot = cq.from(getDtoClass());

		List<Predicate> condition = getWereClaues(dto, builder, qroot);

		cq.where(condition.toArray(new Predicate[condition.size()]));

		TypedQuery<T> tq = entitymanager.createQuery(cq);

		if (pageNo > 0) {
			tq.setFirstResult(pageNo * 5);
			tq.setMaxResults(PageSize);
		}
		List list = tq.getResultList();
		return list;

	}

	public boolean isEmptyString(String value) {

		return value == null || value.trim().length() == 0;

	}
}

package com.rays.dao;

import java.util.List;


import javax.persistence.criteria.CriteriaQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rays.dto.UserDTO;

@Repository
public class UserDAOHibImpl implements UserDAOInt {

	@Autowired
	private SessionFactory sessionFactory = null;

	public void add(UserDTO dto) {
		sessionFactory.getCurrentSession().save(dto);
	}

	public void update(UserDTO dto) {
		sessionFactory.getCurrentSession().merge(dto);

	}

	public void delete(UserDTO ids) {

		sessionFactory.getCurrentSession().delete(ids);

	}

	public UserDTO findByPk(long pk) {
		Session session = sessionFactory.getCurrentSession();
		UserDTO dto = session.get(UserDTO.class, pk);
		return dto;
	}

	public List search() {

		// String hql = "from UserDTO ";

		Session session = sessionFactory.getCurrentSession();
		CriteriaQuery<UserDTO> criteriaQuery = session.getCriteriaBuilder().createQuery(UserDTO.class);
		criteriaQuery.from(UserDTO.class);

		List<UserDTO> list = session.createQuery(criteriaQuery).getResultList();

		// or

		/*
		 * CriteriaBuilder builder =
		 * sessionFactory.getCurrentSession().getCriteriaBuilder();
		 * CriteriaQuery<UserDTO> criteria = builder.createQuery(UserDTO.class);
		 * Root<UserDTO> myObjectRoot = criteria.from(UserDTO.class);
		 * TypedQuery<UserDTO> query =
		 * sessionFactory.getCurrentSession().createQuery(criteria);
		 * 
		 * query.getResultList(); System.out.println(query);
		 */

		return list;
	}

	public UserDTO authenticate(String login, String password) {
		UserDTO dto = null;
		Session session = sessionFactory.getCurrentSession();

		Query cq = session.createQuery("from UserDTO where login=? and password=?");

		cq.setParameter(0, login);
		cq.setParameter(1, password);
		List list = cq.list();

		if (list.size() > 0) {
			dto = (UserDTO) list.get(0);
		} else {
			dto = null;

		}
		return dto;
	}

	public UserDTO findByLogin(String login) {
		UserDTO dto = null;
		Session session = sessionFactory.getCurrentSession();

		Query cq = session.createQuery("from UserDTO where login=?");

		cq.setParameter(0, login);

		List list = cq.list();

		if (list.size() > 0) {
			dto = (UserDTO) list.get(0);
		} else {
			dto = null;

		}
		return dto;
	}

}

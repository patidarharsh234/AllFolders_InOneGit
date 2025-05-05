package com.rays.dao;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaQuery;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rays.dto.UserDTO;

@Repository
public class UserDAOHibImpl {

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

		Criteria criteria = sessionFactory.getCurrentSession().createCriteria(UserDTO.class);

		List list = criteria.list();
		return list;

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

	}

	public List search(UserDTO dto, int pageNo, int pageSize) {
		Criteria criteria = sessionFactory.getCurrentSession().createCriteria(UserDTO.class);
		ArrayList<UserDTO> list = null;

		if (dto != null) {
			if (dto.getId() > 0) {
				criteria.add(Restrictions.eq("id", dto.getId()));

			}

			System.out.println(dto.getFirstName());
			if (dto.getFirstName() != null && dto.getFirstName().length() > 0) {
				criteria.add(Restrictions.like("firstName", dto.getFirstName()));

			}

			if (dto.getLastName() != null && dto.getLastName().length() > 0) {
				criteria.add(Restrictions.like("lastName", dto.getLastName()));

			}
			if (dto.getDob() != null && dto.getDob().getTime() > 0) {

				java.sql.Date d = (java.sql.Date) new Date(dto.getDob().getTime());
				criteria.add(Restrictions.eq("dob", d));

			}
			if (dto.getLogin() != null && dto.getLogin().length() > 0) {
				criteria.add(Restrictions.like("login", dto.getLogin()));

			}

		}

		if (pageSize > 0) {
			pageNo = (pageNo - 1) * pageSize;
			criteria.setFirstResult(pageNo);

			criteria.setMaxResults(pageSize);
		}

		list = (ArrayList<UserDTO>) criteria.list();
		System.out.println("list=" + list);
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

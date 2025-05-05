package com.rays.common;

import java.util.List;

public interface BaseServiceInt<T extends BaseDTO> {
	public long add(T dto);

	public void update(T dto);

	public void delete(T dto);

	public long save(T dto);

	public T findByUniqueKey(String attribute,Object value);

	public T findById(long id);

	public List search(T dto, int pageNo, int PageSize);

}

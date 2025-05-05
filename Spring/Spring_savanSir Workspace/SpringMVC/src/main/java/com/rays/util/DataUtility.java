package com.rays.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.hibernate.procedure.ParameterMisuseException;

public class DataUtility {

	static SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

	public static Date stringToDate(String value) {
		try {
			return sdf.parse(value);
		} catch (ParseException e) {
			return null;
		}
	}
	
	
	public static String dateToString(Date value)throws ParseException {
		return sdf.format(value);
	}
	
	public static String getStringData(Object val) {
		if (val != null) {
			return val.toString();
		} else {
			return "";
		}
	}

	
	public static int getInt(String val) {
		if (val!=null) {
			return Integer.parseInt(val);
		} else {
			return 0;
		}
	}
}

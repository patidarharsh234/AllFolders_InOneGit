package com.rays.common;

import java.util.HashMap;
import java.util.Map;

public class ORSResponse {
	
	public static String MESSAGE="message";
	public static String DATA="data";
	public static String INPUT_ERROR="inputerror";
	
	private boolean  success=false;
	private Map<String, Object> result= new HashMap<String, Object>();
	
	
	//constroctor
	public ORSResponse() {
		
	}
	
	public ORSResponse (boolean success) {
		this.success=success;
		
	}
	public ORSResponse(boolean success,String message) {
		this.success=success;
		addMessage(message);
	}
	
	
	
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public Map<String, Object> getResult() {
		return result;
	}
	public void setResult(Map<String, Object> result) {
		this.result = result;
	}
	
	
	public void addResult(String key,Object value) {
		result.put(key, value);
	}
	public void addMessage(Object value) {
		result.put(MESSAGE, value);
	}
	public void addInputError(Object value) {
		result.put(INPUT_ERROR,value);
	}
	public void addData(Object value) {
		result.put(DATA, value);
	}

}

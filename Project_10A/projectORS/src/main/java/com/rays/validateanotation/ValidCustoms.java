package com.rays.validateanotation;

import java.util.regex.Pattern;


import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidCustoms implements ConstraintValidator<ValidCustom, String> {
	

	
	
	 private static final String INTREAST_PATTERN = "^(100(\\.00?)?|([1-9]?[0-9])(\\.\\d{1,2})?)%$";
	    private Pattern pattern;

	@Override
	public void initialize(ValidCustom constraintAnnotation) {
		 pattern = Pattern.compile(INTREAST_PATTERN);
	}

	
	  @Override
	    public boolean isValid(String value, ConstraintValidatorContext context) {
		  if (value == null || value.isEmpty()) {
	            context.disableDefaultConstraintViolation();
	            context.buildConstraintViolationWithTemplate("This field is required and cannot be empty.")
	                   .addConstraintViolation();
	            return false;  //false hoga tabhi null filed me inpute error dega.
	        }
	        
	        
		  return pattern.matcher(value).matches();
	
	
	  }
	

}

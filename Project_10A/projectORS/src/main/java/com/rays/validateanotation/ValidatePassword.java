package com.rays.validateanotation;
import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidatePassword implements ConstraintValidator<ValidPassword, String> {
	
	
	
	 private static final String PASSWORD_PATTERN = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$";
	    private Pattern pattern;
	    // Minimum and maximum length constants
	    private   int MIN_LENGTH ;
	    private   int MAX_LENGTH ;
   	

	@Override
	public void initialize(ValidPassword constraintAnnotation) {
		 pattern = Pattern.compile(PASSWORD_PATTERN);
	     MIN_LENGTH = constraintAnnotation.minlength();
     	 MAX_LENGTH = constraintAnnotation.maxlength();
		 
	}

	
	  @Override
	    public boolean isValid(String value, ConstraintValidatorContext context) {
		  if (value == null || value.isEmpty()) {
	            context.disableDefaultConstraintViolation();
	            context.buildConstraintViolationWithTemplate("This field is required and cannot be empty.")
	                   .addConstraintViolation();
	            return false;  //false hoga tabhi null filed me inpute error dega.
	        }
	        
		  
		  
	      // Check the length of the value
	        if (value.length() < MIN_LENGTH || value.length() > MAX_LENGTH) {
	            context.disableDefaultConstraintViolation();
	            context.buildConstraintViolationWithTemplate(
	                String.format("The length of this field must be between MIN %d and MAX %d characters.", MIN_LENGTH, MAX_LENGTH))
	                   .addConstraintViolation();
	            return false;
	        }
	        
	        
		  return pattern.matcher(value).matches();
	
	
	  }
		




}

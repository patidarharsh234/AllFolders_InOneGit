package com.rays.validateanotation;


import javax.validation.ConstraintValidator;

import javax.validation.ConstraintValidatorContext;

import java.util.regex.Pattern;

public class ValidVersions implements ConstraintValidator<ValidVersion, String> {
	
		 
	 private static final String VERSION_RANGE_PATTERN = "^\\d*\\.?\\d{0,2}\\.?\\d{0,2}$";  //Description :-"This Flied This Filed content VERSION like 3.4.5 Note More then up to Three dougths."

	 	
	    private Pattern pattern;

	    
	    // Minimum and maximum length constants
	    private   int MIN_LENGTH ;
	    private   int MAX_LENGTH ;
	    
	    
	    
	    
	@Override
	public void initialize(ValidVersion constraintAnnotation) {
		 pattern = Pattern.compile(VERSION_RANGE_PATTERN);
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
		  
		  
		  
		    // Check for forbidden characters
	        if (!value.matches(VERSION_RANGE_PATTERN)  ) {
	            context.disableDefaultConstraintViolation();
	            context.buildConstraintViolationWithTemplate
	            ("This Flied This Filed content VERSION like 3.4.5 Note More then up to Three dougths and last two dougths contentd only two number.")
	                .addConstraintViolation();
	            return false;
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





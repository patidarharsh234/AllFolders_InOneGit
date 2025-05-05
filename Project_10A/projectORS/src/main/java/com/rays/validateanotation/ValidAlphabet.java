package com.rays.validateanotation;


import javax.validation.ConstraintValidator;

import javax.validation.ConstraintValidatorContext;

import java.util.regex.Pattern;

public class ValidAlphabet implements ConstraintValidator<ValidAlphabetic, String> {
	
		 
	 private static final String ALPHABETIC_RANGE_PATTERN = "^[A-Z][a-z]*( [a-zA-Z0-9!@#$%^,-.&*()]*)*$";  //Description :-"This Flied starts with a capital letter followed by lowercase letters and contains only alphabetic "
//	 private static final String ALPHABETIC_RANGE_PATTERN ="^[A-Z][a-zA-Z0-9]*$";//Description :-content Alpha Numric pattern
	 	
	    private Pattern pattern;

	    
	    // Minimum and maximum length constants
	    private   int MIN_LENGTH ;
	    private   int MAX_LENGTH ;
	    
	    
	    
	    
	@Override
	public void initialize(ValidAlphabetic constraintAnnotation) {
		 pattern = Pattern.compile(ALPHABETIC_RANGE_PATTERN);
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
	        if (!value.matches(ALPHABETIC_RANGE_PATTERN)  ) {
	            context.disableDefaultConstraintViolation();
	            context.buildConstraintViolationWithTemplate
	            ("This Flied starts with a capital letter and followed by lowercase letters .")
	     //     ("This Flied  Start with an uppercase letter and  each word starts with a capital letter followed by lowercase letters.")
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





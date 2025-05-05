package com.rays.validateanotation;

import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidNames  implements ConstraintValidator<ValidName, String> {
	
	 
  private static final String NAME_RANGE_PATTERN =	"^[A-Z][a-z]*( [A-Z][a-z]*)*$"; //Name:- This Filed Start with an uppercase letter and  include spaces followed by another word starting with an uppercase letter and followed by lowercase letters.
	    private Pattern pattern;

	    
	    // Minimum and maximum length constants
	    private  int MIN_LENGTH ;
	    private  int MAX_LENGTH ;
	    
	    
	    
	    
	@Override
	public void initialize(ValidName constraintAnnotation) {
		 pattern = Pattern.compile(NAME_RANGE_PATTERN);
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
	        if (!value.matches(NAME_RANGE_PATTERN)  ) {
	            context.disableDefaultConstraintViolation();
	            context.buildConstraintViolationWithTemplate
	           ("This Flied content alphabate and Start with an uppercase letter and  each word starts with a capital letter followed by lowercase letters.")
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


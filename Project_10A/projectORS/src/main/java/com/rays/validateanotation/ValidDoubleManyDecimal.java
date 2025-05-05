package com.rays.validateanotation;

import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidDoubleManyDecimal  implements ConstraintValidator<validDoubleManyDecimals, String> {
	

	
	
	 private static final String DOUBLE_MANY_DECIMALE_WITH_PLUSE_MINS =  "^[+-]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][+-]?\\d+)?$";
	    private Pattern pattern;
	    
	    
	    // Minimum and maximum length constants   
	    private   int MIN_LENGTH ;
	    private   int MAX_LENGTH ;
	    
	    
	    // Minimum and maximum length constants
	    private   double MIN_VALUE ;
	    private   double  MAX_VALUE ;

	@Override
	public void initialize(validDoubleManyDecimals constraintAnnotation) {
		 pattern = Pattern.compile(DOUBLE_MANY_DECIMALE_WITH_PLUSE_MINS);
    	 MIN_LENGTH = constraintAnnotation.minlength();
    	 MAX_LENGTH = constraintAnnotation.maxlength();
    	 MIN_VALUE = constraintAnnotation.minvalue();
    	 MAX_VALUE = constraintAnnotation.maxvalue();
	}

	
	  @Override
	    public boolean isValid(String value, ConstraintValidatorContext context) {
		  if (value == null || value.isEmpty()) {
	            context.disableDefaultConstraintViolation();
	            context.buildConstraintViolationWithTemplate("This field is required and cannot be empty.")
	                   .addConstraintViolation();
	            return false;  //false hoga tabhi null filed me inpute error dega.
	        }
	        
		  
	        // Check for Regex Pattern
	        if (!value.matches(DOUBLE_MANY_DECIMALE_WITH_PLUSE_MINS)  ) {
	            context.disableDefaultConstraintViolation();
	            context.buildConstraintViolationWithTemplate("This field must include digits  and contain decimal value also.")
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
        
        
        
        
        
        
//start        
        // Check if the value is a valid  Value
        double number = Double.parseDouble(value); 
        try {
            
            if (number < MIN_VALUE) {
                context.disableDefaultConstraintViolation();
                context.buildConstraintViolationWithTemplate(
                		String.format("The Minimum value of this field is %.5f  .",MIN_VALUE))
                       .addConstraintViolation();
                return false;
            } else if (number > MAX_VALUE) {
                context.disableDefaultConstraintViolation();
                context.buildConstraintViolationWithTemplate(
                		String.format("The Maximum value of this field is %.5f .", MAX_VALUE))
                       .addConstraintViolation();
                return false;
            }   
            
     
            
            
        } catch (NumberFormatException e) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(
            		String.format("The Maximum value of this field is %d .", MAX_VALUE))
                   .addConstraintViolation();
            return false;
        }
        
       
        
//End      
	        
		  return pattern.matcher(value).matches();
	
	
	  }
	

}

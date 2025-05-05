package com.rays.validateanotation;

import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidNumbers implements ConstraintValidator<ValidNumber, String> {

	
	 private static final String NUMBER_RANGE_PATTERN = "^\\d*$";
	    private Pattern pattern;
	
	   
	    // Minimum and maximum length constants
	    private   int MIN_LENGTH ;
	    private   int MAX_LENGTH ;
	    
	    
	    // Minimum and maximum length constants
	    private   double MIN_VALUE ;
	    private   double  MAX_VALUE ;
	    
    @Override
    public void initialize(ValidNumber constraintAnnotation) {
    	 pattern = Pattern.compile(NUMBER_RANGE_PATTERN);
    	 MIN_LENGTH = constraintAnnotation.minlength();
    	 MAX_LENGTH = constraintAnnotation.maxlength();
    	 MIN_VALUE = constraintAnnotation.minvalue();
    	 MAX_VALUE = constraintAnnotation.maxvalue();
    }
    
    
    

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
    	
    	//Check for Null Value
        if (value == null || value.isEmpty()) {
        	
        	
        	 context.disableDefaultConstraintViolation();
	            context.buildConstraintViolationWithTemplate("This field is required and cannot be empty.")
	                   .addConstraintViolation();
	            return false; //when Used In Null Filed
              // return true; // when Not Used In Null Filed->not Throw Message.
        }
        
        
        
        // Check for Regex Pattern
        if (!value.matches(NUMBER_RANGE_PATTERN)  ) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate("This field must include digits only  and cannot contain other numeric expressions")
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
                		String.format("The Minimum value of this field is %.0f  .",MIN_VALUE))
                       .addConstraintViolation();
                return false;
            } else if (number > MAX_VALUE) {
                context.disableDefaultConstraintViolation();
                context.buildConstraintViolationWithTemplate(
                		String.format("The Maximum value of this field is %.0f  .", MAX_VALUE))
                       .addConstraintViolation();
                return false;
            }   
            
            
            
            return true; // Mean True.
            
            
        } catch (NumberFormatException e) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(
            		String.format("The Maximum value of this field is %d .", MAX_VALUE))
                   .addConstraintViolation();
            return false;
        }
        
       
        
//End      
       
        
        
        
    //  return true; //Min value and Max value ko catch block ke sat comment out kre tab ese Uncomment krna.
        
        
     
    }
}
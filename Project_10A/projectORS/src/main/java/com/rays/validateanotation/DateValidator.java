package com.rays.validateanotation;

import javax.validation.ConstraintValidator;

import javax.validation.ConstraintValidatorContext;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateValidator implements ConstraintValidator<ValidDate, String> {

    private static final String DATE_PATTERN = "yyyy-MM-dd";

    @Override
    public void initialize(ValidDate constraintAnnotation) {
        // Initialization code if needed
    }

    @Override
    public boolean isValid(String date, ConstraintValidatorContext context) {
        if (date == null) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate("This field is required and cannot be empty.")
                   .addConstraintViolation();
            return false;
        }
        
        
        SimpleDateFormat sdf = new SimpleDateFormat(DATE_PATTERN);
        sdf.setLenient(false);
        try {
           
               
            
            Date inputDate =  sdf.parse(date);  // This will throw ParseException if the date is invalid message get from default.
          
            Date minDate = sdf.parse("1900-01-01");
            Date currentDate = new Date(); //Date cannot be in the future
            
            //after:-bad  :- futer date yani bad ki date na ho.
            //before:-phle :-phle(past) ki date dekh ra yani purani date na ho.

            if (inputDate.after(currentDate)) {
                context.disableDefaultConstraintViolation();
                context.buildConstraintViolationWithTemplate("This Filed not content futer date")
              //  context.buildConstraintViolationWithTemplate("Date is grtter then \"1900-01-01\" ")
                       .addConstraintViolation();
                return false;
            }
            
            return true;
            
        } catch (ParseException e) {
    
            return false;
        }
    }
}
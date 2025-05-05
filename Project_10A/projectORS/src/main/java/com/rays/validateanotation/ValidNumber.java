package com.rays.validateanotation;
import javax.validation.Constraint;

import javax.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = ValidNumbers.class)
@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidNumber {
    String message() default "This Filed Containing Only Numbers";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
    
    
    // Add new attributes for min/max length and value
    int minlength() default Integer.MIN_VALUE;

    int maxlength() default 50;

   
    double minvalue() default Double.NEGATIVE_INFINITY;

    double maxvalue() default Double.POSITIVE_INFINITY;
    
   
    
}
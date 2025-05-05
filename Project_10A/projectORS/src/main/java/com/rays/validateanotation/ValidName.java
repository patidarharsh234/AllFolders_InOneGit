package com.rays.validateanotation;


import javax.validation.Constraint;

import javax.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = ValidNames.class)
@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)

public @interface ValidName {
	    String message() default "This Flied  Start with an uppercase letter and  each word starts with a capital letter followed by lowercase letters.";
	    Class<?>[] groups() default {};
	    Class<? extends Payload>[] payload() default {};
	    
	    
	    // Add new attributes for min/max length and value
	    int minlength() default 1;

	    int maxlength() default 50;

}

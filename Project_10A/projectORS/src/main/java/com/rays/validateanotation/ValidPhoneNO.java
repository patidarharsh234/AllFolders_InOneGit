package com.rays.validateanotation;

import java.lang.annotation.ElementType;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Constraint(validatedBy = ValidatePhoneNO.class)
@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidPhoneNO {
	String message() default "This PhoneNo  contain only Number and number starts with 6,7,8,9 and contain 10 digits ";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};
	
	
	
    // Add new attributes for min/max length and value
    int minlength() default 1;

    int maxlength() default 50;
}

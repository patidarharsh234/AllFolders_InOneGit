package com.rays.validateanotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;
	@Constraint(validatedBy = ValidatePassword.class)
	@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER })
	@Retention(RetentionPolicy.RUNTIME)
	public @interface ValidPassword {
		String message() default "This password must contain at least one letter, digit, or special character and 8 characters ";

		Class<?>[] groups() default {};

		Class<? extends Payload>[] payload() default {};

	    // Add new attributes for min/max length 
	    int minlength() default 1;

	    int maxlength() default 50;
}

package com.rays.validateanotation;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = ValidAlphabet.class)
@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidAlphabetic {
//	String message() default "This Flied  Start with an uppercase letter and  each word starts with a capital letter followed by lowercase letters ";
	String message() default "This Flied starts with a capital letter followed by lowercase letters and contains only alphabetic ";
	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};
	
	
    int minlength() default 1;

    int maxlength() default 100;
}

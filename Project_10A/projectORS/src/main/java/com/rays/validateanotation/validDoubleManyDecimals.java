package com.rays.validateanotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Constraint(validatedBy = ValidDoubleManyDecimal.class)
@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)

public @interface validDoubleManyDecimals {

	String message() default "This Filed Content Only Number Digits With Decimal And + , - ";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};
	
	
	
    // Add new attributes for min/max length and value
    int minlength() default Integer.MIN_VALUE;

   // int maxlength() default Integer.MAX_VALUE;
    int maxlength() default 50;

   
    double minvalue() default Double.NEGATIVE_INFINITY;

    double maxvalue() default Double.POSITIVE_INFINITY;

}

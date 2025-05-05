package com.rays.validateanotation;

import javax.validation.Constraint;
import javax.validation.Payload;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Documented
@Constraint(validatedBy = ValidDoubleValidator.class)
@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidDouble {
	String message() default "This field must include digits contain only up to two decimal.  ";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};

	// Add new attributes for min/max length and value
	int minlength() default 1;

	int maxlength() default 50;

	double minvalue() default Double.NEGATIVE_INFINITY;

	double maxvalue() default Double.POSITIVE_INFINITY;

}

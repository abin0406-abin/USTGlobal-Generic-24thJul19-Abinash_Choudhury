package com.dev.exceptions;

public class ExceptionsExample {

	public static void main(String[] args) {
		/*
		 * double d = 10.0;
		 * int q = 0;
		 * System.out.println("Result: "+ d/q );
		 */
		System.out.println("Print statement Before");
		a();
		System.out.println("Print statement After");
	}
	public static void s() {
		StringBuffer sb = new StringBuffer(-1);

	}
	public static void a() {
		s();
	}

}


/*
 * OUTPUT
 * ------
 * 
 * Print statement Before Exception in thread "main"
 * java.lang.NegativeArraySizeException at
 * java.base/java.lang.AbstractStringBuilder.<init>(AbstractStringBuilder.java:
 * 83) at java.base/java.lang.StringBuffer.<init>(StringBuffer.java:131) at
 * com.dev.exceptions.ExceptionsExample.s(ExceptionsExample.java:16) at
 * com.dev.exceptions.ExceptionsExample.a(ExceptionsExample.java:20) at
 * com.dev.exceptions.ExceptionsExample.main(ExceptionsExample.java:12)
 */

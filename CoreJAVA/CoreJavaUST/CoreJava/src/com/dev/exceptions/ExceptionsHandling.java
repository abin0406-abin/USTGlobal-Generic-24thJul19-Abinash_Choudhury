package com.dev.exceptions;

public class ExceptionsHandling {
	
	public static void main(String[] args) throws CustomException /*Exception, NegativeArraySizeException*/ {
//		try {
//			s();
//		}catch(Exception e) {
//			System.out.println("Exception Occurred");
//			e.printStackTrace(); //It show the exception details
//		}finally {
//			System.out.println("This is finally block.");
//		}
//		System.out.println("Code after EXCEPTION.");
		
//		try {
//			s();
//		} catch (Exception e) {
//			System.out.println("Catch blockin main()");
//		}
		
//		s();
//		throw new CustomException();
//		System.out.println("CODE AFTER EXCEPTION");
		s();
		
		try {
			divide(10, 0);
		}catch(Exception ce) {
			throw new CustomException();
		}

	}
	
	public static void s() {
//		StringBuffer sb = new StringBuffer(-1);	
		try {
			StringBuffer sb = new StringBuffer(-1);
			throw new CustomException();
		}catch(Exception e) {
			new CustomException().printStackTrace();
		}
	}
	
	public static int divide(int i,int j) throws CustomException{
		int res = i/j;
		System.out.println(res);
		return 1;
	}

}

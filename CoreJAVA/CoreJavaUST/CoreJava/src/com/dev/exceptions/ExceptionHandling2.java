package com.dev.exceptions;

public class ExceptionHandling2 {

	public static void main(String[] args) {
		try {
			s();
			System.out.println("No Exception for s()");
			int res = divide(10, 0);
			System.out.println("No exception for divide()");
			System.out.println(res);
//			System.exit(0);
			
		} catch (NegativeArraySizeException e) {
			System.err.println("Exception caught in catch block due to NegativeArraySize.");
			System.err.println("getMessage(): " +e.getMessage());
			e.printStackTrace();
			
		} catch (ArithmeticException e) {
			System.err.println("Exception caught in arithmetic catch block.");
//			e.printStackTrace();
			System.err.println("getMessage(): " +e.getMessage());
			
		} finally {
			System.out.println("Finally Block");
		}
	}

	public static int divide(int i,int j){
		int res = i / j ;
		return res;
	}
	
	public static void s() {
		StringBuffer sb = new StringBuffer(1);
	}
	
}

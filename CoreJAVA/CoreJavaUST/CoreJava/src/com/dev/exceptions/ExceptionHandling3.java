package com.dev.exceptions;

public class ExceptionHandling3 extends CustomException {

	public static void main(String[] args) throws CustomException {
		s();
		System.out.println("No Exception in s()");
	}
	public static void s() throws CustomException {
		int i = -1;
		if (i < 0) {
			System.err.println("Exception found in s()");
			System.err.println("getMEssage(): " +new CustomException().getMessage());
			System.out.println("getLocalizedMessage(): "+ new CustomException().getLocalizedMessage());
			throw new CustomException();
		}
		StringBuffer sb = new StringBuffer(i);
	}
	
	

}

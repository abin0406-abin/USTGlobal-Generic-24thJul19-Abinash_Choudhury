package com.dev.exceptions;

public class CustomException extends Exception{
	
	public CustomException() {
		System.out.println("Custom Exception");
	}
	public CustomException(int i) {
		System.out.println("Integer Custom Exception");
	}
	public CustomException(String str ) {
		System.out.println("String Custom Exception");
	}
	@Override
	public String getLocalizedMessage() {
		return "Localized Exception Message";
	}
	
}

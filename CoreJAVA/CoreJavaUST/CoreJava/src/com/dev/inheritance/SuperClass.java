package com.dev.inheritance;

public class SuperClass {
	public SuperClass(int i ) {
		System.out.println("This constructor is with int arguement (USER DEFINED CONSTRUCTOR)");
	}
	
	public SuperClass(String s) {
		System.out.println("This constructor is with string arguement");
	}
	
	public SuperClass() {
		System.out.println("This is no-arguement constructor.");
	}
	
	public SuperClass(String s,int i) {
		System.out.println("This is String and int constructor.");
	}
	
	public SuperClass(int i,String s) {
		System.out.println("This is int and String constructor.");
	}
	public static void main(String[] args) {

	}

}

package com.dev.constructor;

public class ConstructorsExample {
	public ConstructorsExample(int i ) {
		System.out.println("This constructor is with int arguement (USER DEFINED CONSTRUCTOR)");
		System.out.println("                                                                 ");
	}
	
	public ConstructorsExample(String s) {
		System.out.println("This constructor is with string arguement");
		System.out.println("                                                                 ");
	}
	
	public ConstructorsExample() {
		System.out.println("This is no-arguement constructor.");
	}
	
	public static void main(String[] args) {
		ConstructorsExample ce = new ConstructorsExample();//NO argument Constructor
		
		ConstructorsExample ce1 = new ConstructorsExample(1);
		System.out.println("object Address "+ce1);
	}
}

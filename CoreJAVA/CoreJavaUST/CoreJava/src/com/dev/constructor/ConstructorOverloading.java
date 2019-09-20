package com.dev.constructor;

public class ConstructorOverloading {

	public ConstructorOverloading(int i ) {
		System.out.println("This constructor is with int arguement (USER DEFINED CONSTRUCTOR)");
		System.out.println("                                                                 ");
	}
	
	public ConstructorOverloading(String s) {
		System.out.println("This constructor is with string arguement");
		System.out.println("                                                                 ");
	}
	
	public ConstructorOverloading() {
		System.out.println("This is no-arguement constructor.");
		System.out.println("                                                                 ");
	}
	
	public ConstructorOverloading(String s,int i) {
		System.out.println("This is String and int constructor.");
		System.out.println("                                                                 ");
	}
	
	public ConstructorOverloading(int i,String s) {
		System.out.println("This is int and String constructor.");
		System.out.println("                                                                 ");
	}
	
	public static void main(String[] args) {
		ConstructorOverloading ce = new ConstructorOverloading();//NO argument Constructor
		
		ConstructorOverloading ce1 = new ConstructorOverloading(1);//Constructor with integer
		
		ConstructorOverloading ce2 = new ConstructorOverloading("Abin");//Constructor with string
		
		ConstructorOverloading ce3 = new ConstructorOverloading("Abin",1);//Constructor with different 
																	//		parameter and different order
		
		ConstructorOverloading ce4 = new ConstructorOverloading(1,"Abin");//Constructor with different 
																	//		parameter and different order
	}

}

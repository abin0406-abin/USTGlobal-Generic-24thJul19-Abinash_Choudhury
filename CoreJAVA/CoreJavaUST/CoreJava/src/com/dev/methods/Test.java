package com.dev.methods;

//public class Test extends Demo  { //final class Demo WRONG
public final class Test extends Demo  { //public class Demo 
	
	//Final class cannot be a super class but final class can be a subclass.
	
	/*
	 * static void print() { System.out.println("FINAL METHOD OF DEMO CLASS"); }
	 * 
	 *              ------ Final Methods cannot be  overridden ------
	 */
	
	public static void main(String[] args) {
		Demo.print(); // But we can use the functionalities of the final keyword  
	}
}

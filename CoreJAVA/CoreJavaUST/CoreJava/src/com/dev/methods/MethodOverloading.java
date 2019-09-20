package com.dev.methods;

public class MethodOverloading {
	static MethodOverloading mo = new MethodOverloading(); 
	
	public void print() {
		System.out.println("This is print method with no-argument.");
	}
	private int print(int i) {
		System.out.println("This is print method with integer argument.");
		return 1;
	}
	
	final String print(String str) {
		System.out.println("This is print method of String argument.");
		return "A";
	}
	
	public static void main(String[] args) {
		mo.print(59);
		mo.print("A");
		mo.print();
	}
}

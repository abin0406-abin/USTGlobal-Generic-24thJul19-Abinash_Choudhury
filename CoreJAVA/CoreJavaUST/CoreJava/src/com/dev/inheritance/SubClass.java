package com.dev.inheritance;

import java.util.*;
public class SubClass extends SuperClass {
	public SubClass(){
//		super("A");
//		System.out.println("                          ");
	}
	
	public SubClass(int i) {
		super(1);
		System.out.println("Constructor with integer in subclass");
		System.out.println("                          ");
	}
	
	public SubClass(String s) {
		super("A");
		System.out.println("Constructor with String  in subclass");
		System.out.println("                          ");

	}
	public static void main(String[] args) {
		SubClass sub = new SubClass();
		SubClass sub1 = new SubClass(21);
		SubClass sub2 = new SubClass("Abinash");

	}

}

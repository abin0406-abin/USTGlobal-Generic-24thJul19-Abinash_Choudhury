package com.dev.methods;

import com.dev.constructor.Dog;

public class Demo{
//	Dog d = new Dog();
//	com.dev.constructor.Dog d1 = new Dog();
	static final int INT = 10;// final variables should declared in BLOCK LETTER
	public static void main(String[] args) {
		System.out.println(INT);
		
//		INT = 12; // 'I' cannot be reinitialized as 'I' is initialized with final key word
	}
	
	final static void print() {
		System.out.println("DEMO FINAL METHOD");
	}
}
package com.dev.abstraction;

@FunctionalInterface
public interface Abs {
//	void display() {}//SHOWING ERROR
	
	void display();
//	void show();
	
	static void print() {
		System.out.println("Abin");
	}
	static void print1() {
		System.out.println("Abinash");
	}
}

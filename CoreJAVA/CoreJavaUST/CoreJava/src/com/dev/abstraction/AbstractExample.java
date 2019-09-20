package com.dev.abstraction;

public abstract class AbstractExample {
	public AbstractExample() {
		System.out.println("Constructor of AbstractExample class");
	}
	abstract void print();
	abstract void display();// Here nobody is present as "Abstract method cannot have body or definition."
	
	public void show() {// Concrete method
		System.out.println("Concrete Method of abstract class.");
	}
}

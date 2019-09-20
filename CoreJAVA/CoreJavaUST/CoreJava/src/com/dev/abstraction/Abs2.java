package com.dev.abstraction;

public interface Abs2 extends Cloneable{
	void display1();

	int i = 2;

	static void print() {
		System.out.println("Abinash Choudhury");
	}
	public static void main(String[] args) {
		System.out.println(i);
		print();
	}
}

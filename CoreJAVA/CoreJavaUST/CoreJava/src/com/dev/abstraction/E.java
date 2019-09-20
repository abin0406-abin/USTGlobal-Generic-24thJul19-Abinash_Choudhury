package com.dev.abstraction;

public class E implements Abs,Abs2{

	public static void main(String[] args) {
		Abs.print();
		E e = new E();
		e.display();
	}

	@Override
	public void display() {
		System.out.println("Display method of interface.");
	}

	@Override
	public void display1() {
		// TODO Auto-generated method stub
		
	}

}

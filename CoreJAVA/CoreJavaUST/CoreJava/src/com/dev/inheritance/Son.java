package com.dev.inheritance;

public class Son extends Father {
	static Son s = new Son();

	@Override
	public void printName() {
		String name = "Abinash";
		System.out.println(name+" "+super.name+" "+s.lastName);//Using super keyword we are accessing the variable
															   //present inside immediate super class
		super.printName();
	}
	
	public static void main(String[] args) {
		s.printName();
	}

}

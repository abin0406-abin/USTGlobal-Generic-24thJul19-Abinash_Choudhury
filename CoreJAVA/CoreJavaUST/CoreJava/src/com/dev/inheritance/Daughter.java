package com.dev.inheritance;

public class Daughter extends Father {
	static GrandFather d = new Daughter();
//	static Daughter d2 = (Daughter) new GrandFather(); //ClassCastexception
	static GrandFather d1 = new Daughter();
	static Daughter d2 = (Daughter) d1;
	
	@Override
	public void printName() {
		String name = "Abhyarthana";
		System.out.println(name+" "+super.name+" "+d.lastName);
		super.printName();
	}
	
	public static void main(String[] args) {
//		d2.printName();
		d1.printName();
	}

}

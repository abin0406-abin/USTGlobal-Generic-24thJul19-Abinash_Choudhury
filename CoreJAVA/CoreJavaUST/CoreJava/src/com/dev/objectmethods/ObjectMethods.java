package com.dev.objectmethods;

public class ObjectMethods extends Object{

	public static void main(String[] args) {
		Dog d1 = new Dog();
		Dog d2 = new Dog();
		
		System.out.println(d1.getClass());// Here we got the fully qualified name of the class
		System.out.println(d2.getClass());
		
		boolean a = d1.equals(d2);//Compares the objects
		System.out.println(a);
	}

}

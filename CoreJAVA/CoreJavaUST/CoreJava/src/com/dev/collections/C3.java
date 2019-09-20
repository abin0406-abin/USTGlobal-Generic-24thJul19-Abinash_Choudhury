package com.dev.collections;

import java.util.TreeSet;

import com.dev.encapsulation.Dog;

public class C3 {

	public static void main(String[] args) {
		TreeSet<Dog> ts = new TreeSet<Dog>();
		
		Dog d = new Dog();
		d.setAge(10);
		d.setBreed("German Sheferd");
		d.setColor("Black and Brown");
		d.setName("Gabbar");
		
		Dog d1 = new Dog();
		d1.setAge(5);
		d1.setBreed("Dalmation");
		d1.setColor("Black and White");
		d1.setName("Ronnie");
		
		Dog d2 = new Dog();
		d2.setAge(3);
		d2.setBreed("Dalmation");
		d2.setColor("Black and White");
		d2.setName("Hunter");
		
		ts.add(d);
		ts.add(d1);
		ts.add(d2);
		
		System.out.println(ts);
	}

}

package com.dev.collections;

import java.util.HashSet;

import com.dev.encapsulation.Dog;

public class C1 {
	public static void main(String[] args) {
		HashSet<Dog> hs = new HashSet<Dog>();
		
		Dog d = new Dog();
		d.setAge(3);
		d.setBreed("German Sheferd");
		d.setColor("Black and Brown");
		d.setName("Gabbar");
		
		Dog d1 = new Dog();
		d1.setAge(2);
		d1.setBreed("Dalmation");
		d1.setColor("Black and White");
		d1.setName("Ronnie");
		
		Dog d2 = new Dog();
		d2.setAge(1);
		d2.setBreed("Dalmation");
		d2.setColor("Black and White");
		d2.setName("Hunter");
		
		boolean b = hs.add(d);
		boolean b1 = hs.add(d1);
		boolean b3 = hs.add(d2);
		System.out.println("Output of add(): "+b+" "+b1+" "+b3);
		for (Dog dog : hs) {
			System.out.println(dog);
		}
		
		
//		System.out.println(hs);
//		System.out.println();
//		
//		d.setAge(4);
//		d1.setAge(3);
//		d2.setAge(2);
//		
//		System.out.println("Output of add(): "+b+" "+b1+" "+b3);
//		System.out.println("After setting the value again: "+hs);
//		System.out.println();
//
//		System.out.println("Size of HashSet hs before remove(): "+hs.size());
//		System.out.println();
//
//		boolean b2 = hs.remove(d);
//		System.out.println("Output of remove(): "+b2);
//		System.out.println(hs);
//		
//		System.out.println();
//		
//		System.out.println("Output of contains(d): "+hs.contains(d));
//		System.out.println("Output of contains(d1): "+hs.contains(d1));
//		System.out.println();	
//		
//		System.out.println("Size of HashSet hs after remove(): "+hs.size());
//		System.out.println();
//
//		hs.clear();
//		System.out.println("Size of HashSet hs after clear(): "+hs.size());

	}

}

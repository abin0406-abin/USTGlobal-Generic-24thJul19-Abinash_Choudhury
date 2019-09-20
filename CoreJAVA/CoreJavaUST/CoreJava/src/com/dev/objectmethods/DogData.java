package com.dev.objectmethods;

public class DogData {

	public static void main(String[] args) {
		Dog d1 = new Dog();
		Dog d2 = new Dog();
		Dog d3 = new Dog();
		Dog d4 = new Dog();
		
		d1.setAge(1);
		d1.setBreed("Dober Man");
		d1.setColor("Black");
		d1.setName("Shiro");
		
		d2.setAge(2);
		d2.setBreed("German Shepherd");
		d2.setColor("Brown");
		d2.setName("Gabbar");
		
		d3.setAge(3);
		d3.setBreed("German Shepherd");
		d3.setColor("Black and Brown");
		d3.setName("Abby");
		
		d4.setAge(3);
		d4.setBreed("German Shepherd");
		d4.setColor("Black and Brown");
		d4.setName("Abby");
		
		Dog []dogs = {d1,d2,d3,d4};
		for(int i = 0;i<dogs.length;i++) {
//			System.out.println("Age: "+dogs[i].getAge());      //As the toString() overridden in Dog.java
//			System.out.println("Breed: "+dogs[i].getBreed());  //As the toString() overridden in Dog.java
//			System.out.println("Name: "+dogs[i].getName());    //As the toString() overridden in Dog.java
//			System.out.println("Color: "+dogs[i].getColor());  //As the toString() overridden in Dog.java
			System.out.println(dogs[i]);
			System.out.println(" ");
		}
		
		System.out.println(d3.equals(d4));
		System.out.println(d3.hashCode());
		System.out.println(d3.hashCode());
			
	}

}

package com.dev.encapsulation;

public class PetData {

	public static void main(String[] args) {
		Pets p = new Pets();
		Pets p1 = new Pets();
		Pets p2 = new Pets();
		Pets p3 = new Pets();
		Pets p4 = new Pets();
		Pets p5 = new Pets();
		
		p.setPetType("Dog");
		p.setName("Gabbar");
		p.setAge(4);
		p.setColor("Brown");
		
		p1.setPetType("Fish");
		p1.setName("FlowerOne");
		p1.setAge(1);
		p1.setColor("Orange");
		
		p2.setPetType("Rabbit");
		p2.setName("Nikee");
		p2.setAge(3);
		p2.setColor("White");
		
		p3.setPetType("Parrot");
		p3.setName("Mitu");
		p3.setAge(1);
		p3.setColor("Green");
		
		p4.setPetType("DOG");
		p4.setName("Abby");
		p4.setAge(3);
		p4.setColor("Black and Brown");
		
		p5.setPetType("Parrot");
		p5.setName("Ryan");
		p5.setAge(1);
		p5.setColor("Green");
		
		
		Pets []pets = {p, p1, p2, p3, p4, p5};
		for (int i = 0; i < pets.length; i++) {
			System.out.println("Pet Type: "+pets[i].getPetType());
			System.out.println("Name: "+pets[i].getName());
			System.out.println("Age: "+pets[i].getAge());
			System.out.println("Color: "+pets[i].getColor());
			System.out.println("*********************************");
			System.out.println(" ");
		}
	}

}

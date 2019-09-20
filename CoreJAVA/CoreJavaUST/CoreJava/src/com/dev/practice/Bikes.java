package com.dev.practice;

public class Bikes {
	public static void main(String[] args) {
		BikeCRUD bc = new BikeCRUD();
		
		Bike b = new Bike();
		b.setName("350X");
		b.setBrand("Royal Enfield");
		b.setCost(190000);
		
		Bike b1 = new Bike();
		b1.setName("Activa 125");
		b1.setBrand("Honda");
		b1.setCost(76000);
		
		Bike b2 = new Bike();
		b2.setName("FZs");
		b2.setBrand("Yamaha");
		b2.setCost(100000);
		
		boolean a = bc.addBike("1", b);
		boolean a1 = bc.addBike("2", b1);
		boolean a2 = bc.addBike("3",b2);
		System.out.println(a+" "+a1+" "+a2);
		bc.getBike();
		
		boolean r = bc.removeBike("3", b2);
		System.out.println(r);
		bc.getBike();
		
		b1.setBrand("Bajaj");
		bc.updateBike("2", b1);
		bc.getBike();
		
	}
}

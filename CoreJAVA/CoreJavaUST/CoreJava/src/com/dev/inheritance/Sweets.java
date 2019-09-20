package com.dev.inheritance;

public class Sweets extends Food{
	static Sweets s = new Sweets(); 
	
	@Override
	public void eatFood() {
		String eat = "This is Sweets"; 
		System.out.println(super.eat+" "+eat);
	}
	
	public static void main(String[] args) {
		s.eatFood();
	}

}

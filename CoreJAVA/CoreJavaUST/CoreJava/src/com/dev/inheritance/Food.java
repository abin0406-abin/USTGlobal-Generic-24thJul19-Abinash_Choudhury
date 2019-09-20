package com.dev.inheritance;

public class Food {
	static Food f = new Food();
	
	String eat = "This is Food";

	public static void main(String[] args) {
		
		f.eatFood();
	}
	public void eatFood() {
		System.out.println(eat);
	}

}

package com.dev.inheritance;

public class Snacks extends Sweets{
	static Snacks sn = new Snacks();
	
	@Override
	public void eatFood() {
		String eat = "This is Snacks"; 
		System.out.println(super.eat+" "+eat);
	}
	
	public static void main(String[] args) {
		sn.eatFood();
	}

}

package com.dev.polymorphism;
// Runtime Polymorphism

public class Payment {
	static Payment p = new Payment();
	
	String payMethod = "Cash";
	public static void main(String[] args) {
		p.pay();
		p.pay("CASH");
	}
	
	public void pay() {
		System.out.println("Payment done using "+payMethod);
	}
	
	public void pay(String s) {
		System.out.println(s+" PAYMENT DONE. ");

	}
	public void add() {}

}

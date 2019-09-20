package com.dev.polymorphism;

public class CreditCard extends Payment{
	static CreditCard cc = new CreditCard();

	public static void main(String[] args) {
		cc.pay();
		cc.pay("CREDIT_CARD");
	}
	
	//Compile time polymorphism works as we are using method overloading
	//Runtime Polymorphism works as we are using method overriding
	@Override 
	public void pay() {
		String payMethod = "Credit Card";
		System.out.println("Payment done using "+payMethod);
	}
	
	@Override
	public void pay(String cc) {
		System.out.println(cc+" PAYMENT DONE. ");

	}
}

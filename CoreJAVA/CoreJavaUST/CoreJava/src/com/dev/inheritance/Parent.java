package com.dev.inheritance;

public class Parent {

	static Parent p = new Parent();
	static String edu = "B.Sc"; 
	public static void main(String[] args) {
		p.education();
		p.b();
	}
	
	public void education() {
		System.out.println("Parent Education --> "+edu);
	}
	
	public static void a() {
		
	}
	
	private void b() {
		System.out.println("b method/");
	}
	
	final void c() {
		
	}

}

package com.dev.inheritance;

public class Child extends Parent {
	static Child c = new Child();
	
	@Override
	public void education() {
		super.education();
		String e = "B.Tech";
		System.out.println("Child Education --> "+e);
	}
/*	
 * ----> It is showing error as argument is different in parent class
	@Override
	public void education(int i) {
		
	}
*/	
 

/*	
 *------> It is showing error as this method in parent is a STATIC method
 * @Override
	public void a() {
		
	}
*/
	
/*
 * ----> It is showing error as the method in the parent class is PRIVATE.
 * 
	@Override
	public void b() {
		
	}
*/
	
/*
 * * ----> It is showing error as the method in the parent class is FINAL.
 * 
	@Override
	public void c() {
		
	}
 * */
	
	public static void main(String[] args) {
		c.education();
	}

}

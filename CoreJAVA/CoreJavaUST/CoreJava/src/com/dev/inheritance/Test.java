package com.dev.inheritance;

public class Test extends SubClass {
	//Constructor OVERLOADING
	//=======================
	
	//1st-Constructor:-
	//-----------------
	public Test(int i) {
		super(1);//Here we have to pass the argument in super() to search the corresponding subclass.
	}
	
	//2nd-Constructor:-
	//-----------------
	public Test() {
		//Here super class is getting invoked explicitly
		//It is only possible if constructor is no argument or defaulte
	}
	public static void main(String[] args) {
		Test t = new Test(1);
		Test t1 = new Test();
	}

}

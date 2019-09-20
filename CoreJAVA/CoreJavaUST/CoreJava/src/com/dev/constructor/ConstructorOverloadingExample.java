package com.dev.constructor;

public class ConstructorOverloadingExample {
	public ConstructorOverloadingExample() {
		System.out.println("This is no-arguement constructor.");
		
	}
	
	public ConstructorOverloadingExample(int i) {
		System.out.println("This is integer constructor.");
	}
	
	public ConstructorOverloadingExample(double d) {
		System.out.println("This is double constructor.");
	}
	
	public ConstructorOverloadingExample(char c,String s) {
		System.out.println("This is character and string constructor.");
	}

	
	public static void main(String[] args) {
		ConstructorOverloadingExample co = new ConstructorOverloadingExample();
		System.out.println("co= "+co);
		System.out.println("                                                                 ");
		ConstructorOverloadingExample co1 = new ConstructorOverloadingExample(1);
		System.out.println("co1= "+co1);
		System.out.println("                                                                 ");
		ConstructorOverloadingExample co2 = new ConstructorOverloadingExample(6.6665);
		System.out.println("co2= "+co2);
		System.out.println("                                                                 ");
		ConstructorOverloadingExample co3 = new ConstructorOverloadingExample('A',"for Abin");
		System.out.println("co3= "+co3);
		System.out.println("                                                                 ");
	}

}

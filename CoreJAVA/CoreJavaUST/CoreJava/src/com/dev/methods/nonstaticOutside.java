package com.dev.methods;

public class nonstaticOutside {

	public static void main(String[] args) {
		areaNonstatic ns = new areaNonstatic();
		
		int rect = ns.areaRect(8,5);
		System.out.println("Area of the rectangle= "+rect);

	}

}

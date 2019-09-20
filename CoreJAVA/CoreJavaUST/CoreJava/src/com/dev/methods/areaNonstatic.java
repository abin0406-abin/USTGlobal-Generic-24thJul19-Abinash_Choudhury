package com.dev.methods;

public class areaNonstatic {

	public static void main(String[] args) {
		areaNonstatic ns = new areaNonstatic();
		
		int rect = ns.areaRect(2,4);
		System.out.println("Area of the rectangle= "+rect);//Calling of nonstatic method inside a static method
	}
	public int areaRect(int len, int wid) {
		int area = len*wid  ;
		return area;
	}
}

package com.dev.methods;

public class LocalGlobal {

	static int j = 0;

	static areaNonstatic ns = new areaNonstatic();

	public static void main(String[] args) {

		j = calcArea(6);
		System.out.println("Areaof the Square= "+j+"  --->calcArea() called");
		int rect = ns.areaRect(2,4);
		System.out.println("Area of the rectangle= "+rect+"  --->areaRect() called ");
	}

	public static int calcArea(int side) {
		System.out.println("Entering to calcArea().....");
		System.out.println("...........................");
		int j = side*side  ;
		int n = ns.areaRect(5,8);
		System.out.println("Area of a rectangle (called inside another method)= "+n);
		System.out.println("Getting out of the calcArea().....");
		System.out.println("..................................");
		return j;
	}

	public int areaRect(int len, int wid) {
		int area = len*wid  ;
		return area;
	}
}


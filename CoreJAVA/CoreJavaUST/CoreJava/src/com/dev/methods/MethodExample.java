package com.dev.methods;
public class MethodExample {

	public static void main(String[] args) {
		int area = calcArea(6);
		System.out.println("Area of square is "+area);
		
		double area1 = circleArea(6);
		System.out.println("Area of circle is "+area1);
		
		double area2 = triangleArea(4,2);
		System.out.println("Area of Triangle is "+area2);
		
		double avg = average(4,2,6);
		System.out.println("Average of 3 integer= "+avg);
	}
	
	public static int calcArea(int side) {
		int area = side*side; 
		return area;
	}
	public static double circleArea(int radius) {
		double area1 = 3.14*radius*radius; 
		return area1 ;
	}
	public static double triangleArea(int height, int base) {
		double area2 = 0.5*height*base; 
		return area2 ;
	}
	public static double average(int a, int b, int c){
		double average = (a+b+c)/3;
		return average;
	}
}

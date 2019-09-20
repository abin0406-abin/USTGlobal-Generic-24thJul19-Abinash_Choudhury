public class MethodExample {
	public static int calcArea(int side) {
		int area = side*side;
		return area;
	}
	public static double areaCircle(double radius){
		double area1 = 3.14*radius*radius;
		return area1;
	}
	public static double areaTriangle(int height, int base){
		double area2 = 0.5*height*base;
		return area2;
	}
	public static double average(int a, int b, int c){
		double average = (a+b+c)/3;
		return average;
	}
	public static void main(String[] args) {
		int a = calcArea(10);
		System.out.println("Area of the square= "+a);

		double c = areaCircle(3);
		System.out.println("Area of the circle= "+c);

		double t = areaTriangle(4,2);
		System.out.println("Area of the triangle= "+t);
		
		double avg = average(4,2,6);
		System.out.println("Average of 3 integer= "+avg);

	}
}
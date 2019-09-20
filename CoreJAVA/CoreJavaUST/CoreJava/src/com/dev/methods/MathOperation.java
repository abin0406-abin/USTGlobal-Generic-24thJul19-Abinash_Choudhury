package com.dev.methods;
import java.util.*;
public class MathOperation {
	static MathOperation mO = new MathOperation();

	public void add(int a,int b,int c,int d) {
		int sum = a+b+c+d;
		System.out.println("Additon 1 value : "+sum);
	}
	public void add(double e,double f,int g) {
		double sum1 = e+f+g;
		System.out.println("Additon 3 value : "+sum1);
	}
	public void add(char e,double f) {
		double sum2 = e+f;
		System.out.println("Additon 2 value : "+sum2);
	}

	public void mul(int x,int y,int z,char a) {
		int mult = x*y*z*a;
		System.out.println("Multiplication : "+mult);
	}
	public void mul(char e,double f,int g) {
		double mult1 = e*f*g;
		System.out.println("Multiplication 3 value : "+mult1);
	}
	public void mul(int e,char f) {
		int mult2 = e*f;
		System.out.println("Multiplication 2 value : "+mult2);
	}

	public void sub(int r,int s,double d,float f) {
		double substraction = r-s-d-f;
		System.out.println("Substraction : "+substraction);
	}
	public void sub(int r,double d,float f) {
		double substraction1 = r-d-f;
		System.out.println("Substraction 3 value : "+substraction1);
	}
	public void sub(double d,float f) {
		double substraction2 = d-f;
		System.out.println("Substraction 2 value : "+substraction2);
	}

	public void division(int p,double q,char z,int i) {
		double div = p/q/z/i;
		System.out.println("Division : "+div);
	}
	public void division(int p,double q,char z) {
		double div1 = p/q/z;
		System.out.println("Division 3 Value : "+div1);
	}
	public void division(int p,double q) {
		double div2 = p/q;
		System.out.println("Division 2value : "+div2);
	}

	public void modulus(char c,int q) {
		int mod = c%q;
		System.out.println("Modulus : "+mod);
	}
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("Enter the operation you want(1 FOR ADDTION, 2 FOR MULTIPLICATION, 3 FOR SUBSTRACTION, 4 FOR DIVISION, 5 FOR MODULUS): ");
		int a = sc.nextInt();

		if(a==1) {
			System.out.println("Enter the digit you want: ");
			int b = sc.nextInt();
			if(b==4) {
				mO.add(10,50,60,30);
			}
			else if(b==3) {
				mO.add('A',10.9);
			}
			else if(b==2) {
				mO.add(10.0,25.6,5);
			}
			else {
				System.out.println("Sorry!");
			}

		}
		else if(a==2) {
			System.out.println("Enter the digit you want: ");
			int b = sc.nextInt();
			if(b==4) {
				mO.mul(10,50,6,'A');
			}
			else if(b==3) {
				mO.mul('A',10.0,5);
			}
			else if(b==3) {
				mO.mul(10,'A');
			}
			else {
				System.out.println("Sorry!");
			}
		}
		else if(a==3) {
			System.out.println("Enter the digit you want: ");
			int b = sc.nextInt();
			if(b==4) {
				mO.sub(1000,20,10.0,50.5f);
			}
			else if(b==3) {
				mO.sub(1000,10.0,50.5f);
			}
			else if(b==2) {
				mO.sub(50.0,10.5f);
			}
			else {
				System.out.println("Sorry!");
			}
		}
		else if(a==4) {
			System.out.println("Enter the digit you want: ");
			int b = sc.nextInt();
			if(b==4) {
				mO.division(90,20.0,'A',2);
			}
			else if(b==3) {
				mO.division(90,20.0,'A');
			}
			else if(b==2) {
				mO.division(90,20.0);
			}
			else {
				System.out.println("Sorry!");
			}
		}
		else if(a==5) {
			mO.modulus('A',10);
		}
		else {
			System.out.println("Sorry!");
		}
	}

}

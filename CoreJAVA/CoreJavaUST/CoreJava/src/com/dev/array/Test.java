package com.dev.array;

import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		// TYPECASTING
		int i = 10;
		byte b = (byte) i;
		System.out.println("int in byte = "+b);
		short s = (short) i;
		System.out.println("int in short = "+s);
		
		int ch = 98;
		char c = (char) ch;
		System.out.println("int (98) in char = "+c);
		
		Scanner sc = new Scanner(System.in);
		int i1;
		System.out.println("Enter the INTEGER : ");
		i1 = sc.nextInt();
		System.out.println(i1);
		
		System.out.println("Enter the String : ");
		String str = sc.nextLine();
		System.out.println(str);
		
			
	}

}

package com.dev.string;

public class StringMethodExample {

	public static void main(String[] args) {
		String str = "Abinash*Choudhury";
		String str1 = "News";
		String str2 = "Abinash*CHOUDHURY";
		
		int arrLen = str.length();
		System.out.println("Length of string 1 is= "+arrLen);
		
		char[] charStr = str.toCharArray();
		System.out.println("Output of tocharArray() = "+charStr[5]);
		
		char strChar = str.charAt(10);
		System.out.println("Output at index 10 is ="+strChar);
		
		boolean equality = str.equals(str2);
		System.out.println("Lenght is equal = "+equality);
		
		boolean equality1 = str.equalsIgnoreCase(str2);
		System.out.println("Lenght is equal by ignoring letter case = "+equality1);
	}

}

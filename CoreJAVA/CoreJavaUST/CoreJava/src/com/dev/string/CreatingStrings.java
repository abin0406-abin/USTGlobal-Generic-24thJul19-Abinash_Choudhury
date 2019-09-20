package com.dev.string;

public class CreatingStrings {

	public static void main(String[] args) {
		String str ;
		str = "Abinash";
		String str1 = "Choudhury";
		String str2 = new String ("ABINASH CHOUDHURY");
		
		StringBuffer sb = new StringBuffer("Hello");
//		StringBuffer sb1 = "Hello"; //ERROR without using new keyword
		StringBuilder sbi = new StringBuilder("Java");
//		StringBuilder sbi1 = "Java"; //ERROR without using new keyword
//		StringBuffer sb2 = new StringBuffer(-1); //Exception in thread "main" java.lang.NegativeArraySizeException
		
		
		
		
		System.out.println(str);
		System.out.println(str1);
		System.out.println(str2);
		
		System.out.println(sb);
		System.out.println(sb+" "+sbi);
	}

}

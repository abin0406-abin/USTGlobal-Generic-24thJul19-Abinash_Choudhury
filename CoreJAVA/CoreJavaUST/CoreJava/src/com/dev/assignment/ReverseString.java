package com.dev.assignment;

public class ReverseString {

	 public static void main(String[] args)
	    {
		 	String name = "Abinash Choudhury";
		 	
	        String revString = "";
	        
	        System.out.println("Given string is "+name);

	        for(int i = name.length() - 1; i >= 0; i--)
	        {
	        	revString = revString + name.charAt(i);
	        }
	        
	        System.out.print("Reversed string is ");
	        System.out.println(revString);
	    }
}

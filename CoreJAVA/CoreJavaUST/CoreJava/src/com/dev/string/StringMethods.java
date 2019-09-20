package com.dev.string;

public class StringMethods {

	public static void main(String[] args) {
		String str = "Some_String";
		String str1 = "sOME_sTRING";
		
		int length = str.length();
		System.out.println("Output for legnth() = "+length);
		System.out.println("---------------------------------------------------------------------------");
		//=============================================================================================
		char[] ch = str.toCharArray();//.toCharArray() converts the string to character
		System.out.println("Output for toCharArray() = "+ch[10]);
		System.out.println("---------------------------------------------------------------------------");
		//=============================================================================================
		char c = str.charAt(4);// Returns the char value at the particular index 
							   //and the string value index starts from 0 
		System.out.println("Output for charAt() = "+c);
		System.out.println("---------------------------------------------------------------------------");
		//=============================================================================================
		boolean b = str.equals(str1);//Compares this string to the specified object.
		System.out.println("Output for equals() = "+b);
		System.out.println("---------------------------------------------------------------------------");
		//=============================================================================================
		boolean bool = str.equalsIgnoreCase(str1);//Compares this to another string, ignoring case considerations.
		System.out.println("Output for equalsIgnoreCase()"+bool);
		System.out.println("---------------------------------------------------------------------------");
		//=============================================================================================
		boolean v = str.contains("Som");
		System.out.println("Som is present ? contains() "+v);
		System.out.println("---------------------------------------------------------------------------");
		//=============================================================================================
		String g = str.replace('S', 'A');
		System.out.println("Output for replace('S','A') "+g);
		System.out.println("---------------------------------------------------------------------------");
		//=============================================================================================
		int f =  str.indexOf('P');//Return the index number of a particular character.
						  		  //If no such character is present then it will return -1
		System.out.println("indexOf('P') is "+f);
		int f1 =  str.indexOf('S');//Return the index number of a particular character.
		  						   //If no such character is present then it will return -1
								   //The first occurance is the final output if the particular character two or more times.
		System.out.println("indexOf('S') is "+f1);
		System.out.println("---------------------------------------------------------------------------");
		//=============================================================================================
		String s =str.toUpperCase();
		System.out.println("the new string after uppercase is "+s);
		System.out.println("---------------------------------------------------------------------------");
		String h =s.toLowerCase();
		System.out.println("the new string after lowercase is "+h);
		System.out.println("---------------------------------------------------------------------------");
		//=============================================================================================
		String a = str.substring(3);
		System.out.println("substring(3): "+a );
		System.out.println("---------------------------------------------------------------------------");
		String q = str.substring(3,9);
		System.out.println("substring(3,9): "+q );//(starting index,ending index)
	}

}

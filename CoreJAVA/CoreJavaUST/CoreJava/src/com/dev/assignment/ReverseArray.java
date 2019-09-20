package com.dev.assignment;

public class ReverseArray {
	static int intArr[] = {1,2,3,4,5};

	public static void main(String[] args) {
		for (int i = intArr.length - 1; i>= 0 ; i-- ) {
			System.out.println(intArr[i]);
		}	
	}

}

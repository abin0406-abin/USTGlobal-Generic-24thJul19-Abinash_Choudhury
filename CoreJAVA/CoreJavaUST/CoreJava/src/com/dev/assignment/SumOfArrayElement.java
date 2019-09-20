package com.dev.assignment;

public class SumOfArrayElement {

	public static void main(String[] args) {
		int [] intArr = {10,20,30,40,50,60,70};

		System.out.println("First Element = "+ intArr[0]);
		
		int mid = (intArr.length - 1) / 2;
		System.out.println("Middle Element = "+ intArr[mid]);

		int secondLast = (intArr.length - 2);
		System.out.println("Second Last Element = "+ intArr[secondLast]);
		
		int sum = intArr[0] + intArr[mid] + intArr[secondLast];
		System.out.println("Sum of the first, middle and Second last element = "+ sum );


	}

}

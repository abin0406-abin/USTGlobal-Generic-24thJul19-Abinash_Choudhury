package com.dev.array;

import java.util.*;

public class IndexSearching {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int [] intArr = {10,20,30,40,50,60,70,80,90,100};
		System.out.print("Enter the index number: ");
		int index = sc.nextInt();
		
			if (index< intArr.length) {
				for (int i = 0; i < intArr.length; i++) {
				System.out.println("Array index is present "+intArr[index]);
				return;
				}
				
			}
			else {
				System.out.println("INVALID INDEX");
				return;
			}

	}

}

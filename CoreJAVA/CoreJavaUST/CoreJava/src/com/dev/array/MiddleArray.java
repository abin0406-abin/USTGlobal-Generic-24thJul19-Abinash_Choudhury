package com.dev.array;

public class MiddleArray {

	public static void main(String[] args) {
		int [] intArr = {10,20,30,40,50,60,70,80,90,100,110};
		for (int i = 0; i < intArr.length; i++) {
			int mid = (intArr.length - 1) / 2;
			System.out.println(intArr[mid]);
			return;
		}

	}

}

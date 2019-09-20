package com.dev.threads;

public class Test1 {

	public static void main(String[] args) {
		System.out.println("Test1 main thread started...");
		
		for (int k = 1; k <= 10000000; k++) {
			System.out.println("k= "+k);
		}
		
		for (int j = 1; j <= 10; j++) {
			System.out.println("j= "+j);
		}
		
		System.out.println("Test1 main thread terminated...");
	}

}

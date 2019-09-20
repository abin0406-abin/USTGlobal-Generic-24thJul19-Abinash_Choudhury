package com.dev.threads;

public class Thread3 implements Runnable {
	
	@Override
	public void run() {
		System.out.println("Test thread started...");
		System.out.println("Thread3 prints the value of k");

			
		for (int k = 1; k <= 10; k++) {
			System.out.println("k= "+k);
		}
		
		System.out.println("Test thread terminated...");
	}
}

package com.dev.threads;

public class MainSync {

	public static void main(String[] args) {
		System.out.println("MAIN SYNC Started....");
		SyncPrinter sp = new SyncPrinter();
		Thread6 t6 = new Thread6(sp);
		t6.start();
		
		Thread7 t7 = new Thread7(sp);
		t7.start();
		
		System.out.println("MAIN SYNC Terminated....");
	}

}

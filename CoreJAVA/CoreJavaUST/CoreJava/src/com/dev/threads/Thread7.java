package com.dev.threads;

public class Thread7 extends Thread {
	
	SyncPrinter sp;
	
	public Thread7(SyncPrinter pref) {
		sp = pref;
	}
	
	@Override
	public void run() {
		sp.printVal1(10, "Thread 7");
	}
}

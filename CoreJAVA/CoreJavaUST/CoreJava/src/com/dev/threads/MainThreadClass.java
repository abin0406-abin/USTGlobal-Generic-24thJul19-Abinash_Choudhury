package com.dev.threads;

public class MainThreadClass {

	public static void main(String[] args) {
		System.out.println("Main thread started...");
		System.out.println("MainThreadClass prints the value of i");

		new Thread2().start();
		Thread2 t2 = new Thread2();
		t2.setName("Thread T2");
		t2.setPriority(2);
		t2.start();

		//		new Thread(new Test()).start();
		// OR


		Thread3 t3 = new Thread3();
		Thread t = new Thread(t3);
		t.setName("Thread 3 t");
		t.setPriority(3);
		t.start();

		Thread.currentThread().setName("main Thread");
		Thread.currentThread().setPriority(1);
		
		for (int i = 1; i <= 10; i++) {
			System.out.println("i= " + i);
		}
		//We have to set the name 
		System.out.println("Thread Name 2= "+t2.getName());
		System.out.println("Thread Name 3= "+t.getName());
		System.out.println("Thread Name 1= "+Thread.currentThread().getName());
		
		//Thread Scheduler automatically give some id to each of the thread.
		System.out.println("Thread2 ID= "+t2.getId());
		System.out.println("Thread3 ID= "+t.getId());
		System.out.println("Main thread ID= "+Thread.currentThread().getId());
		
		//Priority of the threads
		System.out.println("Thread2 Priority= "+t2.getPriority());
		System.out.println("Thread3 Priority= "+t.getPriority());
		System.out.println("Main Thread Priority= "+Thread.currentThread().getPriority());
		
		System.out.println("Main thread terminated...");
	}

}

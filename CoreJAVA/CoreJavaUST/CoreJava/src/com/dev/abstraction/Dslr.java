package com.dev.abstraction;

public class Dslr extends Camera {
	@Override
	public void still() {
		System.out.println("DSLR clicks steel photographs.");
	}
	@Override
	public void motion() {
		System.out.println("DSLR also shoots videos.");
	}
	public static void main(String[] args) {
		Dslr d = new Dslr();
		d.still();
		d.motion();
	}

}

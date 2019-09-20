package com.dev.abstraction;

public abstract class Camera {
	
	public void click() {
		System.out.println("Camera clicking the PICTURE");
	}
	public abstract void still();
	public abstract void motion();
	public static void show() {
		System.out.println("Camera Class");
	}

}

package com.dev.abstraction;

public class CamCod extends GoPro {
	
	public static void main(String[] args) {
	}

	@Override
	public void still() {
		System.out.println("CamCod cannot take still photographs.");
	}

	
	// It should override the motion
}

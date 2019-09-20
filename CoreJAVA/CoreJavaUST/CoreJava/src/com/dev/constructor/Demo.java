package com.dev.constructor;

import com.dev.methods.MethodExample;//method imported from different package.

public class Demo extends MethodExample{

	public static void main(String[] args) {
		int area = MethodExample.calcArea(3);
		System.out.println(area);
	}
}

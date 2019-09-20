package com.dev.constructor;

import com.dev.inheritance.GrandFather;
public class Test extends GrandFather {
	static GrandFather g = new GrandFather();
	public static void main(String[] args) {
		g.printName();//Not visible as printName declared with protected
	}

}

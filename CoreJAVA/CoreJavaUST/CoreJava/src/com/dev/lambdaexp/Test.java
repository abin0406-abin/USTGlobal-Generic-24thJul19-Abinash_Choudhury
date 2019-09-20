package com.dev.lambdaexp;

public class Test {

	public static void main(String[] args) {
		//With bracket
		Adding a = () -> {
			int x = 10;
			int y = 50;
			int z = x + y;
			System.out.println("sum = "+z);
		};
		
		//Without bracket
		Substract s = () -> System.out.println("20-5 = "+(20-5));
		
		//With tryCatch block
		Divide d = () -> {
			try {
				int i = 10/0;
				System.out.println(i);
			} catch (Exception e) {
				System.err.println("Expression...");
			}
		};
		
		FuncInt2 f2 = (int k) ->  {
			for (int j = 1; j <= k; j++) {
				System.out.println(j);
			}
		};
		a.addNumber();
		s.substractNumber();
		d.divideNumber();
		f2.printVal(5);
		
	}

}

public class ArithmaticOperator {
	public static void main(String[] args) {
		int i = 10;
		int j = 20;
		int c = 'Z';

		int res = i + j ;//Addition (Initialization of res variable)
		System.out.println("+ Addition = "+res);

		res = i - j ;//Substraction (ReInitialization of res variable)
		System.out.println("- Substraction = "+res);

		res = i * j ;//Multiplication (ReInitialization of res variable)
		System.out.println("* Multiplication = "+res);

		res = j / i ;//Division (ReInitialization of res variable)
		System.out.println("/ Division = "+res);

		res = i % j ;//Modulus (ReInitialization of res variable)
		System.out.println("% Modulus = "+res); 

		res = 'A' + 'B' ;//Character value 
		//(Here the compiler taking the ASCII value of the character and showing the result)
		System.out.println("Character = "+res);	

		res = ' ' ;//
		System.out.println("ASCII value of space= "+res);

		res = i + c ;//One integer and one character ...BUt here the output will be in integer type  
					 //as charcter is 2byte and integer is 4byte.
		System.out.println(res);
	}
}
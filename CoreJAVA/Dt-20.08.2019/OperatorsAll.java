public class OperatorsAll {
	public static void main(String[] args) {
		int x = 15 ; 
		int y = 30 ;

		int sum = x+y ;
		System.out.println("Addition of x and y is "+sum);

		int div = y /=x;
		System.out.println("y/x is "+div);

		++div;
		System.out.println("After increment div: "+div);

		--x;
		System.out.println("After decrement value of x is "+x); 

		boolean b = x!=y;
		System.out.println("x<y ? "+b);

		boolean c = true;

		boolean d = b&&c;
		System.out.println("b&c "+d);

		int res = x|y;
		System.out.println("x|y is "+res);
	}
}
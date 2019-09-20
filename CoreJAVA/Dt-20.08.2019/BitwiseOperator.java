public class BitwiseOperator {
	public static void main(String[] args) {
		byte i = 2;
		byte j = 3;
		byte x = 1;
		byte y = 5;

		int b = i&j;
		System.out.println("i&j "+b);

		b = i|j;
		System.out.println("i|j "+b);

		b = i^j;
		System.out.println("i^j "+b);

		b = x^y;
		System.out.println("x^y "+b);
	}
}
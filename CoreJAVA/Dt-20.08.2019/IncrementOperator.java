public class IncrementOperator {
	public static void main(String[] args) {
		int i = 10 ;
		int j = i++;
		System.out.println("i = "+j);

		j = ++i;
		System.out.println("i = "+j);
	}
}
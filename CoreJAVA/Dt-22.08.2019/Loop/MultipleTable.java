import java.util.Scanner;
public class MultipleTable {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the first number:");
		int a = sc.nextInt();
		System.out.println("Enter the last number:");
		int b = sc.nextInt();

		for (int j = a; j<=b ; j++ ) {
			System.out.println("**************");
			System.out.println("Table of "+j);
			System.out.println("**************");
			for (int i = 1; i<=10 ; i++ ) {
				System.out.println(j+" * "+i+"= "+j*i);
			}
			System.out.println("===============================================================");
		}
	}
}
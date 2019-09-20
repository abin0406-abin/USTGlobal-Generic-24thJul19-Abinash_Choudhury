/*WAP to print yourname once of it is a weekday and print 5 time if it is weekend.*/

import java.util.Scanner;
public class Name {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String name = "Abin";
		System.out.println("Enter the day number: ");
		int dayNum = sc.nextInt();
		switch (dayNum) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			System.out.println(name);
			break;
			case 6:
			case 7:
			for (int i = 1; i<=5 ; i++) {
				System.out.println(name);
			}
			break;
			default :
			System.out.println("INVALID DAY NUMBER");
			break;
		}
	}
}
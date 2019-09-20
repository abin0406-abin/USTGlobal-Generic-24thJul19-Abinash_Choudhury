import java.util.Scanner;
public class WeekDay {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the day number: ");
		int dayNum = sc.nextInt();
		
		switch(dayNum){
			case 1:
			case 2:
			System.out.println("WeekDay");
			break;
			default :
			System.out.println("INVALID DAY NUMBER");
			break;
			case 3:
			case 4:
			case 5:
			System.out.println("WeekDay");
			break;
			case 6:
			case 7:
			System.out.println("WeekEnd");
			break;
		}
		System.out.println("--THANK YOU--");
	}
}
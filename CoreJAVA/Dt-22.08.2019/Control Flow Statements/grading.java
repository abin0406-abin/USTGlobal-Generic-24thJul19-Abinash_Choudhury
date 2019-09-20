import java.util.Scanner;
public class grading {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter the mark: ");
		int mark = sc.nextInt();
		if (mark >= 91 && mark <= 100) {
			System.out.println("A grade.");
		}
		else if (mark >= 81 && mark <= 90) {
			System.out.println("B grade.");
		}
		else if (mark >= 71 && mark <= 80) {
			System.out.println("C grade.");
		}
		else if (mark >= 61 && mark <= 70) {
			System.out.println("D grade.");
		}
		else if (mark >= 51 && mark <= 60) {
			System.out.println("E grade.");
		}
		else if (mark >= 41 && mark <= 50) {
			System.out.println("RETEST");
		}
		else if(mark <=40 && mark>=0) {
			System.out.println("FAIL");
		}
		else {
			System.out.println("INVALID MARK");
		}
	}
}
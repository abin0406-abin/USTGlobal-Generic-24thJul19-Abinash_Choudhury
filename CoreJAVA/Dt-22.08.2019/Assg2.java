/*

WAP to print

Aa
Bb Cc
Dd Ee Ff

*/

public class Assg2{
	public static void main(String[] args) {
		int letter = 65;
		int letter1 = 97;

		for (int i = 1;i<=3 ;i++ ) {
			for (int j = 1;j<=i ;j++ ) {
				System.out.print((char)letter+("")+(char)letter1+" ");
				letter++;
				letter1++;
			}
			System.out.println();
		}
	}
}
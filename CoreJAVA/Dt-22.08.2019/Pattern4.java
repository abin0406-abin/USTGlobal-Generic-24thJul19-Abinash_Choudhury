/*
WAP to print 
      A
    B C D
  E F G H I 
   1 2 3
     4

*/
public class Pattern4 {
	public static void main(String[] args){
 
		int n = 3;
		int letter = 65;
		int m = 1;
 		//INCREMENT
		for(int i = 1; i<=n ;i++){
			for(int j = 1;j<=n-i;j++){
				System.out.print(" ");
			}
			for(int j = 1;j <= i*2-1;j++){
				System.out.print((char)letter);
				letter++;
			}
			System.out.println();
 		} 
 		//DECREMENT
		for(int i = n-1;i>0;i--){
			for(int j = 1;j<=n-i;j++){
				System.out.print(" ");
			}
			for(int j = 1;j<=i*2-1;j++){
				System.out.print(m);
				m++;
			}
			System.out.println();
		}
 	}
}
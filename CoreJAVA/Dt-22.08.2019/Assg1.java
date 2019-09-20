/*
WAP to print 

1
2 5
3 6 8
4 7 9 11 

*/
public class Assg1 {
	public static void main(String[] args) {


		for (int i = 1; i <= 4; i++) 
        {
            int num = i; 
            for (int j = 1; j <= i; j++) 
            {
                System.out.print(num+" ");
                num = num+4-j;
            }
             
            System.out.println();
        }
    }
}
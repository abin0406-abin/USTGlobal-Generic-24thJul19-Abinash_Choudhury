public class RelationalOperator {
	public static void main(String[] args) {
	int i = 10;
	int j = 20;
	int k = 66;

	char c = 'a';
	char d = 'b';
	char e = 'A';

	double doub = 10.0;

	boolean b = i==j; 
	System.out.println("i==j "+b);

	b = i!=j;
	System.out.println("i!=j "+b);	

	b = i<j;
	System.out.println("i<j "+b);

	b = i>j;
	System.out.println("i>j "+b);

	b = i<=j;
	System.out.println("i<=j "+b);

	b = i>=j;
	System.out.println("i>=j "+b);

	b = c==d;
	System.out.println("'a'=='a' "+b);

	b = i<=c;
	System.out.println("i<=c('a') "+b);

	b = doub==i;
	System.out.println("doub==i "+b);

	b = k>e;
	System.out.println("k>e "+b);
	}
}
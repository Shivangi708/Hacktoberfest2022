1.	import java.util.Random;   
2.	public class RandomNumber   
3.	{   
4.	public static void main(String[] args)   
5.	{   
6.	randomInts(5);  
7.	randomInts(9, 50, 90);  
8.	}   
9.	public static void randomInts(int num)   
10.	{  
11.	Random random = new Random();  
12.	random.ints(num).forEach(System.out::println);  
13.	}  
14.	public static void randomInts(int num, int origin, int bound)   
15.	{  
16.	Random random1 = new Random();  
17.	random1.ints(num, origin, bound).forEach(System.out::println);  
18.	}  
19.	}  

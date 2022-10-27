#include<stdio.h>
void main()
{int fact=1,n,i;
printf("Enter number:");
scanf("%d",&n);
for(i=n;i>0;i--)
fact=i*fact;
printf("\nFactorial:%d\n",fact);
}



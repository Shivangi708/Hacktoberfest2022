#include<stdio.h>
#include<string.h>
int i;
void heapify(char a[],int l,int i)
{
	int pos,left,right;
	pos=i;
	char temp;
	left=((2*i)+1);
	right=((2*i)+2);
	if(left<l && a[left]>a[pos])
		pos=left;
	if(right<l && a[right]>a[pos])
		pos=right;
	if(pos!=i)
	{
		temp=a[i];
		a[i]=a[pos];
		a[pos]=temp;
	}
		printf("\n %s",a);
	heapify(a,l,pos);
}
void heapsort(char a[],int l)
{
	char temp;
	for(i=((l/2)-1);i>=0;i--)
		heapify(a,l,i);
	for(i=l-1;i>=0;i--)
	{
		temp=a[0];
		a[0]=a[i];
		a[i]=temp;
		heapify(a,i,0);
	}
}
int main()
{
	int l;
	char a[20];
	printf("\n Enter the string");
	scanf("%s",&a);
	l=strlen(a);
	heapsort(a,l);
	printf ("\nThe sorted string\n");
	printf("\n %s",a);
}
#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
int a[100];
int n, left = 0, right;
void setup()
{
     int i;
     printf("How many elements do you want to enter?\n");
     scanf("%d", &n);
     right = n-1;
     printf("Enter the elements\n");
     for (i = 0; i < n; i++)
         scanf("%d", &a[i]);
     a[n]=INT_MAX;
     printf("The entered array is:\n");
}
void display()
{
     for (int i = 0; i < n; i++)
         printf("%d ", a[i]);
}
void swap(int *x, int *y)
{
    int t = *x;
    *x = *y;
    *y = t;
}
int partition( int a[], int l, int r)
{
     int pivot = a[l];
     int i = l;
     int j = r + 1;
     while(i < j)
        {
             while(a[i] <= pivot)
                 i++;
             while(a[j] > pivot)
                 j--;
             if(i<j)
                 swap(&a[i],&a[j]);

        }
     swap(&a[l],&a[j]);
     return j;
}
void quicksort(int a[], int l, int r)
{
     int p;
     if(l<r)
         {
             p = partition(a, l, r);
             quicksort(a,l,p-1);
             quicksort(a, p+1,r);
         }
}
int main()
{
     setup();
     display();
     quicksort(a,0,right);
     printf("\nThe sorted array is:\n");
     display();
}

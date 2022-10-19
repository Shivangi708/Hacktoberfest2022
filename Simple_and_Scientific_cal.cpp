#include <iostream>
#include <cmath>
#include <cstdlib>
using namespace std;

int main()
{
    int choice;
    cout << "-------------------------------------------------------------------------------";
    cout << endl;
    cout << " \t\t\tWelcome to CPP Calculator " << endl;
    cout << "-------------------------------------------------------------------------------";
    cout << endl;
    cout << "\t\t\n1. Simple Calculator \t\t\t2. Scientific Calculator" << endl;
    cout << endl;
    cout << "Choose the Calculator : ";
    cin >> choice;
    switch (choice)
    {
    case 1:
        double x, y;
        int Simple;
        cout << "\nOperations in Simple Calculator- " << endl;
        cout << "1.Addition(+)" << endl;
        cout << "2.Subtraction(-)" << endl;
        cout << "3.Multiplication(*)" << endl;
        cout << "4.Division(/)" << endl;
        cout << "5.Percentage(%)" << endl;
        cout << "\nEnter Your Choice For Operation- ";
        cin >> Simple;
        switch (Simple)
        {
        case 1:
            cout << "Enter First Numbers : " << endl;
            cin >> x;
            cout << "Enter second Numbers : " << endl;
            cin >> y;
            cout << "Addition is: " << x + y << endl;
            break;

        case 2:
            cout << "Enter First Numbers : " << endl;
            cin >> x;
            cout << "Enter second Numbers : " << endl;
            cin >> y;
            cout << "Subtraction is: " << x - y << endl;
            break;

        case 3:
            cout << "Enter First Numbers : " << endl;
            cin >> x;
            cout << "Enter second Numbers : " << endl;
            cin >> y;
            cout << "Multiplication is: " << x * y << endl;
            break;

        case 4:
            cout << "Enter First Numbers : " << endl;
            cin >> x;
            cout << "Enter second Numbers : " << endl;
            cin >> y;
            cout << "Division is: " << x / y << endl;
            break;

        case 5:
            int percent, number, total;
            cout << "Enter the number : ";
            cin >> number;
            cout << "Enter the Total Marks : ";
            cin >> total;
            percent = (number * 100) / total;
            cout << "Percentage= " << percent << endl;
            break;

        default:
            cout << "?????.....Invalid Operation.....?????";
        }
        break;

    case 2:
        int Scientific;
        cout << "\t\t\t\tOerations in Scientific Calculator- " << endl;
        cout << "\t\t\t\t\t1.Square" << endl;
        cout << "\t\t\t\t\t2.Power" << endl;
        cout << "\t\t\t\t\t3.Cube" << endl;
        cout << "\t\t\t\t\t4.Square Root" << endl;
        cout << "\t\t\t\t\t5.Factoial(!)" << endl;
        cout << "\n\t\t\t\tEnter Your Choice For Operation : ";
        cin >> Scientific;
        switch (Scientific)
        {
        case 1:
            double num, sqr;
            cout << "\t\t\t\tEnter the number :  ";
            cin >> num;
            sqr = num * num;
            cout << "\t\t\t\tSquare= " << sqr << endl;
            break;

        case 2:
            double base, e, Power;
            cout << "\t\t\t\tEnter the Base number : ";
            cin >> base;
            cout << "\t\t\t\tEnter the exponent value : ";
            cin >> e;
            Power = pow(base, e);
            cout << "\t\t\t\tSquare of the Number is : " << Power << endl;
            break;

        case 3:
            double i, cube;
            cout << "\t\t\t\tEnter the number : ";
            cin >> i;
            cube = i * i * i;
            cout << "\t\t\t\tCube = " << cube << endl;
            break;

        case 4:
            float n, root;
            cout << "\t\t\t\tEnter the number : ";
            cin >> n;
            root = sqrt(n);
            cout << "\t\t\t\tSquareRoot= " << root << endl;
            break;

        case 5:
        {
            int m, factorial = 1;
            cout << "\t\t\t\tEnter a positive integer: ";
            cin >> m;
            if (m < 0)
            {
                cout << "\t\t\t\tNegative number not exist! ";
            }
            else
            {
                for (int f = 1; f <= m; f++)
                {
                    factorial = factorial * f;
                }
                cout << "\t\t\t\tFactorial = " << factorial;
            }
        }
        break;

        default:
            cout << "\t\t\t\t???_____Invalid choice_____???";
        }
        break;

    default:
        cout << "???_____Invalid choice_____???";
    }
    return 0;
}

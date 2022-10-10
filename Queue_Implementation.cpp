#include <iostream>
using namespace std;
int q[100], n=100, rear=-1, front =-1;
void insert(int value){
    if(rear==n-1) cout<<"Queue overflow"<<endl;
    else {
        if (front==-1) front = 0;
        rear++;
        q[rear]=value;
}
}

void deletion(){
    if(front<0) {
        cout<<"Queue underflow"<<endl;
        return;
    }
    cout<<"The element dequeued is: "<<q[front]<<endl;
    front++;
}

void display(){
    if(rear==-1) cout<<"Queue is empty"<<endl;
    cout<<"The elements in the queue are: "<<endl;
    for(int i=front;i<=rear;++i){
        cout<<q[i]<<endl;
    }
}

int main(){
    int ch, value;
    cout<<"1)Enqueue"<<endl;
    cout<<"2)Dequeue"<<endl;
    cout<<"3)Display"<<endl;
    cout<<"4)Exit"<<endl;
    do{
        cout<<"Enter your choice"<<endl;
        cin>>ch;
        switch(ch){
            case 1:{
                cout<<"Enter the element to be enqueued: "<<endl;
                cin>>value;
                insert(value);
                break;
            }
            case 2:{
                deletion();
                break;
            }
            case 3:{
                display();
                break;
            }
            case 4:{
                cout<<"Exit"<<endl;
                break;
                
            }
        }
    }
    while(ch!=4);
    return 0;
}

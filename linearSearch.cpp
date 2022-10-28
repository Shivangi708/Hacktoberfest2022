#include <iostream>
using namespace std;

bool search(int arr[], int size, int key) {
  for(int i=0; i<size; i++) {
    if(arr[i] == key) {
      return i;
    }
  }
  return 0;
}

int main() {
  int arr[10] = {5,12,-65,52,7,1,0,6,44,69};
   int key;
  cout<<"Enter element to search: ";
  cin>>key;

  bool found = search(arr, 10, key);

  if(found){
    cout<<"element is present" <<endl;
  }
  else{
    cout<<"element not present" <<endl;
  }
  
}

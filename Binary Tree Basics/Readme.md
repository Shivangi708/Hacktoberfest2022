# BinaryTree_For_Beginners
A binary Tree is represented by following structure in all the above programs...
```cpp
struct Node {
    int key;
    Node *left;
    Node *right;
    
    Node(int k) {
        key  = k;
        left = NULL;
        right = NULL;
    }
};
```

//The code implements an inorder traversal of a Binary Tree...
//Inorder Traversal is in accordance with the rule: Left, Node, Right
void inOrder(Node *root) {
    if(root!=NULL) {
        inOrder(root->left);
        cout << root->key <<" ";
        inorder(root->right);
    }
}

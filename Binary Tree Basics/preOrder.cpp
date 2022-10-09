//Traversing a Binary tree using Preorder rule...
//PreOrder Traversal follows the given rule: Node, Left, Right
void preOrder(Node *root) {
    if(root!=NULL) {
        cout << root->key <<" ";
        preOrder(root->left);
        preorder(root->right);
    }
}

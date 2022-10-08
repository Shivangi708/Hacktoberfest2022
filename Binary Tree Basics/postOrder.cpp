//Post Order Traversal of a Binary Tree
//Post Order Rule: Left, Right, Node
void postOrder(Node *root) {
    if(root!=NULL) {
        postOrder(root->left);
        postOrder(root->right);
        cout << root->key << " ";
    }
}

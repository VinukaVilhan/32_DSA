class AVLNode
    {
            key: number;
            left:AVLNode | null ;
            right:AVLNode | null;
            height : number;
            count: number;
        constructor(key :number)
        {
            this.key=key;
            this.left=null;
            this.right=null;
            this.height=1;
            this.count = 0;
        }
    }

export default AVLNode;
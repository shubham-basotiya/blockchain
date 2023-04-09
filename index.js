class block {
    // var data, next;
    constructor(data){
        this.head = {
            data : data,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
    }

    addBlock(data){
        let newBlock = {
            data: data,
            next: null
        };
        this.tail.next = newBlock;
        this.tail = newBlock;
        this.size += 1;
    }
    
};

var one = new block("100");
console.log(one);
console.log(one.size);
one.addBlock("200");
console.log(one);
console.log(one.size);
one.addBlock("300");
console.log(one);
console.log(one.size);
one.addBlock("400");
console.log(one);
console.log(one.size);
console.log(one);
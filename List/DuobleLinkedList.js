class Nodo{
    constructor(Data, PreviousNode, NextNode){
        this.Data = Data;
        this.PreviousNode = PreviousNode;
        this.NextNode = NextNode;
    }
}

class DoublyLinkedList{
    constructor(){
        this.Head = null;
        this.Tail = null;
    }

    AddToTail(n){
        const NewNodo = new Nodo(n, this.Tail, null);

        if(!this.Tail){
            this.Head = NewNodo;
            this.Tail = NewNodo;
        }else{
            NewNodo.PreviousNode = this.Tail;
            this.Tail.NextNode = NewNodo;
            this.Tail = NewNodo;
        }
    }

    AddToHead(n){
        const NewNodo = new Nodo(n, null, this.Head);

        if(!this.Head){
            this.Head = NewNodo;
            this.Tail = NewNodo;
        }else{
            NewNodo.NextNode = this.Head;
            this.Head.PreviousNode = NewNodo;
            this.Head = NewNodo;
        }
    }

    ShowHeadToTail(){
        let current = this.Head;    
        do{
            console.log(current.Data);
            current = current.NextNode;
        }while(current != null);
    }

    ShowTailToHead(){
        let current = this.Tail;
        do{
            console.log(current.Data);
            current = current.PreviousNode;
        }while(current != null);
    }
}

let nodo = new Nodo(30);

nodo.Data = 20;
nodo.NextNode = 10;
nodo.PreviousNode = 15;

console.log('Lista Doblemente Enlazada');
let list = new DoublyLinkedList();
list.AddToTail(50);
list.AddToTail(30);
list.AddToTail(320);
list.AddToTail(130);
list.AddToTail(5);
list.AddToHead(100);

console.log('Principio al fin');
list.ShowHeadToTail();

console.log('Al reves');
list.ShowTailToHead();

console.log(list);
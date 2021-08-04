class Nodo{
    constructor(Data){
        this.Data = Data;
        this.PreviousNode = null;
        this.NextNode = null;
    }
}

class CircleDoublyLinkedList{
    constructor(){
        this.Head = null;
        this.Tail = null;
    }

    AddToTail(n){
        let NewNodo = new Nodo(n);

        if(this.Head == null){
            this.Head = NewNodo;
            this.Head.NextNode = NewNodo;
            NewNodo.PreviousNode = this.Tail;
            this.Tail = NewNodo;
        }else{
            this.Tail.NextNode = NewNodo;
            NewNodo.NextNode = this.Head;
            NewNodo.PreviousNode = this.Tail;
            this.Tail = NewNodo;
            this.Head.PreviousNode = this.Tail;
        }
    }

    AddToHead(n){
        let NewNodo = new Nodo(n);

        if(this.Head == null){
            this.Tail = NewNodo;
            this.Tail.PreviousNode = NewNodo;
            NewNodo.NextNode = this.Head;
            this.Head = NewNodo;
        }else{
            this.Head.PreviousNode = NewNodo;
            NewNodo.PreviousNode = this.Tail;
            NewNodo.NextNode = this.Head;
            this.Head = NewNodo;
            this.Tail.NextNode = this.Head;
        }
    }

    ShowHeadToTail(){
        let current = this.Head;
        do{
            console.log(current.Data);
            current = current.NextNode;
        }while(current != this.Head);
    }

    ShowTailToHead(){
        let current = this.Tail;
        do{
            console.log(current.Data);
            current = current.PreviousNode;
        }while(current != this.Tail);
    }
}

console.log('Lista Circular Doble Enlazada');
let List = new CircleDoublyLinkedList();
List.AddToTail(50);
List.AddToTail(15);
List.AddToTail(500);
List.AddToTail(10);

List.AddToHead(2020);

console.log('Normal');
List.ShowHeadToTail();
console.log('Al reves');
List.ShowTailToHead();
console.log(List);
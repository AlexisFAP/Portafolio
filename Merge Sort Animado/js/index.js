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

    Length(){
        let n = 0;

        let current = this.Head;
        do{
            n+=1;
            current = current.NextNode;
        }while(current != this.Head);

        return n;
    }
}

function MergeSort(list){
    let n = list.Length();
    let list1 = new CircleDoublyLinkedList();
    let list2 = new CircleDoublyLinkedList();
    let n1;
    let n2;
    if(list.Length()%2 == 1){
        n1 = Math.trunc(list.Length()/2) + 1;
        n2 = Math.trunc(list.Length()/2);
        
    }else{
        n1 = Math.trunc(list.Length()/2)
        n2 = Math.trunc(list.Length()/2)
    }
    let cont  = 0;
    while(list1.Length() < n1){
        let current = list.Head;
        do{
            if(list1.Head == null){
                list1.AddToHead(current);
            }else{
                if(current.Data < list1.Head.Data){
                    list1.AddToTail(current);
                }else{
                    list1.AddToHead(current);
                }
            }
            current = current.NextNode;
        }while(current != this.Head);
    }
    while(list2.Length() < n2){

    }
    return list1;
}

let lista = new CircleDoublyLinkedList();

lista.AddToHead(10);
lista.AddToHead(15);
lista.AddToTail(20);
lista.AddToHead(50);
lista.AddToHead(35);
lista.ShowHeadToTail();
console.log(lista.Length()/2);
console.loh(MergeSort(lista));
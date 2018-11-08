var MAX_ELEM_LIST=5; //El máximo de elementos que puede meter son 5
//Lo pongo como variable global
//Entiendo que el usuario me mete del 1-5 
function create(){
    var list=[];
    for(var i=0; i<MAX_ELEM_LIST; i++){ //Inicializo con un for porque no se cuantos elementos va a meter el usu
        list[i]=Number.NaN;
    }
    return list;
}
function isEmpty(list){
    var isEmpty=false;
    if(isNaN(list[0])){ //Miro si el primer puesto está vacio, 
                        //si lo está no hay elementos en el array por lo tanto está vacio entero
        isEmpty=true;
    }
    return isEmpty;
}
function isFull(list){
    var isFull=false;
    if(!isNaN(list[MAX_ELEM_LIST-1])){ //Si el ultimo puesto no está vacio, es porque está llena entera.
        isFull=true;
    }
    return isFull;
}
function size(list){
    var length=0;
    while (length<MAX_ELEM_LIST && !isNaN(list[length])){ //Comprueblo los elementos que están rellenos, pero no
                                                        // pueden ser más que el máximo de elementos.
        length++;
    }
    return length;
}
function add(list, elem){
    var elem= parseInt(elem); //Lo convierto en un entero, el elemento que me han pasado
    if (isNaN(elem)) { //Compruebo que no esté vacio.
        throw "El elemento no es un número";
    }
    if(!isFull(list)){ //Si la lista está llena no puedo meter el nuevo elemento
        list[size(list)]=elem;// lo meto en el último hueco que hay vacio, que lo compruebo con el método size
    }else{
        throw "La lista está llena";
    }
    return size(list); 
}
function addAt(list, elem,index){
    var elem= parseInt(elem); //Lo convierto en un entero, el elemento que me han pasado
    if (isNaN(elem)) { //Compruebo que no esté vacio.
        throw "El elemento no es un número";
    }
    if(isFull(list)){ //Si la lista está llena no puedo meter el nuevo elemento
        throw "La lista está llena";
    }
    if(index<MAX_ELEM_LIST){
        list[index-1]=elem; //
    }else{
        throw "El índice es mayor que el tamaño máximo de la lista";
    }
    return size(list);
}
function get(list, index){
    if(index>size(list)){
        throw "Indice fuera de límite";
    }
    return list[index-1];
}
function toString(list){
    var str = "";
    if (!isEmpty(list)){
        var length = size(list);	
        for (var i=0; i<length-1;i++){
            str = str + list[i] + " - ";
        } 		 		
        str = str + list[i]; 		
    } 	
    return str;
}
function indexOf(list,elemt){
    if(isNaN(elemt)){
        throw "The element is not a number";
    }
    var result=-1;
    var i=0;
    while(i<size(list) && result===-1){
        if(list[i]===elemt){
            result=i+1;
        }
        i++;
    }
    return result;
}
function lastIndexOf(list,elem){

}
function capacity(list){
    return MAX_ELEM_LIST;
}
function clear(list){
    var elem = Number.NaN;
    if (!isEmpty(list)){
        var length = size(list);	
        for (var i=0; i<length;i++){
            list[i] = Number.NaN;
        } 		 		 		
    } 	
}
function firstElement(list){
    var first;
    if (!isEmpty(list)){
        first = list[0]; 		
    } else {
        throw "The list is empty.";
    }
    return first;
} 
function lastElement(list){
    var last;
    if (!isEmpty(list)){
        last = list[size(list)-1]; 		
    } else {
        throw "The list is empty.";
    }
    return last;
}
function remove(list,index){
    if(isEmpty(list)){
        throw "The list is empty";
    }
    if(index>size(list)){
        throw "Indice fuera de límite";
    }
    var result= list[index-1];

    for(var i=index-1; i<list.length;i++){
        list[i]=list[i+1];
    }
    return result;
}
function removeElement(list,elemt){
    var found=false;
    if(isNaN(elemt)){
        throw "The element is not a number";
    }
    var i=0;
    while(i<size(list) && !found){
        if(list[i]===elemt){
            found=true;
            remove(list,i+1);
        }
        i++;
    }
    return found;
}
function set(list,elemt,index){
    if(isNaN(elemt)){
        throw "The element is not a number";
    }
    if(index>size(list)){
        throw "Indice fuera de límite";
    }
    var result= list[index-1];
    list[index-1]=elemt;
    return result;
}
function testlist(){
    var list = create ();
    console.log("Está vacía: " + isEmpty(list));
    console.log("Longitud: " + size(list));
    console.log("Está llena: " + isFull(list));
    console.log(add(list, 5));
    console.log("Está vacía: " + isEmpty(list));
    console.log(addAt(list, 3,3));
} 
window.onload = testlist;

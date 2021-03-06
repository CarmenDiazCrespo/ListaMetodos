var MAX_ELEM_LIST=5;
// En los indices cuento con que el usuario cuente de 1-5
function create(){
    var list =[]; //creamos el array lista inicializado con el máximo de elementos
    return list;
}
function isEmpty(list){
    return (list.length === 0); //Devuelve true si está vacia
} 

function isFull(list){
    return (list.length === MAX_ELEM_LIST); //Devuelve true si la lista esta llena
}
function size(list){
    return list.length; //Tamaño de la lista
}
function add(list,elem){
    if(isFull(list)){
        throw "The list is full";
    }
    if(isNaN(elem)){
        throw "The element is not a number";
    }
    list.push(elem); //push pone el elemento en el último lugar que este libre
    return size(list);
}
function addAt(list,elem,index){
    if(isFull(list)){
        throw "The list is full";
    }
    if(isNaN(elem)){
        throw "The element is not a number";
    }
    if(index>MAX_ELEM_LIST){
        throw "Indice fuera de límite";
    }
    list.splice(index-1,0,elem); //Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    return size(list);
}
function get(list, index){
    index= parseInt(index);
    if(index>MAX_ELEM_LIST){
        throw "Indice fuera de límite";
    }
    return list[index-1]; //-1 porque el usuario me pasa 1-5
}
function toString(list){
    if (isEmpty(list)){
       throw "La lista esta vacia.";  		
    } 	
    return list.toString(); //El método toString convierte un array a string y devuelve el resultado.
}
function indexOf(list, elem){
    elem = parseInt(elem);
    if(isNaN(elem)){
        throw "The element is not a number";
    }
    return list.indexOf(elem)+1; //El método busca en el array el elemento especificado y devuelve su posición.
    //Si no lo encuentra devuelve un -1
}

function lastIndexOf(list, elem){
    elem = parseInt(elem);
    if(isNaN(elem)){
        throw "The element is not a number";
    }
    return list.lastIndexOf(elem)+1; //El método lastIndexOf busca en el array el elemento especificado y devuelve su posición.
    //Si no lo encuentra devuelve un -1
}
function capacity(list){
    return MAX_ELEM_LIST;
} 

function clear(list){
    var elem = Number.NaN;
    if (isEmpty(list)){
        throw "The list is empty";
    } 	
    list.splice(0, list.length); //El método splice agrega / elimina elementos a / desde una matriz 
    //y devuelve los elementos eliminados.
}
function firstElement(list){
    var first;
    if (!isEmpty(list)){
        first= list.shift(); //Devuelve el primer elemento y lo saca.
        list.unshift(first); //Vuelvo a meter el elmento en el primer lugar.		
    } else {
        throw "The list is empty.";
    }
    return first;
} 

function lastElement(list){
    var last;
    if (!isEmpty(list)){
        last=list.pop(); //Extrae el último elemento de la lista y lo devuelve.
        list.push(last); //Inserta el elemento al final de la lista			
    } else {
        throw "The list is empty.";
    }
    return last;
} 
function remove(list, index){
    index = parseInt(index);
    if(index>size(list)){
        throw "Indice fuera de límite";
    }
    return list.splice(index-1, 1);
}
function removeElement(list, elem){
    var found=false;
    if(isNaN(elem)){
        throw "The element is not a number";
    }
    var i=0;
    while(i<MAX_ELEM_LIST && !found){
        if(list[i]===elem){
            found=true; //si lo encuentra se lo pasamos a el método remove
            remove(list,i+1);
        }
        i++;
    }
    return found;
}
function set(list, elem, index){
    var result;
    if(isNaN(elem)){
        throw "The element is not a number";
    }
    if(index>size(list)){
        throw "Indice fuera de límite";
    }
    return list.splice(index-1,1,elem);
}
function testlist(){
    var list = create ();
    console.log("Está vacía: " + isEmpty(list));
    console.log("Longitud: " + size(list));
    console.log("Está llena: " + isFull(list));
    console.log("Añado un 5 en la posicón: " + add(list, 5));
    console.log("Está vacía: " + isEmpty(list));
    console.log("Añado un 3 en la posición: "+addAt(list, 3,2));
    console.log("El elemento 5 está en la posición: "+indexOf(list,5));
    console.log("Añado un 4 en la posición: "+addAt(list, 4,3));
    console.log(toString(list));
    console.log("El elemento 4 está en la posición empezando por atrás: "+lastIndexOf(list,4));
    console.log("Capacidad máxima: "+capacity(list));
    console.log(toString(list));
    clear(list);
    var list=[2,3,1,5,6]; //Lo relleno a mano para hacer pruebas
    console.log(toString(list));
    console.log("Borro el elemento de la posición 3 que es: "+remove(list,3));
    console.log(toString(list));
    console.log("Borro el elemento 6 de la posición, se ha borrado? "+removeElement(list,6));
    console.log(toString(list));
    console.log("Sustiyo el elemento 2 de la posición 3 que había un: "+set(list,2,3));
    console.log(toString(list));
    console.log("El primer elemento es: "+ firstElement(list));
    console.log(toString(list));
    console.log("El último elemento es: "+ lastElement(list));
    console.log(toString(list));
} 
window.onload = testlist;
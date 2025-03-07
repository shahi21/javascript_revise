//if return is called with an object ,then the object is returned instead of this.
//if the return is called wuth a primitive, its ignored

function BigUser(){
    this.name="Alan";
    return{
        name:"John"
    }
}
console.log(new BigUser().name);//John

function SmallUser(){
    this.name="Mary";
    return;
}
console.log(new SmallUser().name);//Mary
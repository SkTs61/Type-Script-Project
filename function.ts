interface User {
    id:number,
    firstName:string,
    lastName:string,

}
function getFullName(name:string|User){
    if(typeof name === 'string'){
        return name
    }
    else{
        return name.firstName + ' '+ name.lastName
    }
}
let sinan:User={
    id:1,
    firstName:'Sinan',
    lastName:'Kara'
}
let zeynep:string='zeynep'
console.log(getFullName(sinan))
console.log(getFullName(zeynep))
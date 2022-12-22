type City={
    name:string,
    plate:number
}
type Country={
    name:string,
    code:string,
    phoneCode:number,
    cities:City[]
}
let turkey:Country={
    name:'Turkiye',
    code:'tr',
    phoneCode:90,
    cities:[]

}

console.log(turkey)

turkey.cities.push({
    name:'Izmir', 
    plate:35.5
})
turkey.cities.push({
    name:'Trabzon',
    plate:61
})
console.log(turkey)

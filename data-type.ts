export interface signUp{
    name:string,
    email:string,
    password:string
}

export interface Login{
    email:string,
    password:string
}

export interface product{
    name:string,
    text:string,
    price:number,
    cat:string,
    image:string,
    id:number,
    disc_price:number,
    price_off:string,
    for:string
}
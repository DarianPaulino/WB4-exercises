

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    let subtotal=0

    for(let i=0;i<lunch.length;i++){
        subtotal +=lunch[i].price

    }
    console.log("subtotal = " + subtotal)
    let tip = .18*subtotal
    let tax = .08*subtotal

    console.log("tax = " + tax)
    console.log("tips = " + tip)
    console.log("total = " + (tip+tax+subtotal))
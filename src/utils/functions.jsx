export function discountProduct (discount, price){{
    const finalPrice =  Math.floor(price - price * (discount / 100))
    return finalPrice    
}
} 

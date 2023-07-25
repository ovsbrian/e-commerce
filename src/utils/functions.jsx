import { useEffect, useState } from "react";

export function discountProduct (discount, price){{
    const finalPrice =  Math.floor(price - price * (discount / 100))
    return finalPrice    
}
} 
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export const truncateNombre = (nombre, maxWords) => {
    const words = nombre.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return nombre;
  };

  
export function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return width;
  }
 
export const ShippingInfo =() => {
    return (<>
     <form className="flex flex-col w-3/5 gap-2 my-6">
     <div className="flex flex-col">
          <label htmlFor="buyerName">Nombre del comprador:</label>
          <input id="buyerName" type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address">Dirección:</label>
          <input id="address" type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phoneNumber">Número de teléfono:</label>
          <input id="phoneNumber" type="tel" />
        </div>
      
     </form>
    </>)
}
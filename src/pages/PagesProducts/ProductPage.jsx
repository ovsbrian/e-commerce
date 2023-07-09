import { useParams } from 'react-router-dom';
import { useProduct } from '../../utils/Hooks';
 
 

export const PageProduct = () =>{
    const { id } = useParams();
    const product = useProduct(id);

    if (!product) {
        return(
            <>
             <div className='h-96 pt-40'>
            <span className='text-lg'>{id}Cargando...</span> 
          
        </div>
            </>);
    }

    return(
        <>
        
        
        
        
    
        <div className='pt-20 flex flex-col h-auto  justify-center items-center mx-64'> 
            <img className='rounded' src={product.imageURL} alt="" />
            <p>{product.size} </p>
            <p>{product.gender} </p>
            <p>{product.brand} </p>
            <p>{product.description} </p>
            <p className='text-lg'>{product.name}</p> 
            <p className='text-lg'>$ {product.price}</p> 
        </div>
        </>
    )
}
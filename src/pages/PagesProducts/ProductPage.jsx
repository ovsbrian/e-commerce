import { useParams } from 'react-router-dom';
import { useProduct } from '../../utils/Hooks';
 
 


export const PageProduct = () =>{
    const { id } = useParams();
    const product = useProduct(id);
    
    if (!product) {
        return(
            <>
             <div className='h-96 pt-40'>
            <span className='text-lg'>{product} aaa</span> 
        </div>
            </>);
    }

    return(
        <>
        <div className='h-96 pt-40'>
            <span className='text-lg'>{product} aaa</span> 
        </div>
        </>
    )
}

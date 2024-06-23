import { useParams } from "react-router-dom";
export const ProductPage = () => {
    let par = useParams();
    console.log(par);
    
    return (
        <h2 className="text-center">{`${par.productName}`} page</h2>
    );
} 
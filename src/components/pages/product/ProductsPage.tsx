
import { useParams } from "react-router-dom";

export const ProductsPage = () => {

    let obj = useParams();
    if (obj.nameProduct === 'roll') {
        document.title = `Доставка Ролів у Львові | Monosushi`;
    } else if (obj.nameProduct === 'sets') {
        document.title = `Доставка суші-сетів у Львові | Monosushi`;
    }
    else if (obj.nameProduct === 'drink') {
        document.title = `Безалкогольні напої у Львові | Monosushi`;
    }
    else if (obj.nameProduct === 'moti') {
        document.title = `Купити десерти Моті у Львові | Monosushi`;
    }
    else if (obj.nameProduct === 'sauce') {
        document.title = `Соуси до суші у Львові | Monosushi`;
    }

    return (
        <h1>Products page work</h1>
    );
}
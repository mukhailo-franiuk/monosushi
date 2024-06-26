import { Link } from "react-router-dom";

export const RegForm = () => {
    const formReg = (event:any) => {
            event.preventDefault();
    }
    return (
        <form action="" className="w-full bg-white flex flex-col items-center relative" onSubmit={formReg}>
            <div className="w-full">
                <h2 className="font-bold text-xl text-center py-4">Реєстрація</h2>
            </div>
            <div className="w-full flex justify-center items-center mb-2">
                <input type="text" className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300" placeholder="Ваше ім'я" />
            </div>
            <div className="w-full flex justify-center items-center mb-2">
                <input type="text" className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300" placeholder="Ваше прізвище" />
            </div>
            <div className="w-full flex justify-center items-center mb-2">
                <input type="text" className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300" placeholder="Ваш телефон" />
            </div>
            <div className="w-full flex justify-center items-center mb-2">
                <input type="text" className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300" placeholder="Ваш email" />
            </div>
            <div className="w-full flex justify-center items-center mb-2">
                <input type="text" className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300" placeholder="Пароль" />
            </div>
            <div className="w-full flex justify-center items-center mb-2">
                <input type="text" className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300" placeholder="Повторити пароль" />
            </div>
            <div className="w-full flex justify-center items-center mb-2">
                <input type="checkbox" className="ml-8"/>
                <span className="text-xs pl-2">Я погоджуюся з <Link to='#' className="text-xs">Правилами користування</Link></span>
            </div>
            <button className="w-4/5 bg-blue-300 flex justify-center items-center mb-6 rounded-lg py-2">
                <span className=" font-extrabold text-sm">Зареєструватись</span>
            </button>
        </form>
    );
}
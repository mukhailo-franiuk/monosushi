
export const EnterUsers = () => {
    const formEnter = (event:any) => {
            event.preventDefault();
    }
    return (
        <form action="" className="w-full bg-white flex flex-col items-center relative" onSubmit={formEnter}>
            <div className="w-full">
                <h2 className="font-bold text-xl text-center py-4">Вхід в кабінет</h2>
            </div>
            <div className="w-full flex justify-center items-center mb-6">
                <input type="text" className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300" placeholder="*Ваш email" />
            </div>
            <div className="w-full flex justify-center items-center mb-6">
                <input type="password" className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300" placeholder="*Пароль" />
            </div>
            <button className="w-4/5 bg-blue-300 flex justify-center items-center mb-6 rounded-lg py-2">
                <span className=" font-extrabold text-sm">Увійти в кабінет</span>
            </button>
        </form>
    );
}
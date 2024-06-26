export const RememberForm = () => {
    const formRemember = (event:any) => {
            event.preventDefault();
    }
    return (
        <form className="w-full bg-white flex flex-col items-center relative" onSubmit={formRemember}>
            <div className="w-full mb-2">
                <h2 className="font-bold text-xl text-center py-4">Відновити пароль</h2>
                <p className="text-xs text-center md:px-4">Після заповнення форми, ми надішлемо вам детальну інструкцію по відновленню паролю</p>
            </div>
            <div className="w-full flex justify-center items-center mb-6">
                <input type="text" className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300" placeholder="*Ваш email" />
            </div>
            <button className="w-4/5 bg-blue-300 flex justify-center items-center mb-6 rounded-lg py-2">
                <span className=" font-extrabold text-sm">Відновити пароль</span>
            </button>
        </form>
    );
}
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../../store/users/AllUsers';
export const EnterUsers = () => {
    const listUsers = useSelector(getAllUsers);
    const {
        register,
        handleSubmit
    } = useForm();
    const getListUsers = (data: any) => {
        listUsers.map((item:any) => {
          if(data.login === 'admin' && data.password === item.password){
            window.location.replace('admin-panel');
          }
           
    })
    }
    return (
        <form action="" className="w-full bg-white flex flex-col items-center relative" onSubmit={handleSubmit(getListUsers)}>
            <div className="w-full">
                <h2 className="font-bold text-xl text-center py-4">Вхід в кабінет</h2>
            </div>
            <div className="w-full flex justify-center items-center mb-6">
                <input type="text" className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300" placeholder="*Ваш email" {...register('login')}/>
            </div>
            <div className="w-full flex justify-center items-center mb-6">
                <input type="password" className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300" placeholder="*Пароль" {...register('password')}/>
            </div>
            <button type='submit' className="w-4/5 bg-blue-300 flex justify-center items-center mb-6 rounded-lg py-2">
                <span className=" font-extrabold text-sm">Увійти в кабінет</span>
            </button>
        </form>
    );
}
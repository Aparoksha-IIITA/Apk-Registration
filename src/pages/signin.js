import GoogleIcon from '@mui/icons-material/Google';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router'
export default ()=>{
    const router = useRouter()

    const red=()=>{
        router.push('/register');
    }
    return(
        <div className="bg-[#1b1b1b] h-screen flex justify-center">
            <div className="w-3/5 flex items-center justify-center sm:hidden">APK Graphics</div>
            <div className="w-2/5 flex items-center justify-center">
                    <div className='h-[100px] flex flex-col items-center justify-between'>
                    <AccountCircleIcon fontSize="large" className=''/>
                    <div className="border-[1px] h-12 w-[200px] cursor-pointer rounded-3xl flex items-center justify-center
                    hover:bg-slate-100 transition-all hover:text-[black]
                    " onClick={red}>
                         <GoogleIcon className='mr-2'/>
                         Sign In
                    </div>  
                    </div>
            </div>
        </div>
    )
}
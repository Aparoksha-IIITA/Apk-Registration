import GoogleIcon from '@mui/icons-material/Google';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router'
export default ()=>{
    const router = useRouter()

    const red=()=>{
        router.push('/register');
    }
    return(
        <div className="bg-[#0a1929] h-screen flex justify-center">
            <div className="w-3/5 flex items-center justify-center sm:hidden">APK Graphics</div>
            <div className="w-2/5 flex flex-col items-center justify-center sm:w-full">
                    <div className='mt-[-50px] text-center text-5xl font-light text-[#3399ff]'>Welcome Dev.</div>
                    <div className=' mt-5 text-center  text-[#46505A]'>Please sign in with your google account to continue.</div>
                    <div className='mt-8 h-[100px] flex flex-col items-center justify-between'>
                    {/* <AccountCircleIcon fontSize="large" className=''/> */}
                    <div className="h-12 rounded-sm w-[200px] cursor-pointer  flex items-center justify-center
                    hover:from-blue-500 hover:to-blue-500 bg-gradient-to-r from-cyan-500 to-blue-500
                    " onClick={red}>
                         <GoogleIcon className='mr-2'/>
                         Sign In
                    </div>  
                    </div>
            </div>
        </div>
    )
}
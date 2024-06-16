import google from '../assets/logos/google.png'
import { ToastContainer, toast } from "react-toastify";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/bazaarSlice';
import { useNavigate } from 'react-router-dom';
function Login(){
    const auth = getAuth();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
     const handleGoogle = (e) =>{
        e.preventDefault()
        console.log(auth)
        signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
         dispatch(addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL
         })
        )
        setTimeout(()=>{
         navigate('/')
        }, 1500)
        }).catch((err)=>console.log(err))
     }
 const handleSignOut = (e) => {
    signOut(auth).then(()=>{
        toast.success("logout successfully")
        dispatch(removeUser())
    }).catch((err)=>{
        console.log(err)
    })
 }
    return(
        <div className='w-full flex-col items-center justify-center gap-10 py-20'>
            <div className='w-full flex items-center justify-center gap-5 pb-10'>
                <div  onClick={handleGoogle} className='w-60 h-12 border border-gray-400 rounded-md flex items-center justify-center gap-4 hover:border-[#022b41] cursor-pointer duration-300'>
                <img src={google} className='w-6' alt='Google logo'/>
                <span className='text-medium text-gray-900 font-semibold'>Sign in with Google</span>
                </div>
               <button onClick={handleSignOut} className='font-semibold bg-[#022b41] rounded-md text-white py-3 px-8 hover:bg-gray-900 cursor-pointer duration-300'>Sign out</button>
            </div>
            <ToastContainer
              position="top-left"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              />
        </div>
    )
}

export default Login;
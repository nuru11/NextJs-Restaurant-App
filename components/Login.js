import React, {useEffect} from 'react'
import {useForm} from "react-hook-form"
import Link from "next/link"
import Style from "../styles/Home.module.css"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
/*import {FcGoogle} from "react-icons/fc"*/
import {BsFacebook} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import Github from 'next-auth/providers/github';




function Login() {



  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);


  const FacebookLinkhandler = () => {
    router.push("https://www.facebook.com/login.php?skip_api_login=1&api_key=746236590185108&kid_directed_site=0&app_id=746236590185108&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv11.0%2Fdialog%2Foauth%3Fclient_id%3D746236590185108%26scope%3Demail%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fapi%252Fauth%252Fcallback%252Ffacebook%26state%3DuRoH3ig68oCa4Fgl95hzWOcVp0h5TnmzZGbS00U2Ua0%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D3a7dab7c-21c3-41e8-9ac2-2fd7cd119444%26tp%3Dunspecified&cancel_url=https%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DuRoH3ig68oCa4Fgl95hzWOcVp0h5TnmzZGbS00U2Ua0%23_%3D_&display=page&locale=en_US&pl_dbl=0")
  }

  const githubLinkHander = () => {
    router.push("https://github.com/login?client_id=a33094236fe2a20398f1&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3Da33094236fe2a20398f1%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fapi%252Fauth%252Fcallback%252Fgithub%26response_type%3Dcode%26scope%3Dread%253Auser%2Buser%253Aemail%26state%3DwBQROUXZ9ybpJJMmpSRLzchJ2lLDdCEwA3uXU3Ukw8s")
  }

    const {
        handleSubmit,
        register,
       /* formState: { errors },*/
      } = useForm();

      const submitHandler = async ({ email, password }) => {
      try {
          // eslint-disable-next-line no-unused-vars
          const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
          });
        } catch (err) {
         alert(err.message)
        }
      
    
        console.log(email + password)

       
      };

  return (
    <div className={Style.loginComponent}>
    
        <form
        onSubmit={handleSubmit(submitHandler)}
        className={Style.loginComponentForm}
      >
        <h1 className={Style.loginComponentFormTitle}>Login</h1>
        <div className={Style.loginComponentFormDiv}>
          <label htmlFor="email" className={Style.loginComponentFormLabel}>Email</label>
          <input
         
            type="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            className={Style.loginComponentFormInput}
            id="email"
            autoFocus
          ></input>
        
        </div>
        <div className={Style.loginComponentFormDiv}>
          <label htmlFor="password" className={Style.loginComponentFormLabel}>Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password is more than 5 chars' },
            })}
            className={Style.loginComponentFormInput}
            id="password"
          ></input>
        </div>
      
        <div className={Style.loginComponentFormSignInwithGoogleParent}>
          {/*<div className={Style.loginComponentFormSignInwithGoogle}><Link className={Style.loginComponentFormSignInwithGoogleLink} href="/">signIn with Google <FcGoogle /></Link></div>*/}
          <div onClick={FacebookLinkhandler} className={Style.loginComponentFormSignInwithGoogle}> signIn with Facebook <BsFacebook color={"blue"}/></div> 
          <div onClick={githubLinkHander} className={Style.loginComponentFormSignInwithGoogle}>SignIn with Github <AiFillGithub color="black" /> </div>
        </div>

       
          <button className={Style.loginComponentFormButton}>Login</button>

        <div className={Style.loginComponentFormLinkParent}>
          Don&apos;t have an account? &nbsp;
          <Link href="/Signup">SignUp</Link>
        </div>

      </form>
     
    </div>
  )
}

export default Login

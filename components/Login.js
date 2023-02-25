import React, {useEffect} from 'react'
import {useForm} from "react-hook-form"
import Link from "next/link"
import Style from "../styles/Home.module.css"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"




function Login() {

  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  
  useEffect(() => {
  /*  if (session?.user) {
      router.push(redirect || '/');
    }*/
  }, [router, session, redirect]);


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
          <div className={Style.loginComponentFormSignInwithGoogle}><Link href="/api/auth/signin" onClick={(e) => {e.preventDefault()
            signIn()}}>SignIn with Google </Link><FcGoogle /></div>
          <div className={Style.loginComponentFormSignInwithGoogle}>SignIn with Facebook <BsFacebook /></div>
          <div className={Style.loginComponentFormSignInwithGoogle}>SignIn with Github <AiFillGithub /></div>
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

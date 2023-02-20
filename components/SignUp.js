import React from 'react'
import {useForm} from "react-hook-form"
import axios from 'axios';
/*import {useSession} from "next-auth/react"
import { useRouter } from 'next/router';*/
import Styles from "../styles/Home.module.css"
import Link from "next/link"

function Signup() {
 /* const { status} = useSession()
  const router = useRouter()*/

    const {
        handleSubmit,
        register,
      /*  formState: { errors },*/
      } = useForm();

      const submitHandler = async ({name, email, password, isAdmin}) => {
             console.log(name + email + password + isAdmin)
             try {
                await axios.post('/api/auth/signup', {
                  name,
                  email,
                  password,
                });
             }catch(err){
                console.log(err)
             }
    }

   /* if(status === "authenticated"){ 
    router.push("/")
    return
    }*/

  return (
    <div className={Styles.signupComponent}>
       
        <form onSubmit={handleSubmit(submitHandler)} className={Styles.signupComponentForm}>
            <div className={Styles.signupComponentFormTitle}>Sign up</div>

        <div className={Styles.signupComponentFormDiv}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            {...register('name', {
              required: 'Please enter name',
            })}
            className={Styles.signupComponentFormInput}
            id="name"
          ></input> 
          </div>

        <div className={Styles.signupComponentFormDiv}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            className={Styles.signupComponentFormInput}
            id="email"
          ></input>
          </div>

          <div className={Styles.signupComponentFormDiv}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password must be greater than 6' },
            })}
            className={Styles.signupComponentFormInput}
            id="password"
          ></input>
        </div>

        <div className={Styles.signupComponentFormDiv}>
          <label htmlFor="Confirmpassword">confirm Password</label>
          <input
            type="password"
            {...register('Confirmpassword', {
              required: 'Please confirm password',
              pattern: {
                minLength:  { value: 6, message: 'password must be greater than 6' }
               /* validate: /*(value) => value === getValues('password')*/
                
              }
            })}
            className={Styles.signupComponentFormInput}
            id="Confirmpassword"
          ></input>
        </div>
        
        <button className={Styles.signupComponentFormButton}>Sign Up</button>

        <div className={Styles.loginComponentFormLinkParent}>
          have an account? &nbsp;
          <Link href="/Login">SignUp</Link>
        </div>
        </form>
        </div>
   
  )
}


export default Signup
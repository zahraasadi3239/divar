import React from 'react'
import {sendOtp} from "services/auth"
import styles from "./SendOtpForm.module.css"


function SendOtpForm({mobile,setMobile,setStep}) {
 

  const submitHandler=async(e)=>{
 e.preventDefault();
  if(mobile.length !== 11) return
   const {response,error}=await sendOtp(mobile);
   console.log({response})
  
   if(response) setStep(2);
    if(error)console.log(error.response.data.message)
        console.log({response,error})
  }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
    <p>ورود به حساب کاربری</p>
    <span>برای استفاده ازامکانات دیوارلطفا شماره موبایل خودراواردکنید.کدتاییدبه این شماره موبایل ارسال خواهدشد</span>
    <label htmlFor='input'>شماره موبایل خودراواردکنید</label>
    <input type='text' id="input" value={mobile} placeholder='شماره موبایل' onChange={(e)=>setMobile(e.target.value)}/>
    <button type='submit'> ارسال کد تایید</button>
    </form>
  )
}

export default SendOtpForm
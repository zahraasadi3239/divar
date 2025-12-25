import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { checkOtp } from 'services/auth';
import { getProfile } from 'src/services/user';
import {setCookie} from 'utils/cookie';
import styles from "./CheckOtpForm.module.css"


function CheckOtpForm({mobile,code,setCode,setStep}) {
  const navigate=useNavigate();
    const {refetch}=useQuery(["profile"],getProfile);
    const submitHandler= async(event)=>{
        event.preventDefault();
        if(code.length !==5) return;

        const {response,error}=await checkOtp(mobile, code);
        console.log(response)
        if(response){
         
         setCookie(response.data)
         navigate("/")
         refetch()
        }
        if(error){
         toast.error(error.response.data.message)
        }
       
    }
  return (
  <form onSubmit={submitHandler} className={styles.form}>
    <p>تاییدکداس ام اس شده</p>
    <p>کدپیامک شده به شماره{mobile}راواردکنید.</p>
    <label htmlFor='input'>کدتاییدراواردکنید</label>
    <input id='input' value={code} type='text' placeholder='کدتایید' onChange={(e)=>setCode(e.target.value)}/>
    <button type='submit'>ورود</button>
    <button className={styles.backButton} onClick={()=>setStep(1)}>تغییرشماره موبایل</button>
  </form>
  )
}

export default CheckOtpForm
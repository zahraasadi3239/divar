import React, { useState } from 'react'
import styles from "./CategoryForm.module.css"
import { useMutation ,useQueryClient} from '@tanstack/react-query'
import { addCategory } from 'src/services/admin'


function CategoryForm() {
    const[form,setForm]=useState({name:"",slug:"",icon:""});

  const queryClient=useQueryClient();
  
 
    const{mutate,isLoading,error,data}=useMutation(addCategory,
      {onSuccess:()=>queryClient.invalidateQueries("get-categories")})
console.log({error,data,isLoading })

    const changeHandler = (event)=>{
setForm({...form,[event.target.name]:event.target.value})
}
const submiHandler=(event)=>{
event.preventDefault();
console.log(form)
if(!form.name || !form.slug || !form.icon) return;
mutate(form)
}

  return(
    <form onChange={changeHandler} onSubmit={submiHandler} className={styles.form}>
    <h3>دسته بندی جدید</h3>
    {!!error && <p>مشکلی پیش آمده است</p>}
  {data?.status === 201 &&  <p>دسته بندی با موفقیت ایجاد شد</p>}
    <label htmlFor='name'>اسم دسته بندی</label>
    <input  id='name' type='text' name="name" />
      <label htmlFor='slug'>اسلاگ</label>
     <input  id='slug' type='text' name="slug" />
       <label htmlFor='icon'>آیکون</label>
      <input  id='icon' type='text' name="icon" />
      <button type='submit' disabled={isLoading }>ایجاد
      
      </button>
        {console.log("first")}
  </form>
  )
}

export default CategoryForm
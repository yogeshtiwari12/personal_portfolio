import React from 'react'
import { useForm } from'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
function Contacts() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = async(data) => {

   const formdata={
    fullName:data.name,
    email:data.email,
    message:data.message
   }

   try {
     await axios.post("https://getform.io/f/bvreegmb",formdata)
     toast.success("Your message has been sent successfully")    
   } catch (error) {
     toast.error("Failed to send message. Please try again later", error)
    console.log(error)
   }



  }



  return (
    <>
    <div  className="contact md:mx-28 mx-4">
      <h1 className="text-3xl font-bold mt-8">Contact me</h1>



    

    <div className="flex item-center justify-center mt-6 mb-4">
    <form  
    onSubmit={handleSubmit(onSubmit)}
    // action="https://getform.io/f/bvreegmb" method="post"
      className="flex flex-col  space-y-4 ">
      

      <div className=" bg bg-base-300 px-6 py-3 rounded-xl w-[330px] ">

      <div className="flex flex-col">
        <label htmlFor="name" className="text-md font-medium mb-1 ">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="fullName"
          {...register("name", { required: true })}

          placeholder="Enter full name"
          // value={formData.fullName}
          // onChange={handleChange}
          className="rounded-md border border-gray-300   px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          required
          />
              {errors.name && <span>This field is required</span>}

      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-md font-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email "
          {...register("email", { required: true })}

          // value={formData.email}
          // onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          required
          />
             {errors.email && <span>This field is required</span>}

          
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-md font-medium mb-1">
          Message
        </label>
        <textarea
        
          id="message"
          name="message"
          // value={formData.message}
          // onChange={handleChange}
          rows="5"
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 mb-4 focus:ring-green-500"
          placeholder="Enter your Querry "

          {...register("message", { required: true })}

          required


          ></textarea>
          {errors.message && <span>This field is required</span>}
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2  px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"

        >
        Send 
      </button>


        </div>
    </form>

          </div>
  
    </div>
    <br/>
    <hr/>
  </>
  )
}

export default Contacts

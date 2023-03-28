import React from 'react'

const FormField = ({ labelName, type,name,placeholder,value,handleChange, isSurpriseMe,handleSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className="block text-lg font-medium text-gray-900">{labelName}</label>
        {isSurpriseMe && (
          <button type='button' onClick={handleSurpriseMe} className='font-semibold text-sm bg-[#ECECF1] py-2 px-2 rounded-[5px] text-black'>Surprise Me</button>
        )}
      </div>
      <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange} required className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-[#182848] focus:border-[#4b6cb7] outline-none block w-full p-3'/>
    </div>
  )
}

export default FormField
import { useState } from 'react'

const Controlled = () => {
  const [values, setValues] = useState({ firstName: '', lastName: '' })

  const handleChange = (e) => {
    const { target: { name, value } } = e

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
     
    console.log(`${values.firstName} ${values.lastName}`, values)
  }

  return ( 
    <form onSubmit={handleSubmit}> 
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form> 
  )
}

export default Controlled
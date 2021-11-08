import { useState} from 'react'
import axios from 'axios'


const Createtelefonnummer = () => {
  const [telefonnummer, setTelefonnummer] = useState()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = await axios.post('api/telefonnummere', {telefonnummer})
    console.log(data)

  }
  return(
    <form onSubmit={handleSubmit}>
      <Input  
      type="text"
      value={telefonnummer}
      onChange={(e) => setTelefonnummer(e.target.value)}
      />
      <button type="submit">send tlf nummer</button>
    </form>
  )

}

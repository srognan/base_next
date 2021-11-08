// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const telefonnummere = []

export default function handler(req, res) {
  if(req.method == 'post'){

    const {telefonnummer} = req.body

    if(telefonnummer.length > 8 ) {
    res.status(400).json({ message: 'telefonnummer for langt' })

  } else{
    telefonnummere.push(telefonnummer)
    res.status(201).json(telefonnummere)
  }
} else {
  res.status(200).json(telefonnummere)
  }
}



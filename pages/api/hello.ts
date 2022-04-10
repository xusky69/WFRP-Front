// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

const hello = (req: NextApiRequest, res: NextApiResponse) => {
  try{
    res.status(200).json({ name: process.env.NODE_ENV })    
  }catch(error){
    res.status(200).json({ name: 'John Doe' })
  }
}

export default hello

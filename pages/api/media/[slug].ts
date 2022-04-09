import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import QueryString from 'qs'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const staticUrl = process.env.NEXT_PUBLIC_STATIC_URL
  const staticFolder=process.env.NEXT_PUBLIC_STATIC_FOLDER
  const urlBase : string | undefined = String(staticUrl) + String(staticFolder)
  console.log('YEE YEE ASS HAIRCUT')
  // const imgUrl = "https://wfrp-api.s3.amazonaws.com/media/ubersreik.jpg?AWSAccessKeyId=AKIAYL5POFDX7AB3CXHG&Signature=GyXUHaigYteSsCdsJxoj0vwmyQM%3D&Expires=1649630371"
  const imgUrl: string = 'https://' + urlBase + req.query.slug
  console.log(imgUrl)
  const image = await axios.get(imgUrl, { responseType: 'arraybuffer' }).then(response => Buffer.from(response.data, 'binary'))

  res.setHeader('Content-Type', 'image/jpg')
  res.setHeader('Cache-Control', 'public, max-age: 86400, immutable')
  res.send(image)

}

export default handler
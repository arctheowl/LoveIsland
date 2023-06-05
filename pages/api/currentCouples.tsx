import type { NextApiRequest, NextApiResponse } from 'next'
import CurrentCouples from '../../data/2022/CurrentCouples.json'

type Data = {
  name: string,
  partner: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(CurrentCouples)
}

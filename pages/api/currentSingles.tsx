import type { NextApiRequest, NextApiResponse } from 'next'
import CurrentSingles from '../../data/2022/CurrentSingles.json'

type Data = {
  name: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(CurrentSingles)
}

import type { NextApiRequest, NextApiResponse } from "next";
import TimeLineBoys from "../../data/TimeLineBoys.json";

type Data = {
  name: string;
  type: string;
  stack: string;
  data: ICountReturn[];
  smooth: boolean;
  color: string;
};
interface ICountReturn {
  partner: string;
  length: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(TimeLineBoys);
}

import type { NextApiRequest, NextApiResponse } from "next";
import TimeLineGirls from "../../data/TimeLineGirls.json";

type Data = {
  name: string;
  type: string;
  stack: string;
  data: string[];
  smooth: boolean;
  color: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(TimeLineGirls);
}

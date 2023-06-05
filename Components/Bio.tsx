import React from "react";
import ContestantImages from "../data/2023/ContestantImages.json";
import Image from "next/image";
import CurrentCouples from "../data/2023/CurrentCouples.json";
import { BsHeartFill } from "react-icons/bs";

type Props = {
  selection: string;
};

const Bio = ({ selection }: Props) => {
  return (
    <>
      {ContestantImages.map((contestant) => {
        if (contestant.name === selection) {
          return (
            <div className="col-span-5 justify-self-center ">
              <Image
                className="rounded-full"
                alt={"Contestant Image"}
                src={contestant.image}
                width={400}
                height={250}
              />
            </div>
          );
        }
      })}
    
        <BsHeartFill className="h-24 w-24 text-pink-500 mt-24" />


      {CurrentCouples.map((couple) => {
        if (couple.name === selection) {
          return (
            <div className="col-span-5 justify-self-center">
              <p>Current Partner: {couple.partner}</p>
              {ContestantImages.map((contestant) => {
                if (contestant.name === couple.partner) {
                  return (
                    <Image
                      className="rounded-full"
                      alt={"Contestant Image"}
                      src={contestant.image}
                      width={400}
                      height={250}
                    />
                  );
                }
              })}
            </div>
          );
        } else if (couple.partner === selection) {
          return (
            <div className="col-span-5 justify-self-center">
              <p>Current Partner: {couple.name}</p>
              {ContestantImages.map((contestant) => {
                if (contestant.name === couple.name) {
                  return (
                    <div className="border-2 rounded-full">
                      <Image
                        className="rounded-full"
                        alt={"Contestant Image"}
                        src={contestant.image}
                        width={400}
                        height={250}
                      />
                    </div>
                  );
                }
              })}
            </div>
          );
        }
      })}
    </>
  );
};

export default Bio;

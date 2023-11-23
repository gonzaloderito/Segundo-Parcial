
import React from "react";
import { useTranslation } from "react-i18next";
import { CountUp } from "use-count-up"
import { BirthdayCardModel } from "./BirthdayCardModel";


const BirthdayCardView = () => {
  const [t] = useTranslation("global");

  return (
    <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#ff4848d3] p-4 justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <p className="text-xs md:text-lg uppercase font">
            {t("birthday.age")}
          </p>
          <p className="text-4xl md:text-8xl font-bold">
            <CountUp isCounting end={BirthdayCardModel.getAge()} duration={4.5} />
          </p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            {t("birthday.years-old")}
          </p>
        </div>
      </div>
    </div>
  );
};

export { BirthdayCardView };

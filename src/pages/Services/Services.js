import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjThree } from "./Data";
const Services = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Services;

import React from "react";
import { InfoSection } from "../../components";
import { homeObjTwo, homeObjFour } from "./data";
const SignUp = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default SignUp;

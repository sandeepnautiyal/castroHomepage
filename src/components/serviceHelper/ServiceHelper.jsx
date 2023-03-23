import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { data } from "./data";
import ServiceHelperCard from "./ServiceHelperCard";

const ServiceHelperMain = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;
const ServiceHelper = () => {
  return (
    <ServiceHelperMain>
      {data.map((ele) => {
        return <ServiceHelperCard />;
      })}
    </ServiceHelperMain>
  );
};

export default ServiceHelper;

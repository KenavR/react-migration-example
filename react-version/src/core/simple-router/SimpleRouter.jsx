import * as React from "react";
import { BerserkerContainer } from "../../pages/berserker";
import { PageNotFound } from "./PageNotFound";

export const SimpleRouter = props => {
  const { path } = props;
  
  switch (path) {
    case "berserker":
      return <BerserkerContainer />;
    default:
      return <PageNotFound path={path}/>;
  }
};

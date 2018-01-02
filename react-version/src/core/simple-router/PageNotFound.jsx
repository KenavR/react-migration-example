import * as React from "react";
import { Fragment } from "react";

export const PageNotFound = props => {
  const { path } = props;
  
  return (
    <Fragment>
      <h3>404: Page not found</h3>
      <p>There is no page for { path }</p>
    </Fragment>
  );
};

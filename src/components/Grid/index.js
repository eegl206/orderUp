import React from "react";

//materialize grid helper components

export function Container({ children }) {
  return <div className="container">{children}</div>;
}

export function Row({ children }) {
  return <div className="row">{children}</div>;
}

//supports adding classes
export function Col({ className, children }) {
  return <div className={"col "+className}>{children}</div>;
}

import React from "react";
import "./style.css"

//materialize grid components

export function Container({ children }) {
  return <div className="container">{children}</div>;
}

export function Row({ children }) {
  return <div className="row">{children}</div>;
}

//supports adding classes
export function Col({ size, children }) {
  return <div className={"col " + size}>{children}</div>;
}

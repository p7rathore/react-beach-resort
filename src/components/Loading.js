import React from "react";
import loading from "../images/gif/loading-arrow.gif";
import "../App.css";

export default function Loading() {
  return <img src={loading} className="loading" alt="loading" />;
}

import React from "react";

export default function Button(props) {
  return (
    <button
      className={"btn shadow-none rounded-pill py-2 " + props.btnClass}
      onClick={props.click}
    >
      {props.btnText}
    </button>
  );
}

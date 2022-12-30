import React, { useEffect } from "react";

const OlvyWidget = (props) => {
  useEffect(() => {
    try {
      if (document) {
        let olvyScript = document.createElement("script");
        olvyScript.setAttribute("src", "https://app.olvy.co/scriptV2.js");
        document.head.appendChild(olvyScript);
      }
      if (window) {
        window.addEventListener("load", () => {
          window.OlvyConfig = props.config;
        });
      }
    } catch (e) {
      console.log(e);
    }
  });
  
  return (
    <>
     {props.targetElement}
    </>
  );
};
const OlvyUtils = window.OlvyUtils
export {OlvyWidget,OlvyUtils}

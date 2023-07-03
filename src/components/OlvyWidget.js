import { useEffect } from "react";

const OlvyWidget = (props) => {
  useEffect(() => {
    try {
      async function loadScript() {
        if (window) {
          // make sure the script loads
          await getOlvyUtils();

          // if workspace alias, initialize
          if (props.config.workspaceAlias && window.Olvy) {
            let foundOlvyInstance = window.OlvyInstances.find(
              (instance) =>
                instance.workspaceAlias === props.config.workspaceAlias
            );
            // if olvyInstance not found, we create one
            if (!foundOlvyInstance) {
              new window.Olvy(props.config.workspaceAlias);
            }
          }
        }
      }

      loadScript();

      // if (document) {
      //   let olvyScript = document.createElement("script");
      //   olvyScript.setAttribute("src", "https://app.olvy.co/scriptV2.js");
      //   document.head.appendChild(olvyScript);
      // }
      // if (window) {
      //   window.addEventListener("load", () => {
      //     window.OlvyConfig = props.config;
      //   });
      // }
    } catch (e) {
      console.log(e);
    }
  });

  function getLoadedOlvyScript() {
    let olvyScript = document.getElementById("olvyScriptV2");

    if (olvyScript) {
      return olvyScript;
    } else {
      return null;
    }
  }

  async function getOlvyUtils() {
    if (window?.OlvyUtils) {
      return window.OlvyUtils;
    } else {
      // Wait for the script to load before returning the utils object
      await olvyScriptLoader();

      // script adds utils to window, we just return utils after ensuring script load
      return window.OlvyUtils;
    }
  }

  async function olvyScriptLoader() {
    // Create a Promise that resolves when the script is loaded
    return new Promise((resolve, reject) => {
      if (!window.OlvyUtils) {
        let createdOlvyScript = getLoadedOlvyScript();

        // if script isn't already created by some other olvy-widget, we create one
        if (!createdOlvyScript) {
          const script = document.createElement("script");
          script.id = "olvyScriptV2";
          script.src = "https://app.olvy.co/scriptV2.js";
          script.onload = () => {
            // The script is loaded, so resolve the Promise
            resolve(true);
          };
          script.onerror = () => {
            // There was an error loading the script, so reject the Promise
            reject(new Error("Failed to load script."));
          };
          document.body.appendChild(script);
        } else {
          // script was already created, just listen for onload
          createdOlvyScript.onload = () => {
            // The script is loaded, so resolve the Promise
            resolve(true);
          };
          createdOlvyScript.onerror = () => {
            // There was an error loading the script, so reject the Promise
            reject(new Error("Failed to load script."));
          };
        }
      } else {
        resolve(true);
      }
    });
  }

  return props.targetElement;
};
const OlvyUtils = window.OlvyUtils;
export { OlvyWidget, OlvyUtils };

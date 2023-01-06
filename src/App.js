import "./App.css";
import {OlvyWidget,OlvyUtils} from "./components/OlvyWidget";
import {useRef} from "react"
function App() {
  const widgetRef = useRef()
  return (
    <div>
    <OlvyWidget
     
      config={{ workspaceAlias: "olvysdktest" }}
      targetElement={<div>
      <div id="olvy-whats-new">Announcement Widget</div>
      <div id="olvy-feedback">Feedback Widget</div>
      </div>  
    }
    ></OlvyWidget>
  
  
    </div>
  );
  
}

export default App;

import "./App.css";
import { OlvyWidget } from "./components/OlvyWidget";

function App() {
  // Callback function to set OlvyUtils when it's loaded
  const onOlvyUtilsLoad = (olvyUtils) => {
    // use the olvyUtils functions here
    // setTimeout(() => {
    //   olvyUtils.showWidget("olvysdktest", "stupefied_buck_CMnyh");
    // }, 2000);
  };

  return (
    <div id="olvy-widget-container">
      <OlvyWidget
        onOlvyUtilsLoad={onOlvyUtilsLoad}
        config={{ workspaceAlias: "olvysdktest", widgetId: "" }}
        targetElement={
          <div>
            <div id="olvy-whats-new">Announcement Widget</div>
            <div id="olvy-feedback">Feedback Widget</div>
          </div>
        }
      ></OlvyWidget>
    </div>
  );
}

export default App;

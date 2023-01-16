import React from "react";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { OlvyWidget } from "../components/OlvyWidget"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
    const config = {
                workspaceAlias: "olvysdktest",
               };
  act(() => {
    render(<OlvyWidget config={config}
    targetElement={<div>
    <div id="olvy-whats-new">Announcement Widget</div>
    <div id="olvy-feedback">Feedback Widget</div>
    </div>  
  }/>, container);
  });
  const announcementWidget = container.querySelector('#olvy-whats-new');
  //To check if announcement widget exists
  expect(announcementWidget.textContent).toBe("Announcement Widget");
  const feedbackWidget = container.querySelector('#olvy-feedback');
   //To check if feedback widget exists
  expect(feedbackWidget.textContent).toBe("Feedback Widget");
});
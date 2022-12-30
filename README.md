# Olvy-widget-react

## Project setup
```
npm install @olvyhq/widget-react@1.0.2
```

### Getting Started
```
On Main file

import {OlvyWidget,OlvyUtils} from  "@olvyhq/widget-react"

```

### How to use in your component
```
 <OlvyWidget
      config={<Configuration> }
      targetElement={<div>
      <div id="<Target-Element-Id>"></div>
      </div>  
    }
    ></OlvyWidget>

Replace <Target-Element-Id> with your target element id and <Configuration> with your desired configuration
```
### Example
```
 <OlvyWidget
      config={{workspaceAlias: "olvysdktest"}}
      targetElement={<div>
      <div id="olvy-whats-new">Announcement Widget</div>
      </div>  
    }>
    </OlvyWidget>
```



### Customize configuration
```
{
    widgetId:"",   // (optional)
    workspaceAlias:""  //(required)
}
```
### Methods
```
 OlvyUtils.showWidget(workspaceAlias,widgetAliasOrID) 
 OlvyUtils.hideWidget(workspaceAlias,widgetAliasOrID) 
 OlvyUtils.setUser(workspaceAlias, userObject) 
 OlvyUtils.setFeedbackMetaInfo (workspaceAlias, metaInfo) 
 OlvyUtils.refreshUnreadCount(workspaceAlias,widgetAliasOrID)
 OlvyUtils.getUnreadReleasesCount(workspaceAlias,widgetAliasOrID)
 OlvyUtils.removeUnreadIndicatorElement(workspaceAlias,widgetAliasOrID)
 OlvyUtils.addUnreadIndicatorElement(workspaceAlias,widgetAliasOrID, count)
 OlvyUtils.getLastOpenedTimestamp(workspaceAlias,widgetAliasOrID)
 OlvyUtils.refresh(workspaceAlias,widgetAliasOrID)
 OlvyUtils.teardown(workspaceAlias,widgetAliasOrID)
 OlvyUtils.createFeedback(workspaceAlias,params)

 workspaceAlias - your subdomain 
 widgetAliasorID - widget Id or alias ( you can find it on widget details page in olvy dashbaord )
```

# @olvyhq/widget-react

This react component allows you to easily include Olvy widgets in your React applications. The component takes care of all the necessary set up and configuration, allowing you to simply specify which Olvy widget you want to use and any relevant options. 


![Logo](https://olvy-development.s3.amazonaws.com/public_images/olvy-react.png)

## Demo

https://codesandbox.io/s/olvy-widget-react-icif8y
<br>
Updated (v0.1.9) [https://stackblitz-starters-cbnfty.stackblitz.io](https://stackblitz.com/edit/stackblitz-starters-cbnfty?file=src%2FApp.tsx)

## Installation

Install @olvyhq/widget-react with npm

```bash
  npm install @olvyhq/widget-react
```

    
## Usage/Examples

In main.js

```javascript
import {OlvyWidget} from  "@olvyhq/widget-react"
```
#### How to use 

```javascript
 <OlvyWidget
      onReady={onOlvyReady}
      config={<Configuration> }
      targetElement={<div>
      <div id="<Target-Element-Id>"></div>
      </div>  
    }
    ></OlvyWidget>

//Replace <Target-Element-Id> with your target element id and <Configuration> with your configuration

// You can use onReady prop to provide a callback function to perform some actions when the widget is ready
```

#### Example

```javascript
 <OlvyWidget
      onReady={onOlvyReady}
      config={{workspaceAlias: "olvysdktest"}}
      targetElement={<div>
      <div id="olvy-whats-new">Announcement Widget</div>
      </div>  
    }>
    </OlvyWidget>
```
<br>

```javascript
  // Callback function to use OlvyUtils when it's loaded
  const onOlvyReady = (olvyUtils) => {
    // use the olvyUtils functions here
    setTimeout(() => {
      olvyUtils.showWidget(workspaceAlias,widgetAliasOrID);
    }, 1000);
  };
```
#### Configuration
```javascript
{
    widgetId:"",   // (optional)
    workspaceAlias:""  //(required)
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Optional**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |



## Methods

#### To show widget

```javascript
OlvyUtils.showWidget(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To hide widget

```javascript
OlvyUtils.hideWidget(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To set user

```javascript
OlvyUtils.setUser(workspaceAlias, userObject) 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `userObject` | `object` | **Required**.  |

#### To set feedback meta info

```javascript
OlvyUtils.setFeedbackMetaInfo (workspaceAlias, metaInfo)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `metaInfo` | `object` | **Required**. |

#### To refresh unread count

```javascript
OlvyUtils.refreshUnreadCount(workspaceAlias,widgetAliasOrID) 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To show unread releases count

```javascript
OlvyUtils.getUnreadReleasesCount(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To remove unread indicator element

```javascript
OlvyUtils.removeUnreadIndicatorElement(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To add unread indicator element

```javascript
OlvyUtils.addUnreadIndicatorElement(workspaceAlias,widgetAliasOrID, count) 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To get last opened timestamp

```javascript
OlvyUtils.getLastOpenedTimestamp(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To refresh the widget

```javascript
OlvyUtils.refresh(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To teardown the widget

```javascript
OlvyUtils.teardown(workspaceAlias,widgetAliasOrID)
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To create feedback

```javascript
OlvyUtils.createFeedback(workspaceAlias,params)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `params` | `object` | **Required**.  |



## Tests

```bash
  npm run test:unit
```

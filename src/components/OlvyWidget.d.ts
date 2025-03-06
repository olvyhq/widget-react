declare const OlvyWidget: (props: {
    config: {
      workspaceAlias: string;
      widgetId: string;
      // Add other properties as needed
    };
    targetElement: React.ReactElement;
  }) => React.ReactElement;
  
  declare const OlvyUtils: any;
  
  export { OlvyWidget, OlvyUtils };
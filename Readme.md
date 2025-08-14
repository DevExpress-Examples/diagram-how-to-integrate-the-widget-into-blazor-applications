<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/276693930/20.1.4%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T905033)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Diagram - How to integrate the widget into Blazor applications

This example illustrates a possible way to integrate the [Diagram widget](https://js.devexpress.com/jQuery/Demos/WidgetsGallery/Demo/Diagram/Overview/MaterialBlueLight/) into Blazor applications. 

![Diagram in DevExpress Blazor App](Diagram.png)

## Implementation Details
1. Install the necessary DevExtreme and Diagram resources by following steps from the following help topic: [Getting Started with Diagram](https://js.devexpress.com/Documentation/Guide/Widgets/Diagram/Getting_Started_with_Diagram/).
2. Register the resources from the previous step.

```html
<head>
    <!--...-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn3.devexpress.com/jslib/25.1.3/js/dx-diagram.min.js"></script>
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/25.1.3/css/dx-diagram.min.css">
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/25.1.3/css/dx.light.css">
    <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/25.1.3/js/dx.all.js"></script>
</head>
```

3. Create the [DevExtremeDiagram.razor.js](CS/DiagramBlazorApp/DevExtremeComponents/DevExtremeDiagram.razor.js) file and implement the logic to initialize the Diagram widget:

```javascript
﻿export async function initializeDiagram(element, dataSource) {
     const projectTasks = !!dataSource ? dataSource : null;

     return $(element).dxDiagram({
         nodes: {
             dataSource: new DevExpress.data.ArrayStore({
                 key: 'id',
                 data: projectTasks,
             }),
             keyExpr: "id",
             parentKeyExpr: "parent_ID",
             textExpr: "task_Name",
         },
     });
}
```

4. Wrap the widget in the [DevExtremeDiagram.razor](CS/DiagramBlazorApp/DevExtremeComponents/DevExtremeDiagram.razor) component.

```razor
<div @ref="Diagram"></div>
```

```csharp
    protected override async Task OnAfterRenderAsync(bool firstRender) {
        if (firstRender) {
            await JS.LoadDxResources();
            ClientModule = await JS.InvokeAsync<IJSObjectReference>("import", "./DevExtremeComponents/DevExtremeDiagram.razor.js");
            ClientDiagram = await ClientModule.InvokeAsync<IJSObjectReference>("initializeDiagram", Diagram, DataSource);
        }
        await base.OnAfterRenderAsync(firstRender);
    }
```
5. Define the data model

```csharp
public class ProjectTask {
    public int ID { get; set; }
    public int? Parent_ID { get; set; }
    public string Task_Name { get; set; } = "";
    public string Description { get; set; } = "";
}
```

6. Use the component in a page and pass the data

```razor
<DevExtremeDiagram DataSource="DataSource" />
```
<!-- default file list --> 
*Files to look at*:

* [Diagram.razor](CS/DiagramBlazorApp/Pages/Index.razor)
* [DevExtremeDiagram.razor](CS/DiagramBlazorApp/DevExtremeComponents/DevExtremeDiagram.razor)
* [DevExtremeDiagram.razor.js](CS/DiagramBlazorApp/DevExtremeComponents/DevExtremeDiagram.razor.js)
* [ProjectTask.cs](CS/DiagramBlazorApp/Model/ProjectTask.cs)
* [App.razor](CS/DiagramBlazorApp/Pages/App.razor)
<!-- default file list end -->
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=diagram-how-to-integrate-the-widget-into-blazor-applications&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=diagram-how-to-integrate-the-widget-into-blazor-applications&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->

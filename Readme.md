<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/276693930/20.1.4%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T905033)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Diagram - How to integrate the widget into Blazor applications

## Requirements
- To use the RichEdit control in an Blazor application, you need to have a [Universal, DXperience, ASP.NET or DevExtreme subscription](https://www.devexpress.com/buy/net/).
- Versions of the devexpress npm packages should be identical (their major and minor versions should be the same).

This example illustrates a possible way to integrate the Diagram widget into Blazor applications. This can be done as follows:
1. Create a new Blazor application using recommendations from the following topic: [Get started with ASP.NET Core Blazor](https://docs.microsoft.com/en-us/aspnet/core/blazor/get-started?view=aspnetcore-3.1&tabs=visual-studio).
2. Install the necessary DevExtreme and Diagram resources by following steps from the following help topic: [Getting Started with Diagram](https://js.devexpress.com/Documentation/Guide/Widgets/Diagram/Getting_Started_with_Diagram/).
3. Register the resources from the previous step. In Blazor server applications, use the ```Pages/_Host.cshtml``` file's HEAD section. In Blazor WebAssembly, use the ```wwwroot/index.html``` file's HEAD section.

```html
<head>
    <!--...-->
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.common.css">
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.light.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx-diagram.min.css">
    <script src="https://cdn3.devexpress.com/jslib/20.1.4/js/dx-diagram.min.js"></script>
    <script type="text/javascript" src="js/diagram-init.js"></script>
    <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/20.1.4/js/dx.all.js"></script>
</head>
```

4. Create the *wwwroot/js/diagram-init.js file and implement the logic to initialize the Diagram widget:

```javascript
window.JsFunctions = {
    InitDiagram: function () {
        var diagram = $("#diagram").dxDiagram()
            .dxDiagram("instance");

        $.ajax({
            url: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/diagram-flow.json",
            dataType: "text",
            success: function (data) {
                diagram.import(data);
            }
        });
    }
};
```

5. Invoke the created ```InitDiagram``` method in the *OnAfterRender* lifecycle event handler:

```csharp
protected override void OnAfterRender(bool firstRender)
{
	JSRuntime.InvokeAsync<object>("JsFunctions.InitDiagram");
}
```

<!-- default file list --> 
*Files to look at*:

* [Index.razor](./CS/Pages/Index.razor)
* [index.html](./CS/wwwroot/index.html)
* [diagram-init.js](./CS/wwwroot/js/diagram-init.js)
<!-- default file list end -->
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=diagram-how-to-integrate-the-widget-into-blazor-applications&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=diagram-how-to-integrate-the-widget-into-blazor-applications&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->

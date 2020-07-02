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
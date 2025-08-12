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

export async function changeDiagramDataSource(diagram, datasource) {
    const projectTasks = !!dataSource ? dataSource : null;
    diagram.import(projectTasks);
}
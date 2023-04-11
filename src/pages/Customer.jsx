import React from "react";
  import {
    GridComponent,
    ColumnDirective,
    ColumnsDirective,
    Search,
    Page,
    Inject,
    Toolbar,
    Edit,Sort,Filter,Selection

  } from "@syncfusion/ej2-react-grids";
  
  import { customersData, customersGrid } from "../data/dummy";
  import { Header } from "../components";

  
  function Customer() {
    return (
      <div className="m-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Customers" />
        <GridComponent
          dataSource={customersData}
          allowPaging
          allowSorting
       toolbar={['Delete']}
       editSettings={{allowDeleting:true,allowEditing:true}}
       width='auto'
        >
          <ColumnsDirective>
            {customersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
            services={[
             Search,
              Page,
              Toolbar,Selection,Edit,Sort,Filter
            ]}
          />
        </GridComponent>
      </div>
    );
  }
  
  export default Customer;
  
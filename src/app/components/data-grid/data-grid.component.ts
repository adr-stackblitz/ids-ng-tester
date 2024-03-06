import { Component, OnInit } from '@angular/core';
import { AppCommonModule } from '@modules/app-common/app-common.module';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [AppCommonModule],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.css',
})
export class DataGridComponent implements OnInit {
  data: Array<any> = [];
  columns: SohoDataGridColumn[] = [];
  gridOptions: SohoDataGridOptions = {};

  ngOnInit() {
    let data = [];
    data.push({
      id: 1,
      productId: 2142201,
      sku: 'SKU #9000001-237',
      productName: 'Compressor',
      activity: 'Assemble Paint',
      quantity: 1,
      price: 210.99,
      status: 'OK',
      orderDate: new Date(2014, 12, 8),
      action: 'Action',
    });
    data.push({
      id: 2,
      productId: 2241202,
      sku: 'SKU #9000001-236',
      productName: 'Different Compressor',
      activity: 'Inspect and Repair',
      quantity: 2,
      price: 210.99,
      status: '',
      orderDate: new Date(2015, 7, 3),
      action: 'On Hold',
    });
    data.push({
      id: 3,
      productId: 2342203,
      sku: 'SKU #9000001-235',
      productName: 'Compressor',
      activity: 'Inspect and Repair',
      quantity: 1,
      price: 120.99,
      status: null,
      orderDate: new Date(2014, 6, 3),
      action: 'Action',
    });
    data.push({
      id: 4,
      productId: 2445204,
      sku: 'SKU #9000001-234',
      productName: 'Another Compressor',
      activity: 'Assemble Paint',
      quantity: 3,
      price: 210.99,
      status: 'OK',
      orderDate: new Date(2015, 3, 3),
      action: 'Action',
    });
    data.push({
      id: 5,
      productId: 2542205,
      sku: 'SKU #9000001-233',
      productName: 'I Love Compressors',
      activity: 'Inspect and Repair',
      quantity: 4,
      price: 210.99,
      status: 'OK',
      orderDate: new Date(2015, 5, 5),
      action: 'On Hold',
    });
    data.push({
      id: 5,
      productId: 2642205,
      sku: 'SKU #9000001-232',
      productName: 'Air Compressors',
      activity: 'Inspect and Repair',
      quantity: 41,
      price: 120.99,
      status: 'OK',
      orderDate: new Date(2014, 6, 9),
      action: 'On Hold',
    });
    data.push({
      id: 6,
      productId: 2642206,
      sku: 'SKU #9000001-231',
      productName: 'Some Compressor',
      activity: 'inspect and Repair',
      quantity: 41,
      price: 123.99,
      status: 'OK',
      orderDate: new Date(2014, 6, 9),
      action: 'On Hold',
    });

    this.data = data;

    let columns: SohoDataGridColumn[] = [];

    //Define Columns for the Grid.
    columns.push({
      id: 'productId',
      name: 'Product Id',
      field: 'productId',
    });
    columns.push({
      id: 'productName',
      name: 'Product Name',
      sortable: false,
      field: 'productName',
      formatter: Soho.Formatters.Hyperlink,
    });
    columns.push({ id: 'activity', name: 'Activity', field: 'activity' });
    columns.push({ id: 'quantity', name: 'Quantity', field: 'quantity' });
    columns.push({
      id: 'price',
      name: 'Price',
      field: 'price',
      formatter: Soho.Formatters.Decimal,
    });
    columns.push({
      id: 'orderDate',
      name: 'Order Date',
      field: 'orderDate',
      formatter: Soho.Formatters.Date,
      dateFormat: 'M/d/yyyy',
    });
    columns.push({
      id: 'status',
      name: 'Status',
      field: 'status',
      formatter: Soho.Formatters.Text,
    });
    this.columns = columns;

    this.gridOptions = {
      columns,
      dataset: data,
    };
  }
}

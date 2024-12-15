/// <reference path='crud.d.ts' />
import { RowElement, RowID } from "./interface";
import * as CRUD from './crud'

const row: RowElement = {firstName: "Guillaume", lastName: "Salva"};

// insert a row and get the ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age field
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// delete the row by it's ID
CRUD.deleteRow(newRowID);

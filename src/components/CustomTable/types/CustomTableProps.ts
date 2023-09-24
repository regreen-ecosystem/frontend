import React from 'react';

export interface ColumnDetails {
  label: string;
  minWidth?: number;
  type: ColumnType;
  searchable?: boolean;
  sortable?: boolean;
  field: string;
  filterable?: boolean;
  defaultSort?: boolean;
}

export default interface CustomTableProps {
  columns: Array<ColumnDetails>;
  data: Array<any>;
  title: string;
  search?: boolean;
  filter?: boolean;
  headerContent?: React.ReactNode;
  select?: boolean;
}

export enum ColumnType {
  TEXT = 'TEXT',
  DETAILS = 'DETAILS',
  NAME = 'NAME',
  BUTTON = 'BUTTON',
  DATE = 'DATE',
  NUMBER = 'NUMBER',
  ACCORDIAN = 'ACCORDIAN',
  // TODO: Custom Tile Remaining
  STATUS = 'STATUS',
}

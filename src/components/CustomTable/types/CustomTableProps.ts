import React from 'react';

export interface ColumnDetails {
  label: string;
  minWidth?: number;
  type: ColumnType;
  searchable?: boolean;
  sortable?: boolean;
  field: string;
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
  HEADER = 'HEADER',
  NAME = 'NAME',
  ACCORDIAN = 'ACCORDIAN',
  BUTTON = 'BUTTON',
}

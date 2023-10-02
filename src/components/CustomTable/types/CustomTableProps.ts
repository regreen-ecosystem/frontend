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
  field2?: string;
}

export default interface CustomTableProps {
  columns: Array<ColumnDetails>;
  data: Array<any>;
  title: string;
  search?: boolean;
  filter?: boolean;
  children?: React.ReactNode;
  select?: boolean;
  statusEnum?: { [key: string]: string };
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

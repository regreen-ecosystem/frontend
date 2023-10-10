import React, { ChangeEvent, SyntheticEvent } from 'react';

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
  title?: string;
  action?: string;
  detailsId?: string;
}

export default interface CustomTableProps {
  columns: Array<ColumnDetails>;
  data: Array<any>;
  title: string;
  search?: boolean;
  filter?: boolean;
  children?: React.ReactNode;
  select?: boolean;
  onSelect?: (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean,
    id: number
  ) => void;
  statusEnum?: { [key: string]: string };
  editMenu?: boolean;
  deleteMenu?: boolean;
  editDisabled?: Array<string>;
  statusQuery?: string;
  statusDisabled?: Array<string>;
  buttonDisabled?: Array<string>;
}

export enum ColumnType {
  TEXT = 'TEXT',
  DETAILS = 'DETAILS',
  NAME = 'NAME',
  BUTTON = 'BUTTON',
  DATE = 'DATE',
  NUMBER = 'NUMBER',
  ACCORDIAN = 'ACCORDIAN',
  STATUS = 'STATUS',
}

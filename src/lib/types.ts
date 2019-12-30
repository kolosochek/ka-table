import { PropsWithChildren } from 'react';

import { ICellContentProps } from './Components/CellContent/CellContent';
import { ICellEditorProps, IFilterRowEditorProps } from './Components/CellEditor/CellEditor';
import { IDataRowProps } from './Components/DataRowContent/DataRowContent';
import { IHeadCellProps } from './Components/HeadCell/HeadCell';
import { Column } from './models';
import { ActionCommand } from './Models/ActionCommand';

export type DispatchFunc = (type: string, data: any) => void;
export type ActionExecuteFunc = (type: string, data: any, command: ActionCommand) => void;
export type ActionExecutedFunc = (type: string, data: any) => void;
export type ActionRejected = (type: string, data: any, command: ActionCommand) => void;
export type CellFunc = (props: CellFuncPropsWithChildren) => any;
export type CellFuncPropsWithChildren = PropsWithChildren<ICellContentProps>;
export type DataChangeFunc = (data: any[]) => void;
export type DataRowFunc = (props: DataRowFuncPropsWithChildren) => any;
export type DataRowFuncPropsWithChildren = PropsWithChildren<IDataRowProps>;
export type EditorFunc = (props: EditorFuncPropsWithChildren) => any;
export type EditorFuncPropsWithChildren = PropsWithChildren<ICellEditorProps>;
export type FilterRowFunc = (props: FilterRowFuncPropsWithChildren) => any;
export type FilterRowFuncPropsWithChildren = PropsWithChildren<IFilterRowEditorProps>;
export type FormatFunc = (value: any) => any;
export type HeaderCellFunc = (props: HeaderCellFuncPropsWithChildren) => any;
export type HeaderCellFuncPropsWithChildren = PropsWithChildren<IHeadCellProps>;
export type OptionChangeFunc = (value: any) => void;
export type SearchFunc = (searchText?: string, rowData?: any, column?: Column) => boolean;
export type ValidationFunc = (value: any, rowData: any) => string | void;

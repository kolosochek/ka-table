import { ITableProps } from '../';
import { Column, EditableCell } from '../models';
import { ValidationFunc } from '../types';
export declare const getValidatedEditableCells: ({ data, editableCells, columns, rowKeyField, validation }: {
    data?: any[];
    editableCells?: EditableCell[];
    columns: Column[];
    rowKeyField: string;
    validation?: ValidationFunc;
}) => EditableCell[];
export declare const getEditableCellsByData: (data: any[], rowKeyField: string, columns: Column[]) => EditableCell[];
export declare const addColumnsToRowEditableCells: (editableCells: EditableCell[], columns: Column[], rowKeyValue: any) => EditableCell[];
export declare const removeDataKeysFromSelectedRows: (selectedRows: any[], data: any[], rowKeyField: string) => any[];
export declare const getUpdatedFocused: (props: ITableProps, action: any, funcToUpdate: any) => ITableProps<any> | {
    focused: {
        cell: any;
    };
    columnReordering?: boolean;
    columnResizing?: boolean;
    columns: Column<any>[];
    groupedColumns?: import("../Models/GroupedColumn").GroupedColumn[];
    data?: any[];
    detailsRows?: any[];
    editableCells?: EditableCell[];
    editingMode?: import("../enums").EditingMode;
    extendedFilter?: (data: any[]) => any[];
    extendedSort?: (data: any[], columns: Column<any>[]) => any[];
    filter?: import("../types").FilterFunc<any>;
    filteringMode?: import("../enums").FilteringMode;
    format?: import("../types").FormatFunc<any>;
    groups?: import("../models").Group[];
    groupsExpanded?: any[][];
    groupPanel?: import("../Models/GroupPanelSettings").GroupPanelSettings;
    height?: string | number;
    loading?: import("../props").ILoadingProps;
    paging?: import("../models").PagingOptions;
    rowKeyField: string;
    treeGroupKeyField?: string;
    treeGroupsExpanded?: any[];
    treeExpandButtonColumnKey?: string;
    rowReordering?: boolean;
    search?: import("../types").SearchFunc<any>;
    searchText?: string;
    selectedRows?: any[];
    singleAction?: any;
    sort?: import("../types").SortFunc;
    noData?: import("../types").NoData;
    sortingMode?: import("../enums").SortingMode;
    validation?: ValidationFunc<any>;
    virtualScrolling?: import("../models").VirtualScrolling;
    width?: string | number;
    controlledPropsKeys?: import("../types").ControlledPropsKeys;
};
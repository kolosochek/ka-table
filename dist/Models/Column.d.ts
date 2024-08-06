/// <reference types="react" />
import { DataType, SortDirection } from '../enums';
import { Field } from '../types';
import { PopupPosition } from './PopupPosition';
export declare class Column<TData = any> {
    colGroup?: React.ColHTMLAttributes<HTMLElement>;
    dataType?: DataType;
    field?: Field;
    filterRowOperator?: any;
    filterRowValue?: any;
    headerFilterValues?: string[];
    headerFilterPopupPosition?: PopupPosition;
    headerFilterListItems?: (props: {
        data?: TData[];
    }) => string[];
    headerFilterSearchValue?: any;
    headerFilterSearch?: (value: any, searchValue: any, rowData?: any) => boolean;
    filter?: (value: any, filterValue: any, rowData?: any) => boolean;
    isHeaderFilterPopupShown?: boolean;
    isHeaderFilterSearchable?: boolean;
    isEditable?: boolean;
    isFilterable?: boolean;
    isResizable?: boolean;
    isSortable?: boolean;
    key: string;
    sortDirection?: SortDirection;
    sortIndex?: number;
    style?: React.CSSProperties;
    title?: string;
    visible?: boolean;
    width?: number | string;
}

/// <reference types="react" />
import { SortDirection, SortingMode } from '../enums';
import { Column } from '../Models/Column';
export declare const getHeadCellClassName: (sortingMode: SortingMode, isGrouped?: boolean) => string;
export declare const getUpdatedSortedColumns: (columns: Column[], columnKey: string, sortingMode: SortingMode) => {
    colGroup?: import("react").ColHTMLAttributes<HTMLElement>;
    dataType?: import("../enums").DataType;
    field?: string;
    filterRowOperator?: any;
    filterRowValue?: any;
    headerFilterValues?: string[];
    headerFilterPopupPosition?: import("../Models/PopupPosition").PopupPosition;
    headerFilterListItems?: (props: {
        data?: any[];
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
    style?: import("react").CSSProperties;
    title?: string;
    visible?: boolean;
    width?: string | number;
}[];
export declare const getNextSortDirection: (previousSortdirection?: SortDirection) => SortDirection;

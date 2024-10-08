import { ICellEditorProps, ICellProps, ICellTextProps, IDataRowProps, IEmptyCellProps, IFilterRowEditorProps, IGroupPanelCellProps, IGroupPanelProps, IGroupRowProps, IGroupSummaryCellProps, IGroupSummaryRowProps, IHeadCellProps, IHeadCellResizeProps, IHeadRowProps, IHeaderFilterButtonProps, ILoadingProps, INoDataRowProps, IPagingIndexProps, IPagingProps, IPagingSizeProps, IPopupContentProps, ISortIconProps, ISummaryCellProps, ISummaryRowProps, ITableBodyProps, ITableFootProps, ITableHeadProps } from '../props';
import { ChildComponent } from './ChildComponent';
import { ITableProps } from '../';
export declare class ChildComponents<TData = any> {
    cell?: ChildComponent<ICellProps<TData>>;
    cellEditor?: ChildComponent<ICellEditorProps<TData>>;
    cellEditorInput?: ChildComponent<ICellEditorProps<TData>>;
    cellText?: ChildComponent<ICellTextProps<TData>>;
    dataRow?: ChildComponent<IDataRowProps<TData>>;
    detailsCell?: ChildComponent<IDataRowProps<TData>>;
    detailsRow?: ChildComponent<IDataRowProps<TData>>;
    emptyCell?: ChildComponent<IEmptyCellProps>;
    filterRowCell?: ChildComponent<IFilterRowEditorProps>;
    filterRowCellInput?: ChildComponent<IFilterRowEditorProps>;
    groupCell?: ChildComponent<IGroupRowProps<TData>>;
    groupExpandButton?: ChildComponent<IGroupRowProps<TData>>;
    groupPanel?: ChildComponent<IGroupPanelProps>;
    groupPanelCell?: ChildComponent<IGroupPanelCellProps>;
    groupRow?: ChildComponent<IGroupRowProps<TData>>;
    groupSummaryCell?: ChildComponent<IGroupSummaryCellProps<TData>>;
    groupSummaryRow?: ChildComponent<IGroupSummaryRowProps<TData>>;
    headCell?: ChildComponent<IHeadCellProps>;
    headCellContent?: ChildComponent<IHeadCellProps>;
    headCellResize?: ChildComponent<IHeadCellResizeProps>;
    headerFilterButton?: ChildComponent<IHeaderFilterButtonProps>;
    headerFilterPopupContent?: ChildComponent<IPopupContentProps<TData>>;
    headerFilterPopupRow?: ChildComponent<IDataRowProps>;
    headerFilterPopupSearchInput?: ChildComponent<IFilterRowEditorProps>;
    headerFilterPopupTextCell?: ChildComponent<ICellProps>;
    headRow?: ChildComponent<IHeadRowProps>;
    loading?: ChildComponent<ILoadingProps>;
    noDataCell?: ChildComponent<INoDataRowProps>;
    noDataRow?: ChildComponent<INoDataRowProps>;
    paging?: ChildComponent<IPagingProps>;
    pagingIndex?: ChildComponent<IPagingIndexProps>;
    pagingPages?: ChildComponent<IPagingProps>;
    pagingSize?: ChildComponent<IPagingSizeProps>;
    pagingSizes?: ChildComponent<IPagingProps>;
    rootDiv?: ChildComponent<ITableProps<TData>>;
    sortIcon?: ChildComponent<ISortIconProps>;
    summaryCell?: ChildComponent<ISummaryCellProps<TData>>;
    summaryRow?: ChildComponent<ISummaryRowProps<TData>>;
    table?: ChildComponent<ITableProps<TData>>;
    tableBody?: ChildComponent<ITableBodyProps<TData>>;
    tableFoot?: ChildComponent<ITableFootProps<TData>>;
    tableHead?: ChildComponent<ITableHeadProps>;
    tableWrapper?: ChildComponent<ITableProps<TData>>;
}

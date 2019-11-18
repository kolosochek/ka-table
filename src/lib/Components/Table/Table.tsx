import * as React from 'react';

import defaultOptions from '../../defaultOptions';
import { EditingMode, SortingMode } from '../../enums';
import { Cell } from '../../Models/Cell';
import { Column } from '../../Models/Column';
import { FilterCondition } from '../../Models/FilterCondition';
import { Group } from '../../Models/Group';
import { DataChangedFunc, OptionChangedFunc } from '../../types';
import { filterData, searchData } from '../../Utils/FilterUtils';
import { sortData } from '../../Utils/SortUtils';
import { convertToColumnTypes } from '../../Utils/TypeUtils';
import HeadRow from '../HeadRow/HeadRow';
import TableBody from '../TableBody/TableBody';

/**
 * Sets the options of the table which are related to its looks
 */
export interface ITableOption {
  /** Columns in table and their look and behaviour */
  columns: Column[];
  /** Specifies the array of cells which are being edited */
  editableCells?: Cell[];
  /** Sets the editing mode */
  editingMode?: EditingMode;
  /** Sets filters for columns */
  filterRow?: FilterCondition[];
  /** Sets the groups option */
  groups?: Group[];
  /** Sets the expanded groups */
  groupsExpanded?: any[][];
  /** Specifies the column unique field which will be used as a key */
  rowKey: string;
  /** Sets the sorting mode */
  sortingMode?: SortingMode;
  /**
   * Sets the search by data columns
   * (TODO: replace string to any)
   */
  search?: string;
}

interface ITableEvents {
  /** Called each time Data is changed */
  onDataChanged?: DataChangedFunc;
  /** Called each time ITableOption changed */
  onOptionChanged: OptionChangedFunc;
}

interface IAllProps extends ITableEvents, ITableOption {
  /** The data which is shown in Table's rows */
  data: any[];
}

export const Table: React.FunctionComponent<IAllProps> = (props) => {
  const {
    groups,
    filterRow,
    onOptionChanged,
    search,
    sortingMode = SortingMode.None,
  } = props;
  let { columns, data } = props;
  data = search ? searchData(columns, data, search) : data;
  data = convertToColumnTypes(data, columns);
  data = filterRow ? filterData(data, filterRow) : data;
  data = sortData(columns, data);

  let groupColumnsCount = 0;
  if (groups) {
    groupColumnsCount = groups.length;
    columns = columns.filter((c) => !groups.some((g) => g.field === c.field));
  }
  return (
    <div className='tc'>
      <table className={defaultOptions.css.table}>
        <thead className={defaultOptions.css.thead}>
          <HeadRow
            groupColumnsCount={groupColumnsCount}
            columns={columns}
            onOptionChanged={onOptionChanged}
            sortingMode={sortingMode}
          />
        </thead>
        <TableBody
            {...props}
            data={data}
            columns={columns}
            groupColumnsCount={groupColumnsCount}
        />
      </table>
    </div>
  );
};

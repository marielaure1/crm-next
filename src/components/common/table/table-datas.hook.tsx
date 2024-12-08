"use client";

import {
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  FilterFn,
  ColumnDef,
} from "@tanstack/react-table";
import { useState } from "react";

interface UseTableDatasProps {
  columnsToFilter: Array<string>;
  columns: ColumnDef<any>[];
  formattedDatas: Array<Object>
}

export const useTableDatas = ({ columnsToFilter, formattedDatas, columns } : UseTableDatasProps) => {
    const [globalFilter, setGlobalFilter] = useState("");
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});

    const globalFilterFn: FilterFn<any> = (row, _, filterValue) => {
        return columnsToFilter.some((columnId) => {
          const value = row.getValue(columnId);
          return String(value).toLowerCase().includes(String(filterValue).toLowerCase());
        });
    };

    const table = useReactTable({
        data: formattedDatas,
        columns,
        state: {
          globalFilter,
          sorting,
          columnFilters,
          columnVisibility,
          rowSelection,
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn,
      });

    return {
        table,
        globalFilter,
        setGlobalFilter,
    }
}
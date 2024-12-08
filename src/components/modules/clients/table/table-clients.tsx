import { TableDatas } from "@ui/common/table/table-datas"
import { columnsToFilter, columns, useTableClients } from "./table-clients.hook"

export const TableClient = () => {
  const {
    clients,
    formattedClients,
    isLoading,
    error,
  } = useTableClients();

  return (
    <TableDatas 
    datas={clients} 
    formattedDatas={formattedClients} 
    isLoading={isLoading} 
    error={error}
    columns={columns}
    columnsToFilter={columnsToFilter}
    />
  )
}
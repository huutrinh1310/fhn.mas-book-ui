import { AgGridReact } from "ag-grid-react";
import { dataPlayers } from "../data/dataPlayers";
import { ColDef } from "ag-grid-community";
import { useMemo } from "react";
import { Player } from "@/types/player.model";
import { columnDefs } from "../data/columns";

export interface IAgTableProps {}

export default function AgTable(props: IAgTableProps) {
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 100,
    };
  }, []);

  return (
    <AgGridReact<Player>
      rowData={dataPlayers}
      columnDefs={columnDefs}
      rowSelection={"multiple"}
      suppressRowClickSelection={true}
      containerStyle={{
        minHeight: "100vh",
        minWidth: "100%",
      }}
      defaultColDef={defaultColDef}
      groupSelectsChildren={true}
      groupSelectsFiltered={true}
      suppressAggFuncInHeader={true}
    />
  );
}

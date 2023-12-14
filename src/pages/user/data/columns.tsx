import { ColDef, IRowNode } from "ag-grid-enterprise";
import SwitchToggle from "../component/SwitchToggle";
import { Player } from "@/types/player.model";

export const columnDefs: ColDef[] = [
  {
    field: "id",
    headerCheckboxSelection: true,
    checkboxSelection: true,
    showDisabledCheckboxes: true,
    maxWidth: 100,
  },
  { field: "name" },
  { field: "age", maxWidth: 120 },
  {
    field: "isRicher",
    minWidth: 100,
    cellRenderer: (params: IRowNode<Player>) => (
      <SwitchToggle isRicher={params.data?.isRicher} />
    ),
  },
];

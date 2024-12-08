"use client";

import { DatasFilter } from "@ui/common/data-filter/data-filter";
// import { useClients } from "@app/(admin)/leads/clients/clients.hook";
import { CreateModal } from "@ui/common/modal/create-modal";
import { TopPage } from "@ui/common/top-page/top-page";
import { CreateModalClient } from "@ui/modules/clients/modal/create-modal-client";
import { TableClient } from "@ui/modules/clients/table/table-clients";
import * as React from "react";

export default function ClientsPage() {
 
  return (
    <div className="flex flex-col gap-[30px]">
      <TopPage title={"Clients"}>
        <CreateModal type="client" formFields={<CreateModalClient />} />
      </TopPage>
      <TableClient/>
    </div>
  );
}

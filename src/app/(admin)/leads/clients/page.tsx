"use client";

// import { useClients } from "@app/(admin)/leads/clients/clients.hook";
import { CreateModal } from "@ui/common/modal/create-modal";
import { CreateModalClient } from "@ui/modules/clients/modal/create-modal-client";
import { DataTableDemo } from "@ui/modules/clients/table/table-clients";

import * as React from "react";

export default function ClientsPage() {
 

  return (
    <div>
      <h1>Clients</h1>
      <CreateModal type="client" formFields={<CreateModalClient />} />
      <ul>
        {/* {clients?.data?.clients?.length > 0 && clients?.data?.clients?.map((client, index) => (
          <li key={index}>{client.name}</li>
        ))} */}

        <DataTableDemo/>
      </ul>
    </div>
  );
}

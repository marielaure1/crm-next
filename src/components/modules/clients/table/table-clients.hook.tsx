import api from "@api/index";
import { useFindAll } from '@api/hooks/api-common.hook';
import { ClientProps } from "@api/interfaces/leads/client.interface";
import { useEffect } from "react";

export const useTableClients = () => {
    const { data: clients, isLoading, error } = useFindAll<ClientProps>('clients', api.clients);

    useEffect(() => {
      console.log(clients);
      
    }, [clients])

    return{
        clients,
        isLoading,
        error
    }
}
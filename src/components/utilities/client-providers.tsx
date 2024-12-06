"use client"

import { Provider as ReduxProvider } from 'react-redux';
import { store } from "@stores/store";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@api/configs/react-query';

export const ClientProviders = ({ children } : { children: React.ReactNode }) => {
    return (
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ReduxProvider>
    );
}

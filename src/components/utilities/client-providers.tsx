"use client"

import { Provider as ReduxProvider } from 'react-redux';
import { store } from "@stores/store";

export const ClientProviders = ({ children } : { children: React.ReactNode }) => {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    );
}

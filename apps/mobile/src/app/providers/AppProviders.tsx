import React from 'react';
import { AssistantProvider } from './AssistantProvider';
import { ThemeProvider } from './ThemeProvider';

export function AppProviders({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <ThemeProvider>
      <AssistantProvider>{children}</AssistantProvider>
    </ThemeProvider>
  );
}

import React from 'react';
import { AppProviders } from './providers/AppProviders';
import { RootNavigator } from '../navigation/RootNavigator';

export function AppRoot(): JSX.Element {
  return (
    <AppProviders>
      <RootNavigator />
    </AppProviders>
  );
}

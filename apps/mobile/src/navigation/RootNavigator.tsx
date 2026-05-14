import React, { useState } from 'react';
import { BottomTabs } from './BottomTabs';
import { OnboardingScreen } from '../screens/onboarding/OnboardingScreen';
import { HomeScreen } from '../screens/home/HomeScreen';

export function RootNavigator(): JSX.Element {
  const [onboarded, setOnboarded] = useState(false);

  if (!onboarded) return <OnboardingScreen onContinue={() => setOnboarded(true)} />;

  return (
    <>
      <HomeScreen />
      <BottomTabs />
    </>
  );
}

# Mobile Setup

This document describes the mobile setup guidance for LibreAssistant Mobile.

## Summary
- Install Node LTS, enable Corepack, and install dependencies with `pnpm install`
- Start Metro with `pnpm --filter mobile start`
- Run `pnpm --filter mobile android` for local Android development builds and launches
- Run `pnpm --filter mobile ios` for iOS builds on macOS
- Configure provider credentials through secure storage abstractions (no hardcoded keys)
- Validate local changes with `pnpm typecheck`, `pnpm lint`, and targeted tests

## Selected React Native stack versions
- React Native: `0.76.0`
- React: `18.3.1`
- React Navigation: `6.x` (`@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs`)
- React Native CLI: `15.x` (`@react-native-community/cli`, android/ios platform packages)

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppStateStatus, Platform, StyleSheet, View} from 'react-native';
import { focusManager, QueryClient, QueryClientProvider } from 'react-query';
import Header from './src/components/Header';
import { useAppState } from './src/hooks/useAppState';
import { useOnlineManager } from './src/hooks/useOnlineManager';
import MainStack from './src/navigations/navigations';

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {  
  useOnlineManager();

  useAppState(onAppStateChange);

  return (  
    <QueryClientProvider client={queryClient}>
    <View style={styles.container}>
      <Header />
      <MainStack/> 
      <StatusBar style="auto" />     
    </View>   
    </QueryClientProvider>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",     
  },    
});

import React, { ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';


interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = useMemo(
    () =>
      createReduxStore(
        initialState as StateSchema,
      ),
    [initialState],
  );

  const persistor = useMemo(() => persistStore(store), [store]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>);
};

export { StoreProvider };

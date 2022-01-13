import Home from "./screens/Home";
import { Routes, Route, Link } from "react-router-dom";
import RootRoutes from "./navigation";

import { Provider } from 'react-redux';

import { store,persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
            <RootRoutes/>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;

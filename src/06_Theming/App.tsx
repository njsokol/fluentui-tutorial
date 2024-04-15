import { useState } from "react";
import {
  Button,
  FluentProvider,
  Theme,
  teamsDarkTheme,
} from "@fluentui/react-components";
import { tokens } from "@fluentui/react-components";

const exampleTheme: Theme = {
  ...teamsDarkTheme,
  borderRadiusMedium: tokens.borderRadiusCircular,
  colorNeutralForeground1: tokens.colorNeutralForeground3BrandPressed,
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <FluentProvider theme={exampleTheme}>
      <h1>Vite + React</h1>
      <div className="card">
        <Button size="large" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </FluentProvider>
  );
}

export default App;

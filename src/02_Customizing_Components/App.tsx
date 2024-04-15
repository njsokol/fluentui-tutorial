import { useState } from 'react'
import { Button, mergeClasses, tokens, shorthands } from "@fluentui/react-components";
import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
    button: {
      color: "cyan",
    //   backgroundColor: 'blue',
      backgroundColor: tokens.colorBrandBackground2,
    },
    custom: {
      backgroundColor: "#f00",
      ":hover": {
        backgroundColor: "#0f0",
      },
      ...shorthands.padding("100px", "200px"),
      // ...shorthands.padding("10px", "20px", "30px", "40px")
      ...shorthands.overflow("hidden"),
    }
});

function App() {
  const [count, setCount] = useState(false)

const classes = useStyles();

const first = mergeClasses(classes.button, classes.custom);
const second = mergeClasses(classes.custom, classes.button);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button className={count ? first : second} size="large"  onClick={() => setCount(!count)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

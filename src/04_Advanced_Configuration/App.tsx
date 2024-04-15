import { useState } from 'react'
import { Button, RendererProvider, createDOMRenderer, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  button: {
    "@media screen and (min-width: 1366px)": {
      backgroundColor: "red",
    },
    "@media screen and (min-width: 1920px)": {
      backgroundColor: "blue",
    },
    "@media screen and (min-width: 1024px)": {
      backgroundColor: "green",
    }
  }
});

function App() {
  const classes = useStyles();
  const [count, setCount] = useState(0)

  const mediaQueryOrder = [
    'screen and (min-width: 1366px)',
    'screen and (min-width: 1024px)',
    'screen and (min-width: 1920px)',
  ];

  const compareMediaQueries = (a: string, b: string) => {
    return mediaQueryOrder.indexOf(a) - mediaQueryOrder.indexOf(b);
  }
  
  const renderer = createDOMRenderer(document, { compareMediaQueries });

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button size="large"  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <RendererProvider renderer={renderer} targetDocument={window.document}>
        <Button size="large"  onClick={() => setCount((count) => count + 1)} className={classes.button}>
          count is {count}
        </Button>
      </RendererProvider>
    </>
  )
}

export default App

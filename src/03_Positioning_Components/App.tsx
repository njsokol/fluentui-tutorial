import { useRef } from 'react';
import { Popover, PopoverTrigger, PopoverSurface, makeStyles, shorthands, PositioningProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100ch',
  },
  surface: {
    backgroundColor: 'blue',
    color: 'white',
    ...shorthands.padding('1rem'),
    width: '200px',
    height: "100px"
  }
});

function App() {

  const secondRef = useRef(null);

  const classes = useStyles();

  const positioning: PositioningProps = {
    position:"below",
    align:"start",
    target: secondRef.current
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className={classes.container}>
        <Popover positioning={positioning}>
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverSurface className={classes.surface}>
            <p>Surface</p>
          </PopoverSurface>
        </Popover>
      </div>
      <button ref={secondRef}>Second Button Target</button>
    </>
  )
}

export default App

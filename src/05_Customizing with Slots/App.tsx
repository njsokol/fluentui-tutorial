import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Button, Input } from "@fluentui/react-components";


function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Input contentBefore={{children: <Button appearance="secondary">Hello</Button> }} contentAfter="After" />
      </div>

      <Accordion>
        <AccordionItem value="1">
          <AccordionHeader as={"h1"}>Hello World</AccordionHeader>
          <AccordionPanel>Some Panel</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionHeader>Hello World</AccordionHeader>
          <AccordionPanel>Some Panel</AccordionPanel>
        </AccordionItem>
      </Accordion>

    </>
  )
}

export default App

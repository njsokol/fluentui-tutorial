import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './01_Importing_Fluent_Components/App'
import App2 from "./02_Customizing_Components/App";
import App3 from "./03_Positioning_Components/App";
import App4 from "./04_Advanced_Configuration/App";
import App5 from "./05_Customizing with Slots/App";
import App6 from "./06_Theming/App";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/2',
    element: <App2 />
  },
  {
    path: '/3',
    element: <App3 />
  },
  {
    path: '/4',
    element: <App4 />
  },
  {
    path: '/5',
    element: <App5 />
  },
  {
    path: '/6',
    element: <App6 />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <RouterProvider router={router} />
    </FluentProvider>
  </React.StrictMode>,
)

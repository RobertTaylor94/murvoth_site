import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import Playgrounds from './Playgrounds.tsx'
import BusWatch from './Playgrounds/BusWatch.tsx'
import LegendBot from './Playgrounds/LegendBot.tsx'
import Media from './Media.jsx'
import Homelab from './Playgrounds/Homelab.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/playgrounds", element: <Playgrounds /> },
  { path: "/playgrounds/buswatch", element: <BusWatch /> },
  { path: "/playgrounds/legendbot", element: <LegendBot /> },
  { path: "/playgrounds/homelab", element: <Homelab />},
  { path: "/media", element: <Media /> }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

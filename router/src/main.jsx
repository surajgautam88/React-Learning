import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// pahla tarika hai likhne ka router ka, jisme hum createBrowserRouter ka use karte hain.

// const router = createBrowserRouter([
//   {
//   path: '/',
//   element: <Layout />,
//   children: [
//     {
//     path: "",
//     element: <Home />
//   },
//   {
//     path: "about",
//     element: <About />

//   },
//   {
//     path: "contact",
//     element: <Contact />
//   }
// ]
// }
// ])

//  Dusra tareeka hai likhne ka router ka, jisme hum createRoutesFromElements ka use karte hain.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />

      {/* <Route path='about' element={<About />} />
      <Route path='suraj' element={<Suraj />} />
      <Route path='bhaskar' element={<Bhasker />} />
      <Route/> */}
      {/* About ke anadr bhi nesting kar do kaafi assan hai  */}

      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
      loader={githubInfoLoader}
       path='github'
        element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

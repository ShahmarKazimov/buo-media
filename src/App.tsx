import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/Pages/HomePage/HomePage"
import DefaultLayout from "./components/Layout/DefaultLayout"
import Services from "./components/Pages/Services/Services"
import Blog from "./components/Pages/Blog/Blog"
import Contact from "./components/Pages/Contact/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes >
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Navbar } from "./components/shared/navbar"
import { Blog } from "./pages/blog"
import { BlogDetail } from "./pages/blog-detail"
import { Portfolio } from "./pages/portfolio"
import { Security } from "./pages/security"

const App = () => {
  return (
  <>
      <Navbar/>
      <div className="px-4">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/security" element={<Security />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </div>
      <h1 className="text-center pt-40 pb-10 font-semibold">© 2025 biohazard.uz</h1>
  </>
  )
}

export default App
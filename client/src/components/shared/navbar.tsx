import { Link } from "react-router-dom"
import { ModeToggle } from "../mode-toggle"

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-16 max-w-lg m-auto px-4 md:px-0">
        <h1 className="text-xl font-bold">
          <Link to="/">
           Umar SWE
          </Link>
        </h1>
        <div className="flex items-center gap-4 font-semibold">
            <Link to="/blog">
                Blog
            </Link>
            <Link to="/portfolio">
                Portfolio
            </Link>
          
            <ModeToggle/>
        </div>
    </div>
  )
}

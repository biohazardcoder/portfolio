import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Security = () => {
  return (
      <div className="max-w-lg w-full m-auto  pt-20 p-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-40 w-40 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2" />
            <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V8a5 5 0 0110 0v3" />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold mb-2 mt-10">
        Access to this site is not allowed        
        </h1>

        <Link to={"/"} >
          <Button className="mt-10">
            Back to Home page
          </Button>
        </Link>

          
      </div>
  );
};

export default Security;

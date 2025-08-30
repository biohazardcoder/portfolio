import { fetcher } from "@/middlewares/Fetcher"
import { Link } from "react-router-dom"
import { Skeleton } from "@/components/ui/skeleton"
import useSWR from "swr"

interface contactType {
  image: string
  backgroundColor: string
  hover: string
  url: string
}

export const Contact = () => {
  const { data, isLoading, error } = useSWR("/contact", fetcher)

  if (isLoading)
    return (
      <div>
        <h1 className="text-center pt-8 font-semibold text-lg">
          Contact me on
        </h1>
        <div className="flex items-center justify-center gap-10 pt-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton
              key={i}
              className="w-20 h-20 rounded-lg flex items-center justify-center"
            >
              <div className="w-10 h-10 rounded-full bg-gray-300" />
            </Skeleton>
          ))}
        </div>
      </div>
    )

  if(error) return <div className="pt-8 max-w-lg m-auto ">
          <h1 className="font-semibold text-3xl text-center">Contact me on</h1>
          <p className="text-center mt-4 text-destructive">Something went wrong</p>
    </div>

  const contact = (data as contactType[]) || []

  return (
    <div>
      <h1 className="text-center pt-8 font-semibold text-lg">Contact me on</h1>
      <div className="flex items-center justify-center gap-10 pt-4">
        {contact.map(({ backgroundColor, image, url, hover }, index: number) => (
          <Link
            key={index}
            to={url}
            target="_blank"
            className="w-20 h-20 p-4 rounded-lg flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                hover
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                backgroundColor
            }}
          >
            <img src={image} alt="image" className="w-10 h-10 object-cover object-center" />
          </Link>
        ))}
      </div>
    </div>
  )
}

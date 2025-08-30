import { Contact } from "@/components/shared/contact"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton" // shadcn skeleton
import { fetcher } from "@/middlewares/Fetcher"
import { ArrowRight } from "lucide-react"
import useSWR from "swr"

interface portfolioType {
  title: string
  description: string
  image: string
  url: string
  _id: string
}

export const Portfolio = () => {
  const { data, isLoading, error } = useSWR("/portfolio", fetcher)

  if (isLoading)
    return (
      <div className="pt-32 max-w-lg m-auto">
        <h1 className="font-semibold text-3xl text-center">Portfolio 🖼️</h1>
        <div className="mt-4 border-b-2 pb-10 border-primary flex flex-col gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-secondary p-4 rounded-md space-y-3">
              <Skeleton className="h-[180px] w-full rounded-md" /> 
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-10 w-24 rounded-md" /> 
            </div>
          ))}
        </div>
        <Contact />
      </div>
    )

  if(error) return <div className="pt-32 max-w-lg m-auto min-h-[56vh]">
          <h1 className="font-semibold text-3xl text-center">Portfolio 🖼️</h1>
          <p className="text-center mt-4 text-destructive min-h-[10vh]">Something went wrong</p>
    </div>

  const portfolios = (data as portfolioType[]) || []

  return (
    <div className="pt-32 max-w-lg m-auto">
      <h1 className="font-semibold text-3xl text-center">Portfolio 🖼️</h1>
      <div className="mt-4 border-b-2 pb-10 border-primary space-y-6">
        {portfolios.map(({ description, image, title, url, _id }) => (
          <div key={_id} className="bg-secondary p-4 rounded-md">
            <a href={url}>
              <img src={image} alt="image" className="rounded-md" />
            </a>
            <h1 className="pt-2 text-xl font-semibold">{title}</h1>
            <h1 className="pt-2">{description}</h1>
            <a href={url}>
              <Button className="mt-2">
                View <ArrowRight />
              </Button>
            </a>
          </div>
        ))}
      </div>
      <Contact />
    </div>
  )
}

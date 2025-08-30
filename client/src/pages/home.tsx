import { Contact } from "@/components/shared/contact"
import { NText } from "@/components/shared/text"
import { fetcher } from "@/middlewares/Fetcher"
import useSWR from "swr"
import { Skeleton } from "@/components/ui/skeleton"

interface aboutType {
  title: string,
  description:string,
  images:string[],
  social:string,
  footer:string
}

export const Home = () => {
  const {data,isLoading,error} = useSWR("/about",fetcher)

if (isLoading) {
  return (
    <div className="pt-32 max-w-lg m-auto">
      <h1 className="font-semibold text-3xl text-center">About me</h1>

      <Skeleton className="h-6 w-48 mt-4 mx-auto" />
      <Skeleton className="h-64 w-full mt-4 rounded-md" />
      <Skeleton className="h-20 w-full mt-4" />
      <Skeleton className="h-64 w-full mt-4 rounded-md" />
      <Skeleton className="h-20 w-full mt-4" />
      <Skeleton className="h-64 w-full mt-4 rounded-md" />
      <Skeleton className="h-10 w-60 mt-4 mx-auto" />
    </div>
  )
}

  if(error) return <div className="pt-32 max-w-lg m-auto min-h-[56vh]">
          <h1 className="font-semibold text-3xl text-center">About me</h1>
          <p className="text-center mt-4 text-destructive">Something went wrong</p>
          <Contact/>
    </div>

    const about = data[0] as aboutType || undefined  


  return (
    <div className="pt-32 max-w-lg m-auto">
      <h1 className="font-semibold text-3xl text-center">About me</h1>
      <NText className="mt-4 leading-7">{about.title}</NText>
      <img src={about?.images[0]} alt="image"  className="w-full mt-4"/>
      <NText className="mt-4 leading-7">{about.description}</NText>
      <img src={about?.images[1]} alt="image"  className="w-full mt-4"/>
      <NText className="mt-4 leading-7">{about.social}</NText>
      <img src={about?.images[2]} alt="image"  className="w-full mt-4"/>
      <NText className="mt-4 leading-7 border-b-2 pb-10 border-primary">{about.footer}</NText>
      <Contact/>
    </div>
  )
}

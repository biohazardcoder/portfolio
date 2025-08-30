import { Contact } from "@/components/shared/contact";
import { NText } from "@/components/shared/text";
import { fetcher } from "@/middlewares/Fetcher";
import { format } from "date-fns";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton"; // shadcn skeleton

interface blogType {
  _id: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

export const BlogDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(`/blog/${id}`, fetcher);
  const blog = data as blogType;

  if (isLoading)
    return (
      <div className="pt-32 max-w-lg m-auto">
        <Skeleton className="h-5 w-28 mb-6" /> 
        <Skeleton className="h-10 w-64 mb-4" /> 
        <Skeleton className="h-4 w-32 mb-8" /> 
        <Skeleton className="h-[250px] w-full rounded-lg mb-8" /> 
        <Skeleton className="h-20 w-full mb-10" /> 
        <Skeleton className="h-12 w-full" />
      </div>
    );

  if(error) return <div className="pt-32 max-w-lg m-auto min-h-[56vh]">
          <Link to={"/blog"}>Back to blog</Link>

          <h1 className="font-semibold text-3xl text-center">Blog detail</h1>
          <p className="text-center mt-4 text-destructive min-h-[10vh]">Something went wrong</p>
    </div>

  const { date, description, image, title } = blog;

  return (
    <div className="pt-32 max-w-lg m-auto">
      <Link to={"/blog"}>Back to blog</Link>

      <h1 className="text-4xl font-semibold pt-10">{title}</h1>
      <h1 className="text-sm font-semibold pt-8">
        {format(new Date(date), "MMM dd, yyyy")}
      </h1>
      <img src={image} alt="" className="mt-16 rounded-lg" />
      <NText className="mt-8 border-b-2 pb-10 border-primary">
        {description}
      </NText>
      <Contact />
    </div>
  );
};

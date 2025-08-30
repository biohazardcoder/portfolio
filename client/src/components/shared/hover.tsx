import { fetcher } from "@/middlewares/Fetcher";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton"; // shadcn skeleton import

interface blogType {
  _id: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

export default function CardCarousel() {
  const { data, isLoading, error } = useSWR("/blog", fetcher);
  const items = (data as blogType[]) || [];

  const [selected, setSelected] = useState<blogType | null>(null);

  useEffect(() => {
    if (items.length > 0) {
      setSelected(items[0]);
    }
  }, [items]);

  if (isLoading)
    return (
      <div className="flex flex-col items-center gap-6 mt-8">
        <div className="flex flex-col gap-4 ">
          {[1, 2, 3].map((i) => (
            <Skeleton
              key={i}
              className="w-[260px] h-[160px] rounded-lg"
            />
          ))}
        </div>
        <div className="text-center mt-6">
          <Skeleton className="h-6 w-40 mx-auto mb-2" />
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>
      </div>
    );

if(error) return <p className="text-center mt-8 text-destructive min-h-[30vh]">Something went wrong</p>
  
return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <article className="flex flex-col gap-4 lg:card__container">
        {items.map((item) => (
          <Link
            to={`/blog/${item._id}`}
            key={item._id}
            className="card"
            style={{ backgroundImage: `url(${item.image})` }}
            tabIndex={0}
            onMouseEnter={() => setSelected(item)}
          ></Link>
        ))}
      </article>

      {selected && (
        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold">{selected.title}</h2>
          <p className="text-gray-400">
            {format(new Date(selected.date), "MMM dd, yyyy")}
          </p>
        </div>
      )}
    </div>
  );
}

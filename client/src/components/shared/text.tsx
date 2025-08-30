import { cn } from "@/lib/utils";

interface NTextProps {
  children: string;
  className?:string
}

export const NText = ({ children,className }: NTextProps) => {
  return (
    <div
      className={cn("prose max-w-none", className)}
      dangerouslySetInnerHTML={{ __html: children.replace(/\/n/g, "<br/><br/>") }}
    />
  );
};

import { cn } from "@/lib/utils";

export default function Divider({ className }) {
  return (
    <div
      className={cn(
        "w-full h-[2px] bg-gradient-to-r from-white via-[#ffffff8f] to-transparent",
        className
      )}
    />
  );
}

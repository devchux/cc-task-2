import { FC } from "react";
import { cn } from "../../utils/lib";

const Avatar: FC<{ large?: boolean }> = ({ large }) => {
  return (
    <div
      className={cn(
        "rounded-full bg-hawkes-blue font-semibold flex items-center justify-center text-french-pass w-6 h-6 text-[0.625rem]",
        { "w-14 h-14 text-xl": large }
      )}
    >
      AS
    </div>
  );
};

export default Avatar;

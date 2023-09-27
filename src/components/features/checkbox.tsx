import { cn } from "../../utils/lib";

const Checkbox = ({
  checked,
  toggle,
}: {
  checked?: boolean;
  toggle?: () => void;
}) => {
  return (
    <div className="flex items-center mr-4">
      <div
        onClick={toggle}
        className={cn(
          "text-white w-4 h-4 flex justify-center items-center  rounded cursor-pointer border border-[#8492A7]",
          { "bg-persian-blue": checked }
        )}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Checkbox;

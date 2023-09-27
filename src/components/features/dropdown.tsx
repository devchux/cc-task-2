import { MutableRefObject, useEffect, useRef, useState } from "react";
import { cn } from "../../utils/lib";

const Dropdown = () => {
  const [state, setState] = useState({
    title: "Opportunity Browsing",
    value: "243",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref: MutableRefObject<null | HTMLDivElement> = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const options = [
    {
      title: "Applied",
      value: "1745",
    },
    {
      title: "Shortlisted",
      value: "453",
    },
    {
      title: "Technical Interview",
      value: "123",
    },
    {
      title: "Opportunity Browsing",
      value: "243",
    },
    {
      title: "Video Interview I",
      value: "25",
    },
    {
      title: "Video Interview II",
      value: "25",
    },
    {
      title: "Video Interview III",
      value: "25",
    },
    {
      title: "Offer",
      value: "25",
    },
    {
      title: "Withdrawn",
      value: "25",
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full max-w-xs shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)] relative"
    >
      <div
        className="bg-white flex items-center justify-between px-4 py-2 rounded-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-medium text-persian-blue">{state.title}</p>
        <img src="/assets/icons/caret.svg" alt="" className="w-6 h-6" />
      </div>
      <div
        className={cn(
          "absolute left-0 w-full top-12 rounded-br-2xl rounded-bl-2xl overflow-hidden opacity-0 invisible transition-opacity duration-300",
          { "opacity-100 visible": isOpen }
        )}
      >
        {options.map((item, i) => (
          <div
            onClick={() => {
              setState(item);
              setIsOpen(false);
            }}
            key={item.title}
            className={cn(
              "flex items-center justify-between h-[4.5rem] px-4 bg-white cursor-pointer hover:bg-zircon",
              {
                "border-b border-b-concrete": i + 1 !== options.length,
                "bg-zircon text-persian-blue": item.title === state.title,
              }
            )}
          >
            <p>{item.title}</p>
            <div
              className={cn(
                "text-sm font-medium px-3 py-0.5 bg-alabaster rounded-2xl",
                { "bg-periwinkle": item.title === state.title }
              )}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

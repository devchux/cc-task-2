import { useState } from "react";
import Checkbox from "./checkbox";
import { cn } from "../../utils/lib";
import Avatar from "../avatars/avatar";

interface IData {
  name: string;
  location: string;
  school: string;
  hashtags: string[];
  tags: string[];
  play?: number;
  programs?: number;
}

const Table = () => {
  const [sort, setSort] = useState("Qualified");
  const [checked, setChecked] = useState<number[]>([]);

  const data: IData[] = [
    {
      name: "Thomas Matt",
      location: "Edinburgh, UK",
      school: "Bachelor - Harvard University (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      tags: ["New York", "Marketing", "London"],
    },
    {
      name: "Thomas Matt",
      location: "Edinburgh, UK",
      school: "Bachelor - Harvard University (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      tags: ["New York", "Marketing", "London"],
    },
    {
      name: "Thomas Matt",
      location: "Edinburgh, UK",
      school: "Bachelor - Harvard University (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      tags: ["New York", "Marketing", "London"],
    },
    {
      name: "Thomas Matt",
      location: "Edinburgh, UK",
      school: "Bachelor - Harvard University (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      tags: ["New York", "Marketing", "London"],
    },
    {
      name: "Thomas Matt",
      location: "Edinburgh, UK",
      school: "Bachelor - Harvard University (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      tags: ["New York", "Marketing", "London"],
    },
    {
      name: "Ahmed Salman",
      location: "Edinburgh, UK",
      school: "Bachelor - Harvard University (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      tags: ["New York", "Marketing", "London"],
      play: 4,
      programs: 5,
    },
  ];

  const markAll = () => {
    const ids = data.map((_, i) => i);
    setChecked((prev) => (prev.length > 0 ? [] : ids));
  };

  const onCheck = (id: number) => {
    if (checked.includes(id)) {
      const format = checked.filter((x) => id !== x);
      setChecked(format);
    } else {
      setChecked([...checked, id]);
    }
  };

  return (
    <div className="bg-white px-4 py-2 rounded-2xl overflow-hidden">
      <div className="text-sm flex justify-between items-center">
        <div className="flex gap-8 items-center py-4">
          <Checkbox toggle={markAll} checked={checked.length === data.length} />
          <h4 className="font-semibold text-persian-blue">247 Candidates</h4>
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setSort("Qualified")}
            className={cn({
              "font-medium text-persian-blue": sort === "Qualified",
            })}
          >
            Qualified
          </button>
          <div className="w-0.5 h-[1.375rem] bg-[#F3F3F4]" />
          <button
            onClick={() => setSort("Task")}
            className={cn({
              "font-medium text-persian-blue": sort === "Task",
            })}
          >
            Task{" "}
            <span className="inline-flex items-center justify-center text-[0.625rem] text-center w-6 h-6 rounded-full bg-[#F7F8FD]">
              25
            </span>
          </button>
          <div className="w-0.5 h-[1.375rem] bg-[#F3F3F4]" />
          <button
            onClick={() => setSort("Disqualified")}
            className={cn({
              "font-medium text-persian-blue": sort === "Disqualified",
            })}
          >
            Disqualified{" "}
            <span className="inline-flex items-center justify-center text-[0.625rem] text-center w-6 h-6 rounded-full bg-[#F7F8FD]">
              78
            </span>
          </button>
        </div>
      </div>
      <hr />
      {data.map((item, i) => (
        <div key={i}>
          <div className="flex justify-between py-4">
            <div className="flex items-center gap-6 ">
              <Checkbox
                checked={checked.includes(i)}
                toggle={() => onCheck(i)}
              />
              <Avatar large />
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-semibold">{item.name}</h4>
                <p className="text-[0.625rem] font-medium">{item.location}</p>
                <p className="text-[0.625rem] font-light">{item.school}</p>
                <div className="text-[0.5rem] text-persian-blue flex gap-2">
                  {item.hashtags.map((x) => (
                    <p key={x}>{x}</p>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((x) => (
                    <div
                      key={x}
                      className="px-3 py-0.5 rounded-2xl bg-[#F3FAFC] text-[#037092] text-[0.5rem] font-medium"
                    >
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {item?.play && item?.programs ? (
              <div className="flex gap-2 h-fit">
                <div className="px-2 py-1 flex items-center gap-1 rounded-2xl bg-[#F7F8FD]">
                  <img
                    src="/assets/icons/play.png"
                    alt=""
                    className="w-[0.875rem] h-[0.875rem]"
                  />
                  <p className="text-[0.625rem] text-persian-blue">
                    {item?.play}
                  </p>
                </div>
                <div className="py-1 px-4 flex items-center gap-2 rounded-2xl bg-[#E3EBFF]">
                  <img
                    src="/assets/icons/play.png"
                    alt=""
                    className="w-[0.875rem] h-[0.875rem]"
                  />
                  <p className="text-[0.625rem] text-persian-blue">
                    {item?.programs} Programs
                  </p>
                </div>
              </div>
            ) : null}
          </div>
          {i + 1 !== data.length && <hr />}
        </div>
      ))}
    </div>
  );
};

export default Table;

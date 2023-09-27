const Filters = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="border-b border-b-concrete px-4 py-[1.12rem] text-sm flex justify-between items-center bg-white">
        <h4 className="font-medium">Filters</h4>
        <p className="font-light">0 Selected</p>
      </div>
      <div className="border-b border-b-concrete px-4 py-[1.12rem] text-sm flex justify-between items-center bg-white">
        <div className="flex items-center gap-2">
          <img src="/assets/icons/note.svg" alt="" className="w-4 h-4" />
          <p>Personal Information</p>
        </div>
        <img src="/assets/icons/caret.svg" alt="" className="w-[1.125rem] h-[1.125rem]" />
      </div>
      <div className="border-b border-b-concrete px-4 py-[1.12rem] text-sm flex justify-between items-center bg-white">
        <div className="flex items-center gap-2">
          <img src="/assets/icons/note.svg" alt="" className="w-4 h-4" />
          <p>Education</p>
        </div>
        <img src="/assets/icons/caret.svg" alt="" className="w-[1.125rem] h-[1.125rem]" />
      </div>
      <div className="border-b border-b-concrete px-4 py-[1.12rem] text-sm flex justify-between items-center bg-white">
        <div className="flex items-center gap-2">
          <img src="/assets/icons/note.svg" alt="" className="w-4 h-4" />
          <p>Work Experience</p>
        </div>
        <img src="/assets/icons/caret.svg" alt="" className="w-[1.125rem] h-[1.125rem]" />
      </div>
      <div className="border-b border-b-concrete px-4 py-[1.12rem] text-sm flex justify-between items-center bg-white">
        <div className="flex items-center gap-2">
          <img src="/assets/icons/note.svg" alt="" className="w-4 h-4" />
          <p>Advanced Filter</p>
        </div>
        <img src="/assets/icons/caret.svg" alt="" className="w-[1.125rem] h-[1.125rem]" />
      </div>
      <div className="px-4 py-[1.12rem] text-sm flex justify-between items-center bg-white">
        <div className="flex items-center gap-2">
          <img src="/assets/icons/note.svg" alt="" className="w-4 h-4" />
          <p>Activity Filter</p>
        </div>
        <img src="/assets/icons/caret.svg" alt="" className="w-[1.125rem] h-[1.125rem]" />
      </div>
    </div>
  );
};

export default Filters;

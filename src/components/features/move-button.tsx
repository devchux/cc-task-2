const MoveButton = () => {
  return (
    <div className="overflow-hidden rounded-lg flex gap-[0.0625rem] bg-white text-white">
      <button className="bg-persian-blue text-sm px-4 py-2">Move To Video Interview I</button>
      <button className="bg-persian-blue text-sm px-4 py-2">
        <img
          src="/assets/icons/caret-white.svg"
          alt=""
          className="w-4 h-4"
        />
      </button>
    </div>
  );
};

export default MoveButton;

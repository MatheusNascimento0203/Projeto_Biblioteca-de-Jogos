export default ({ title, cover, onRemove }) => {
  return (
    <div className="flex items-center gap-8 mt-8 w-96">
      <img className=" w-40 object-cover" src={cover} alt="" />
      <div>
        <h2 className="m-0 pb-4 font-bold text-3xl text-white">{title}</h2>
        <button
          onClick={onRemove}
          className="bg-[#1A1A1A]  w-36 rounded-lg text-white font-bold  hover:bg-gray-400 h-9"
        >
          Remover
        </button>
      </div>
    </div>
  );
};

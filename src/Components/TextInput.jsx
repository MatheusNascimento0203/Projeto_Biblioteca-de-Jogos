export default ({ value, setValue, label, id }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-white font-bold">
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        className="rounded-lg py-1 border-2 border-white bg-transparent text-white "
        value={value}
        onChange={(e) => {
          return setValue(e.target.value);
        }}
      />
    </div>
  );
};

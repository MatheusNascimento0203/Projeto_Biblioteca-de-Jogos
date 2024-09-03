import { useState } from "react";
import TextInput from "./TextInput";

export default ({ addGame }) => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };
  return (
    <form className="flex gap-10 items-end" onSubmit={handleSubmit}>
      <TextInput
        id={title}
        label={"Titulo"}
        value={title}
        setValue={setTitle}
      />
      <TextInput id={cover} label={"Capa"} value={cover} setValue={setCover} />
      <button
        type="submit"
        className="bg-[#1A1A1A]  w-56 rounded-lg text-white font-bold  hover:bg-gray-400 h-9"
      >
        Adicionar à biblioteca
      </button>
    </form>
  );
};

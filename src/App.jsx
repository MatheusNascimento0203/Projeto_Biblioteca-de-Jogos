import { useState } from "react";

function App() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => {
      const newStateAdd = [...state, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newStateAdd));
      return newStateAdd;
    });
  };

  const removeGame = (id) => {
    setGames((state) => {
      const newStateRemove = state.filter((game) => game.id !== id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newStateRemove));
      return newStateRemove;
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <div className="flex flex-col gap-10 pl-12 pt-12 ">
      <h1 className="font-bold text-5xl text-white">Biblioteca de Jogos</h1>
      <form className="flex gap-10 items-end" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-white font-bold">
            Título:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="rounded-lg py-1 border-2 border-white bg-transparent text-white "
            value={title}
            onChange={(e) => {
              return setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cover" className="text-white font-bold">
            Capa:
          </label>
          <input
            type="text"
            name="cover"
            id="cover"
            className="rounded-lg py-1 border-2 border-white bg-transparent text-white "
            value={cover}
            onChange={(e) => {
              return setCover(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-[#1A1A1A]  w-56 rounded-lg text-white font-bold  hover:bg-gray-400 h-9"
        >
          Adicionar à biblioteca
        </button>
      </form>
      <div className="flex flex-wrap flex-col">
        {games.map((game) => (
          <div key={game.id} className="flex items-center gap-8 mt-8 w-96">
            <img className=" w-40 object-cover" src={game.cover} alt="" />
            <div>
              <h2 className="m-0 pb-4 font-bold text-3xl text-white">
                {game.title}
              </h2>
              <button
                onClick={() => removeGame(game.id)}
                className="bg-[#1A1A1A]  w-36 rounded-lg text-white font-bold  hover:bg-gray-400 h-9"
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

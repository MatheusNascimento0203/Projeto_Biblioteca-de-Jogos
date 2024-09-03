import { useState } from "react";

export default () => {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });

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

  return { games, addGame, removeGame };
};

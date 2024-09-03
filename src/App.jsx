import Game from "./Components/Game";
import NewGameForm from "./Components/NewGameForm";
import userGameCollections from "./hooks/userGameCollections";

function App() {
  const { games, addGame, removeGame } = userGameCollections();

  return (
    <div className="flex flex-col gap-10 pl-12 pt-12 ">
      <h1 className="font-bold text-5xl text-white">Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="flex flex-wrap flex-col">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => {
                removeGame(game.id);
              }}
            />
          ))
        ) : (
          <h2 className="font-bold text-2xl text-white">
            Você ainda não possue Jogos. Adicione seus jogos!
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;

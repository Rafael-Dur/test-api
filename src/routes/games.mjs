import express from "express";
const router = express.Router();

// Sample data (tasks)
let games = [
  {
    id: "1",
    title: "Football",
    description:
      "A game where two teams with 11 players per team play against each other",
    players: "22",
    categories: "Men / Women",
  },
  {
    id: "2",
    title: "Basketball",
    description:
      "A game where 2 teams with 5 huge tall players compite against each other",
    players: "10",
    categories: "Men / Women",
  },
  {
    id: "3",
    title: "Tennis",
    description: "A game which can be played in singles mode or doubles mode",
    players: "2/4",
    categories:
      "Men - Singles & Doubles / Women - Singles & Doubles / Mixed - Doubles",
  },
  {
    id: "4",
    title: "Boxing",
    description: "A 1 vs 1 fight",
    players: "2",
    categories: "Men / Women, several divisions based on weight for both",
  },
  {
    id: "5",
    title: "Volleyball",
    description: "2 teams, a net, and a ball",
    players: "12",
    categories: "Men / Women",
  },
  {
    id: "6",
    title: "Fencing",
    description: "The french way of the sword",
    players: "2",
    categories: "Men / Women",
  },
  {
    id: "7",
    title: "Karate",
    description: "Japanese martial art",
    players: "2",
    categories: "Men / Women",
  },
  {
    id: "8",
    title: "Taekwondo",
    description: "Korean martial art, heavily leg focused",
    players: "2",
    categories: "Men / Women",
  },
];

// GET all games
router.get("/games", (req, res) => {
  res.json(games);
});

// GET a game by ID
router.get("/games/:gameId", (req, res) => {
  const gameId = req.params.gameId;
  const game = games.filter((game) => game.id === gameId);
  res.json(game);
});

// POST a new game
router.post("/games", (req, res) => {
  const game = req.body;
  game.id = (games.length + 1).toString();
  games.push(game);
  res.status(201).json(games);
});

// DELETE a game by ID
router.delete("/games/:gameId", (req, res) => {
  const gameId = req.params.gameId;
  games = games.filter((game) => game.id !== gameId);
  res.sendStatus(204).json(games);
});

// PUT (update) a game by ID
router.put("/games/:gameId", (req, res) => {
  const gameId = req.params.gameId;
  const updatedGame = req.body;

  games = games.map((game) => {
    if (game.id === gameId) {
      return { ...games, ...updatedGame, id: gameId };
    }
    return game;
  });

  res.json(games);
});

export default router;

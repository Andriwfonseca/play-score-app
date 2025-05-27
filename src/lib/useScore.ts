import { useState } from "react";

interface TeamScore {
  team1: number;
  team2: number;
}

interface TeamWins {
  team1: number;
  team2: number;
}

interface GameState {
  scores: TeamScore;
  wins: TeamWins;
  isGameOver: boolean;
  winner: "team1" | "team2" | null;
}

export function useScore(
  initialScore: TeamScore = { team1: 0, team2: 0 },
  scoreLimit: number = 100
) {
  const [state, setState] = useState<GameState>({
    scores: initialScore,
    wins: { team1: 0, team2: 0 },
    isGameOver: false,
    winner: null,
  });

  const addPoint = (team: "team1" | "team2", points: number) => {
    if (state.isGameOver) return;

    setState((prev) => {
      const newScore = prev.scores[team] + points;
      if (newScore >= scoreLimit) {
        return {
          ...prev,
          scores: { ...prev.scores, [team]: newScore },
          wins: { ...prev.wins, [team]: prev.wins[team] + 1 },
          isGameOver: true,
          winner: team,
        };
      }
      return {
        ...prev,
        scores: { ...prev.scores, [team]: newScore },
      };
    });
  };

  const subtractPoint = (team: "team1" | "team2", points: number) => {
    if (state.isGameOver) return;

    setState((prev) => ({
      ...prev,
      scores: {
        ...prev.scores,
        [team]: Math.max(0, prev.scores[team] - points),
      },
    }));
  };

  const resetGame = () => {
    setState((prev) => ({
      ...prev,
      scores: initialScore,
      isGameOver: false,
      winner: null,
    }));
  };

  const resetAll = () => {
    setState({
      scores: initialScore,
      wins: { team1: 0, team2: 0 },
      isGameOver: false,
      winner: null,
    });
  };

  return {
    scores: state.scores,
    wins: state.wins,
    isGameOver: state.isGameOver,
    winner: state.winner,
    addPoint,
    subtractPoint,
    resetGame,
    resetAll,
  };
}

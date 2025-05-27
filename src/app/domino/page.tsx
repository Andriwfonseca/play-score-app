"use client";

import { useScore } from "@/lib/useScore";
import { ScoreCard } from "@/components/ScoreCard";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export default function Domino() {
  const {
    scores,
    wins,
    isGameOver,
    winner,
    addPoint,
    subtractPoint,
    resetGame,
    resetAll,
  } = useScore({ team1: 0, team2: 0 }, 100);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-purple-900 p-4 sm:p-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 sm:mb-12">
        Marcador de Dominó
      </h1>
      {isGameOver && (
        <Alert className="mb-8 max-w-md bg-white shadow-md rounded-lg">
          <AlertTitle className="text-purple-800">Fim de Jogo!</AlertTitle>
          <AlertDescription className="text-gray-600">
            {winner === "team1" ? "Time 1" : "Time 2"} venceu com 100 pontos ou
            mais!
          </AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
        <ScoreCard
          teamName="Time 1"
          score={scores.team1}
          wins={wins.team1}
          onAddPoint={(points) => addPoint("team1", points)}
          onSubtractPoint={() => subtractPoint("team1", 1)}
          isGameOver={isGameOver}
          mode="domino"
        />
        <ScoreCard
          teamName="Time 2"
          score={scores.team2}
          wins={wins.team2}
          onAddPoint={(points) => addPoint("team2", points)}
          onSubtractPoint={() => subtractPoint("team2", 1)}
          isGameOver={isGameOver}
          mode="domino"
        />
      </div>
      <div className="mt-8 w-full mx-10 sm:mt-12 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
        <div className="flex flex-nowrap gap-2 justify-center">
          <Button
            onClick={resetGame}
            disabled={!isGameOver}
            className="w-1/2 min-w-0 px-1 sm:px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg cursor-pointer"
          >
            Novo Jogo
          </Button>
          <Button
            onClick={resetAll}
            className="w-1/2 min-w-0 px-1 sm:px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg cursor-pointer"
          >
            Resetar Tudo
          </Button>
        </div>
        <Link href="/" className="w-full sm:w-auto px-1 sm:px-0">
          <Button
            variant="outline"
            className="w-full border-purple-600 text-purple-600 hover:bg-purple-100 font-medium py-2 rounded-lg cursor-pointer"
          >
            Voltar
          </Button>
        </Link>
      </div>
    </main>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface ScoreCardProps {
  teamName: string;
  score: number;
  wins: number;
  onAddPoint: (points: number) => void;
  onSubtractPoint: (points: number) => void;
  isGameOver: boolean;
  mode: "truco" | "domino";
}

export function ScoreCard({
  teamName,
  score,
  wins,
  onAddPoint,
  onSubtractPoint,
  isGameOver,
  mode,
}: ScoreCardProps) {
  const [pointsInput, setPointsInput] = useState<string>("");

  const pointOptions = [
    { label: "1 Ponto", points: 1 },
    { label: "Truco (3)", points: 3 },
    { label: "Seis (6)", points: 6 },
    { label: "Nove (9)", points: 9 },
    { label: "Doze (12)", points: 12 },
  ];

  const handleAddPoints = () => {
    const points = parseInt(pointsInput, 10);
    if (!isNaN(points) && points > 0) {
      onAddPoint(points);
      setPointsInput("");
    }
  };

  return (
    <Card className="w-80 sm:w-96 bg-white shadow-xl rounded-xl">
      <CardHeader className="bg-purple-100 rounded-t-xl">
        <CardTitle className="text-2xl font-semibold text-purple-800">
          {teamName}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center p-6">
        <p className="text-5xl font-bold text-purple-800">{score}</p>
        <p className="text-lg text-gray-600 mt-2">Vitórias: {wins}</p>
        <div className="mt-6 w-full">
          {mode === "truco" ? (
            <div className="grid grid-cols-2 gap-3">
              {pointOptions.map(({ label, points }) => (
                <Button
                  key={label}
                  onClick={() => onAddPoint(points)}
                  disabled={isGameOver}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg cursor-pointer"
                >
                  {label}
                </Button>
              ))}
            </div>
          ) : (
            <div className="flex space-x-3">
              <Input
                type="number"
                value={pointsInput}
                onChange={(e) => setPointsInput(e.target.value)}
                placeholder="Digite pontos"
                disabled={isGameOver}
                className="w-32 border-purple-600 focus:ring-purple-600 text-gray-800 bg-white cursor-pointer"
              />
              <Button
                onClick={handleAddPoints}
                disabled={isGameOver || !pointsInput}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg cursor-pointer"
              >
                Adicionar
              </Button>
            </div>
          )}
        </div>
        <div className="mt-6">
          <Button
            variant="outline"
            onClick={() => onSubtractPoint(1)}
            disabled={isGameOver || score === 0}
            className="border-purple-600 text-purple-600 hover:bg-purple-100 cursor-pointer"
          >
            -1
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

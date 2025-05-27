import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-purple-900 p-4 sm:p-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 sm:mb-12">
        Escolha o Marcador
      </h1>
      <div className="flex flex-col space-y-4 sm:space-y-6">
        <Link href="/truco">
          <Button
            size="lg"
            className="w-64 sm:w-72 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg cursor-pointer"
          >
            Marcador de Truco
          </Button>
        </Link>
        <Link href="/domino">
          <Button
            size="lg"
            className="w-64 sm:w-72 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg cursor-pointer"
          >
            Marcador de Dominó
          </Button>
        </Link>
      </div>
    </main>
  );
}

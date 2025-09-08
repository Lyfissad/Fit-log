import ExerciseTiles from "../components/ExerciseTiles";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

export default function Excercises() {
  return (
    <div className="bg-grayBlack h-screen w-full pt-5 text-text-pri">
      <h1 className="text-bold text-4xl p-8">Excercises</h1>
      <div className="flex">
        <Input
          className={`w-[70%] ml-5 mb-10`}
          type="text"
          placeholder="Search"
        />
        <button
          className={`bg-priAccent cursor-pointer mb-9 w-[15%] items-center rounded-xl mx-auto border-2 border-borders`}
        >
          <FaSearch className="size-5 m-auto" />
        </button>
      </div>
      <ExerciseTiles />
    </div>
  );
}

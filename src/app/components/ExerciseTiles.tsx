"use client";
import { Exercise } from "../services/ExerciseApi";
import ExerciseCards from "./ExerciseCards";
import getExercises from "../services/ExerciseApi";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ExerciseTiles() {
  const [Exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const loader = useRef<HTMLDivElement | null>(null);

  const loadingRef = useRef(false);
  const offsetRef = useRef(0);

  const loadMore = async () => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setLoading(true);

    const exer = await getExercises(offsetRef.current, 10);
    setExercises((prev) => [...prev, ...exer]);
    setOffset((prev) => prev + 10);
    console.log(offset);
    offsetRef.current += 10;
    loadingRef.current = false;
    setLoading(false);
  };
  console.log(loading);
  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const currentLoader = loader.current;

    if (!currentLoader) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { rootMargin: "200px" },
    );

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, []);

  return (
    <div className="grid min-h-screen space-y-2 px-9 items-center justify-center w-full">
      {Exercises.map((item, index) => (
        <ExerciseCards
          key={index}
          id={item.id}
          title={item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}
          target={item.target}
        />
      ))}
      {loading ? (
        <AiOutlineLoading3Quarters className="fill-text-pri my-6 relative z-50 flex items-center justify-center size-15 mx-auto animate-spin" />
      ) : null}
      <div
        ref={loader}
        className="relative z-0 h-30 w-full flex items-center"
      ></div>
    </div>
  );
}

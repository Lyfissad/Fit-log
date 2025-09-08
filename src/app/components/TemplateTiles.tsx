import TemplateCards from "./TemplateCards";
import getExercises from "../services/ExerciseApi";

export default async function TemplateTiles() {
  const exer = await getExercises();
  const tiles = exer.map((item) => (
    <TemplateCards
      key={item.id}
      id={item.id}
      title={item.name}
      target={item.target}
    />
  ));
  return (
    <div className="grid grid-cols-2 gap-4 px-8 my-5 justify-center w-full">
      {tiles}
    </div>
  );
}

import { LEGENDS } from "~/helpers";

export const Legend: React.FC = () => {
  return (
    <div className="absolute right-10 top-10">
      <h3 className="text- mb-3 text-center text-2xl text-white">
        Universe Level 0
      </h3>
      <div className="flex flex-col gap-2 rounded-lg border-4 border-slate-500 bg-white p-6">
        {LEGENDS.map(({ color, name, level }) => (
          <div key={name} className="flex items-center gap-4">
            <span className={`h-6 w-10 ${color} rounded-lg border-2`}></span>
            <span>{name}</span>
            <span className="ml-auto">Level: {level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

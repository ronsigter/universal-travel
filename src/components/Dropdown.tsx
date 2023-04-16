import { LEGENDS } from "~/helpers";

export const Dropdown = () => {
  return (
    <div className="absolute left-10 top-10 z-50 flex w-52 flex-col rounded-2xl border-2 bg-white py-2">
      {LEGENDS.map(({ name }) => (
        <button key={name} className="px-4 py-2 text-left ">
          {name}
        </button>
      ))}
    </div>
  );
};

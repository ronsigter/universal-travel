import { LEGENDS } from "~/helpers";

interface DropdownProps {
  label: string;
  onChange: (data: { color: string; level: number }) => void;
  isOpen: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  onChange,
  isOpen,
}) => {
  const display = isOpen ? "flex" : "hidden";

  return (
    <div
      className={`${display} absolute left-10 top-10 z-50  w-52 flex-col overflow-hidden rounded-2xl border-2 bg-white`}
    >
      <div className="flex justify-center py-2">
        <span className="text-lg font-bold">{label}</span>
      </div>
      {LEGENDS.map(({ name, color, level }) => (
        <button
          key={name}
          className="px-4 py-2 text-left hover:bg-slate-400 hover:text-neutral-50"
          onClick={() => onChange({ color, level })}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

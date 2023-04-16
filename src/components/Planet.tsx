import { useRef, useState } from "react";
import { Dropdown } from "./Dropdown";
import { useOnClickOutside } from "~/hooks/useOnClickOutside";
import { useUniversalCounter } from "~/contexts";

interface Planet {
  color: string;
  size: [string, string];
  name: string;
}

type HandleOnChangeProps = (data: { color: string; level: number }) => void;

export const Planet: React.FC<Planet> = (props) => {
  const { color, size, name } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [levelColor, setLevelColor] = useState({ color, level: 0 });
  const planetRef = useRef<HTMLDivElement>(null);
  const { changePlanetValue } = useUniversalCounter();

  const handleOnChange: HandleOnChangeProps = ({ color, level }) => {
    setLevelColor({ color, level });
    changePlanetValue({ planet: name, value: level });
  };

  useOnClickOutside(planetRef, () => {
    setIsOpen(false);
  });

  return (
    <div
      className={`relative cursor-pointer ${size[0]} ${size[1]} rounded-full ${levelColor.color} flex items-center justify-center `}
      onClick={() => setIsOpen(!isOpen)}
      role="presentation"
      ref={planetRef}
    >
      <span className="absolute -top-8 font-bold text-slate-50">{name}</span>
      <Dropdown isOpen={isOpen} label={name} onChange={handleOnChange} />
    </div>
  );
};

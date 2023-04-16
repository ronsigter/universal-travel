import { useState } from "react";
import { Dropdown } from "./Dropdown";

interface Planet {
  color: string;
  size: [string, string];
  name: string;
}

export const Planet: React.FC<Planet> = (props) => {
  const { color, size, name } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative cursor-pointer ${size[0]} ${size[1]} rounded-full ${color} flex items-center justify-center`}
      onClick={() => setIsOpen(!isOpen)}
      role="presentation"
    >
      <span>{name}</span>
      {isOpen && <Dropdown />}
    </div>
  );
};

import { createContext, useContext, useRef, useState } from "react";

type ChangePlanetValueProps = (data: { planet: string; value: number }) => void;
type ContextProps = {
  totalValue: number;
  changePlanetValue: ChangePlanetValueProps;
};

const UnversalCounterContext = createContext<ContextProps>({
  totalValue: 0,
  changePlanetValue: () => null,
});

type ProviderProps = {
  children: React.ReactElement;
};

export const UniversalCounterProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  const [totalValue, setTotalValue] = useState(0);

  // Save the scoring of each planet to a reference
  const planetScoring = useRef<{ [key: string]: number }>({});

  const changePlanetValue: ChangePlanetValueProps = ({ planet, value }) => {
    planetScoring.current = {
      ...planetScoring.current,
      [planet]: value,
    };

    // compute each planets scores
    const total = Object.keys(planetScoring.current).reduce((acc, key) => {
      const value = planetScoring.current[key] || 0;
      return acc + value;
    }, 0);

    setTotalValue(total);
  };

  return (
    <UnversalCounterContext.Provider value={{ totalValue, changePlanetValue }}>
      {children}
    </UnversalCounterContext.Provider>
  );
};

export const useUniversalCounter = () => useContext(UnversalCounterContext);

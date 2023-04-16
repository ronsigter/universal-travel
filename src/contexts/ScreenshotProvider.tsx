import {
  createContext,
  useContext,
  useCallback,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import html2canvas from "html2canvas";

type ContextProps = {
  componentRef: HTMLElement | null;
  setComponentRef: Dispatch<SetStateAction<HTMLElement | null>>;
  captureScreenshot: () => Promise<void>;
};

const ScreenshotContext = createContext<ContextProps>({
  componentRef: null,
  setComponentRef: () => null,
  captureScreenshot: () => Promise.resolve(),
});

type ProviderProps = {
  children: React.ReactElement;
};

export const ScreenshotProvider: React.FC<ProviderProps> = ({ children }) => {
  const [componentRef, setComponentRef] = useState<HTMLElement | null>(null);

  const captureScreenshot = useCallback(async () => {
    if (componentRef) {
      const canvas = await html2canvas(componentRef);
      const link = document.createElement("a");

      link.download = "universal-travel.png";
      link.href = canvas.toDataURL("image/png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [componentRef]);

  return (
    <ScreenshotContext.Provider
      value={{ componentRef, setComponentRef, captureScreenshot }}
    >
      {children}
    </ScreenshotContext.Provider>
  );
};

type UseScreenshot = {
  setComponentRef: Dispatch<SetStateAction<HTMLElement | null>>;
  loading: boolean;
  handleCaptureScreenshot: () => Promise<void>;
};

export const useScreenshot = (): UseScreenshot => {
  const { setComponentRef, captureScreenshot } = useContext(ScreenshotContext);
  const [loading, setLoading] = useState(false);

  const handleCaptureScreenshot = useCallback(async () => {
    setLoading(true);
    await captureScreenshot();
    setLoading(false);
  }, [captureScreenshot]);

  return { setComponentRef, handleCaptureScreenshot, loading };
};

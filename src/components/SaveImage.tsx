import { useScreenshot } from "~/contexts";

export const SaveImage = () => {
  const { handleCaptureScreenshot, loading } = useScreenshot();

  return (
    <div className="hidden justify-center py-4 lg:flex">
      <button
        className="rounded-2xl bg-slate-500 px-4 py-2"
        onClick={() => {
          void handleCaptureScreenshot();
        }}
        disabled={loading}
      >
        <span className="text-slate-50">
          {loading ? "Getting image..." : "Save Image"}
        </span>
      </button>
    </div>
  );
};

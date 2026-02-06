import { useNavigate } from "@tanstack/react-router";

export const Yes = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-lvh w-full flex-col items-center justify-center gap-4 bg-[url(/background.png)] bg-cover text-white">
      <h1 className="text-4xl font-bold">YAYAYYAYA THANK YOU!!!</h1>

      <button
        className="absolute top-4 right-4 rounded-md bg-white px-4 py-2 font-bold text-black"
        onClick={() => {
          navigate({
            to: "/",
          });
        }}
      >
        Home
      </button>
    </div>
  );
};

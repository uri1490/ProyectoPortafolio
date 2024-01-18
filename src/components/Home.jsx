import { Credencial } from "./Credencial";
export const Home = () => {
  return (
    <div
      id="home"
      className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-black w-full flex items-center justify-center scroll-mt-[5vh] snap-start"
    >
      <Credencial></Credencial>
    </div>
  );
};

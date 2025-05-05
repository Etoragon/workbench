export const NavBar = ({
  setShowSidebar,
}: {
  setShowSidebar: (show: boolean) => void;
}) => {
  return (
    <div className="flex flex-row w-[100%] h-[100%] bg-cyan-700 items-center">
      <img
        src="/src/assets/menu-lines.svg"
        className="h-[50%] px-5 hover:cursor-pointer"
        alt="Menu Option Lines"
        onClick={() => setShowSidebar(true)}
      />
    </div>
  );
};

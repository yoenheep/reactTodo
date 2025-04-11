import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function DarkButton() {
  const { theme, changeThemes } = useContext(ThemeContext);

  return (
    <button onClick={changeThemes} className="flex items-center justify-center w-full px-4 py-2 rounded-md bg-pink-200 text-stone-700 hover:bg-pink-300 hover:text-stone-100  dark:text-white  dark:bg-pink-700 dark:hover:bg-pink-600">
      {theme === "dark" ? "라이트 모드" : "다크 모드"}
    </button>
  );
}

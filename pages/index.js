import { toggleTheme } from "@/Features/ThemeSlice";
import { colors } from "@/themes";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state) => state.themes.theme);
  const dispatch = useDispatch();

  let activeColors = colors[theme];

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center ">
        <div
          className={` w-9/10`}
          style={{
            backgroundColor: activeColors.primary,
            color: activeColors.tertiary,
          }}
        >
          <button onClick={handleThemeToggle}>Toggle Theme ({theme})</button>
        </div>
      </div>
    </>
  );
}

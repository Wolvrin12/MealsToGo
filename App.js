import { ThemeProvider } from "styled-components";
import { theme } from "./src/utils/theme/index";
import { Restaurants } from "./src/features/restaurants/restaurants";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Restaurants></Restaurants>
      </ThemeProvider>
    </>
  );
}

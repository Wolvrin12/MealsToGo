import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme/index";
import { Restaurants } from "./src/features/restaurants";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Restaurants></Restaurants>
      </ThemeProvider>
    </>
  );
}

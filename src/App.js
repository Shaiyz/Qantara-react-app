import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;

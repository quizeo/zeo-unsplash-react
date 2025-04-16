import SearchForm from "./SearchForm";
import Gallery from "./Gallery";
import ThemeToggle from "./ThemeToggle";
import { useGlobalContext } from "./context";

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;

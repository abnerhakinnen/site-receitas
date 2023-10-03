import "./index.css";
import Header from "./componentes/Header/Header";
import Feed from "./componentes/Feed/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchMeals }  from "./pages/SearchMeals/SearchMeals";
import SearchLetter from "./pages/SearchLetter/SearchLetter"; 
import { SearchIngredients } from "./pages/SearchIngredients/SearchIngredients"
import IngredientRecipes from "./pages/SearchIngredients/IngredientRecipes";
import RecipeDetails from './pages/RecipeDetails/RecipeDetails';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/search" element={<SearchMeals />} />
          <Route path="/por-letra" element={<SearchLetter />} />
          <Route path="/ingredientes" element={<SearchIngredients />} />
          <Route path="/ingredientes/:ingredient" element={<IngredientRecipes />} />
          <Route path="/recipe/:id" element={<RecipeDetails/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

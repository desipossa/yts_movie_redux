import ListDefault from "./pages/ListDefault";
import './movie.scss'
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Detail from "./pages/Detail";


//https://api.coinpaprika.com/v1/tickers 이건 비트코인...
//https://www.imdb.com/feature/genre/


const defaultgenre = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History", "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Short", "Sport", "Superhero", "Thriller", "War", "Western"]


const App = () => {

    return (
        <div>

            <Header genre={defaultgenre} />
            <Routes>

                <Route path="/main" element={<Main />}>

                    {
                        defaultgenre.map((it, idx) => {
                            return (
                                <Route path={it} element={<ListDefault genre={it} limit={20} pagenum={1} />}>
                                    <Route path="detail/:id" element={<Detail />} />
                                </Route>
                            )
                        })
                    }

                </Route>
            </Routes>
        </div>
    )
}

export default App
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { fetchMutiplePokemonById } from "./RTK/thunk";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorites = lazy(() => import("./pages/Favorites"));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMutiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="border-t-[50px] border-t-[red] bg-black text-[40px] text-[white] text-center">
        포켓몬 도감
      </h1>
      <nav className="bg-white flex gap-[10px] justify-center py-[10px] border-b-[3px] border-b-black">
        <Link to={"/"}>메인</Link>
        <Link to={"favorite"}>찜목록</Link>
        <div>
          <span>🔎</span>
          <input
            onChange={(e) => {
              e.target.value.trim() !== ""
                ? navigate(`/search?pokemon=${e.target.value}`)
                : navigate("/");
            }}
            className="w-[120px] border-b border-[darkgray] px-2"
          />
        </div>
      </nav>
      <main className="flex flex-wrap gap-[10px] justify-center pt-[20px] pb-[20px]">
        <Suspense fallback={<div className="text-[40px]">로딩중...</div>}>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/detail/:pokemonId"} element={<Detail />} />
            <Route path={"/search?"} element={<Search />} />
            <Route path={"/favorite"} element={<Favorites />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;

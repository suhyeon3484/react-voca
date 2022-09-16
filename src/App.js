import Header from "./component/Header";
import DayList from "./component/Daylist";
import Day from "./component/Day";
import { BrowserRouter, Route, Routes} from "react-router-dom"; 

function App() {
  return (
    // 스위치 외부는 모든 페이지에 공통으로 노출됨
    <BrowserRouter>
    <div className="App">
      <Header />
      {/* 스위치 내부는 각각 url에 따라 다른 페이지를 보여즘 */}
      <Routes>
        <Route path="/">
          <DayList />
        </Route>
        <Route path="/day">
          <Day />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
 
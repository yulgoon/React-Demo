/*
// 초기 App.jsx
import './App.css'

// index.html이 처음 요청으로 반환되는 페이지
// html은 더 이상 만들지 않습니다. => SPA
// index.html => main.jsx(index.js) 실행
function App() {

  return (
    <>

    </>
  )
}

export default App
*/

import './App.css'
import Garage, {Car} from "./basic/List.jsx";
import {Carport} from "./basic/Objects.jsx";

function App() {

    return (
        <>
            {/*brand라는 임의 프로퍼티 설정*/}
            <Car brand="소나타"/>
            <Garage/>
            <Carport/>
        </>
    )
}

export default App
// 모두 같은 표현
// const Hello = function(){
//     <p>Hello</p>;
// }

// const Hello = () => {
//     <p>Hello</p>;
// }

import World from "./Word";
import styles from "./Hello.module.css";

export default function Hello() {
    function showNmae() {
        console.log('Mike');
    }
    
    return (
    <div>
    <h1>
        Hello
    </h1>
    {/* 방법 2가지 */}
    <button onClick={showNmae}>Show name</button>
    
    {/*  매개변수 전달하기 편함 */}
    <button 
    onClick={() => {
        console.log(30);
    }}>
        Show age
    </button> 
    </div>
    );
}


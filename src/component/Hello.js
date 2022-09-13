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
    return (
    <div>
    <h1 style={
        {
            color : "#f00",
            borderRight : '2px solid #000',
            marginBottom : '50px',
            opacity : 0.5,
        }
    }>Hello </h1>
    <div className={styles.box}>Hello</div>
    </div>
    );
}


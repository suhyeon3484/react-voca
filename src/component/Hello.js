// 모두 같은 표현

import World from "./Word";

// const Hello = function(){
//     <p>Hello</p>;
// }

// const Hello = () => {
//     <p>Hello</p>;
// }

export default function Hello() {
    return (
    <div>
    <h1>Hello</h1>
    <World />
    <World />
    </div>
    );
}


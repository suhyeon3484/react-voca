// useState 사용할거면 꼭 import 해야 함
import { useState } from "react";

export default function Hello() {
    // let name = "Mike";
    // 배열구조 사용 [state 명(변수명), state 변환해주는 함수], useState(초기값)
    const [name, setName] = useState('Mike');
    
    function changeName() {
        // mike이면 jane으로 jane이면 mike로 바꿔줌
        const newName = name === "Mike" ? "Jane" : "Mike";
        // document.getElementById("name").innerText = name;
        setName(newName);
    }

    return (
    <div>
    <h2 id='name'>{name}</h2>
    <button onClick={changeName}>change</button>
    </div>
    );
}


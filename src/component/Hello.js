// useState 사용할거면 꼭 import 해야 함
import { useState } from "react";

export default function Hello(props) {
    console.log(props);

    // 배열구조 사용 [state 명(변수명), state 변환해주는 함수], useState(초기값)
    const [name, setName] = useState('Mike');
    const [age, setAge] = useState(props.age);


    return (
    <div>
    <h2 id='name'>{name}({age})</h2>
    <button onClick={ () => {
        const newName = name === "Mike" ? "Jane" : "Mike";
        setName(newName);
        setAge(age + 1);
    }}>
        change
    </button>
    </div>
    );
}


import React, {useState} from 'react';

const Nemo = (props) => {

    const [count, setCount] = useState(3);

    const addNemo = () => {
        setCount(count + 1);
    };

    const removeNemo = () => {
        setCount(count > 0 ? count - 1 : 0);
    };


    const nemo_count = Array.from({ length: count }, (v, i) => i);
    return (
        <div className="App">
            {nemo_count.map((num, idx) => {
                return (
                    <div
                        key={idx}
                        style={{
                            width: "150px",
                            height: "150px",
                            backgroundColor: "#ddd",
                            margin: "10px"
                        }}
                    >
                        nemo
                    </div>
                );
            })}
            <div>
                <button onClick={addNemo}></button>
                <button onClick={removeNemo}></button>
            </div>
        </div>
    );
};

export default Nemo;
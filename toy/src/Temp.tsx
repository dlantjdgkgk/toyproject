import { useState } from 'react';
import Title from './Title';
import './temp.css';

// 기본 요구사항
// - 단어 맞추면 해당 단어는 화면에서 사라지기    oooo
// - 단어를 맞추면 점수를 올리기
// - 카운트 만들기
const Temp = () => {
    const [words, setWords] = useState([
        { word: 'apple', score: 50 },
        { word: 'banana', score: 40 },
        { word: 'cat', score: 30 },
        { word: 'duck', score: 20 },
        { word: 'elephant', score: 10 },
        { word: 'fox', score: 100 },
    ]);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    const [time] = useState({ minute: 3, second: 0 });
    const handleChange = (e: any) => {
        setValue(e.target.value);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const wordsCopy = [...words];
        for (let i = 0; i < wordsCopy.length; i++) {
            if (wordsCopy[i].word === value) {
                setCount(count + wordsCopy[i].score);
                wordsCopy.splice(i, 1);
            }
        }
        setWords(wordsCopy);
        setValue('');
    };
    return (
        <>
            <Title
                words={words}
                count={count}
                time={time}
                GameEnding={words.length === 0}
            />
            <form onSubmit={handleSubmit}>
                <input type='text' value={value} onChange={handleChange} />
                <button>입력</button>
            </form>
        </>
    );
};

export default Temp;

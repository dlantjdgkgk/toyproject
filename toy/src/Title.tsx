import './title.css';
import Timer from './Timer';
export interface ITime {
    minute: number;
    second: number;
}
interface IProps {
    // Ipros = interface props 라는 뜻
    count: number;
    time: ITime;
    words: object[];
    GameEnding: boolean;
}

const Title = (props: IProps) => {
    return (
        <header>
            <div>
                <span>
                    <strong>점수 : {props.count} </strong>
                </span>
                <span>
                    <strong>타이핑 게임 만들기</strong>
                </span>
                <span>
                    <strong>
                        시간 :
                        <Timer
                            time={props.time}
                            GameEnding={props.GameEnding}
                        />
                    </strong>
                </span>
            </div>
            {props.words.map((wr: any) => {
                return (
                    <p key={wr.word}>
                        <div className='block'>
                            <span>{wr.word}</span>
                        </div>
                    </p>
                );
            })}
        </header>
    );
};

export default Title;

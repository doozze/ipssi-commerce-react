import { useEffect, useState } from 'react';
import { Button } from '../Button';

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [info, setInfo] = useState()

    useEffect(() => {
        if (counter % 2 === 0) {
            setInfo("Votre compteur est pair");
        } else {
            setInfo("Votre compteur est impair");
        }
    }, [counter])

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <p>{counter}</p>
            <p>{info}</p>
            <Button value="+" onClick={handleIncrement}></Button>
            <Button value="-" onClick={handleDecrement}></Button>
        </div>
    
    )
}
import {Car} from './List.jsx'

export function Carport() {
    const cars = [
        {id: 1, brand: '소나타'},
        {id: 2, brand: 'k9'},
        {id: 3, brand: '티볼리'}
    ]

    return (
        <>
            <h1>우리집 차고에 있는 차종은?</h1>
            <ul>
                {cars.map((car) =>
                    <Car key={ car.id} brand={ car.brand}/>
                )}
            </ul>
        </>
    )
}
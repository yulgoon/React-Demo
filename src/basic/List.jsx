/* 함수 컴포넌트 예제 */
export function Car(props) {
    return <li>I am a {props.brand}</li>
}

function Garage() {
    const cars = ['Ford', 'BMW', 'Audi', 'Hyundai', 'Subaru']
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                { cars.map((car, i) =>
                    <Car key={i} brand={car}/>
                )}
            </ul>
        </>
    )
    /* map method로 cars 배열의 요소값을 Car component props에 전달 => 여러 개의 Car components를 리턴*/
}

export default Garage
import {bookables} from "../../static.json"
import {useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

function BookList() {
    // console.log('bookables: ', bookables)
    const group = 'Rooms'
    // const group = 'Kit'

    // let bookableIndex = 1    // 상태 값이 1로 설정되고 일반적인 방법으로 changeBookable()를 호출하여 상태를 변화시켜도 렌더링 되지 않습니다. 즉, 제대로 동작 안 합니다.
    const bookableGroup = bookables.filter(b => (b.group === group))
    
    // 상태값 관리를 해야할 변수 bookableIndex
    // setBookableIndex: useState가 리턴해 주는 메서드 => 값 변경 메서드 => 값 변경을 react에서 인식해야 새로 렌더링을 합니다.
    // const [bookableIndex, setBookableIndex] = useState() // useState()에 초깃값을 주지 않으면 bookableIndex가 undefined이며, 첫 렌더링에 선택된 곳이 없게 됩니다.
    const [bookableIndex, setBookableIndex] = useState(0) // bookableIndex의 초깃값으로 0을 지정합니다.

    // function changeBookable(selectedIndex) {
    //     bookableIndex = selectedIndex // bookableIndex에 onClick 상태 변화를 대입하더라도 react에서는 상태 변화를 인식하지 않습니다. 따라서, 렌더링 되지 않으므로 useState hook을 사용하여야 합니다.
    // }

    function nextBookableIndex() {
        setBookableIndex((i) => (i+1) % bookableGroup.length)
    }

    function prevBookableIndex() {
        // if(bookableIndex === 0) setBookableIndex(3)
        // else setBookableIndex((i) => (i-1) % bookableGroup.length)
        bookableIndex === 0 ? setBookableIndex(bookableGroup.length-1) : setBookableIndex((i) => (i-1) % bookableGroup.length)
    }

    return (
        <div>
            <ul className='items-list-nav'>
                {bookableGroup.map((b, i) => (
                    <li key={b.id}
                        className={i === bookableIndex ? 'selected' : null}>
                        <button className='btn' onClick={() => setBookableIndex(i)}>
                            {b.title}
                        </button>
                    </li>
                ))}
            </ul>
            <p>
                <button className="btn" onClick={ prevBookableIndex}>
                    <FaArrowLeft/><span>Prev</span>
                </button>
                <button className="btn" onClick={ nextBookableIndex}>
                    <span>Next</span><FaArrowRight/>
                </button>
            </p>
        </div>

        /*
            <p></p> 최상위 태그는 1개만 있어야 하기 때문에 이럴 때에는 ul태그와 형제관계로 p태그를 만들 수 없습니다. ul과 p를 모두 구현하려면 그 둘을 포함하는 div 등으로 감싸야 합니다.
        */
    )
}

export default BookList
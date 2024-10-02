import {bookables, days, sessions} from "../../static.json"
import {useReducer} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import reducer from "./reducer.js";

function BookList() {

    // 상태를 관리할 변수들 초깃값
    const initState = {
        group: 'Rooms',
        bookableIndex: 0,
        hasDetails: false
    }

    // state는 상태 값들을 모아 놓은 object
    const [state, dispatch] = useReducer(reducer, initState)
    // state는 상태값 오브젝트
    // dispatch 현재 상태값 => 새로운 상태값을 (전달하여) 만듭니다. 이벤트 핸들러에서 실행됩니다.
    // 위의 2개는 useReducer()의 리턴값입니다.
    // useReducer를 생성하는 인자 reducer는 dispatch가 호출되면 전달한 action(type, payload)으로 실행할 내용을 정의합니다.
    // 두번째 인자 initState는 상태값(오브젝트)의 초기 상태입니다.
    // 세번째 인자(위 코드에서는 생략되었습니다.)는 없지만 initState 초기값을 받아 처음 한 번 실행하는 초기화 함수입니다.
    const {group, bookableIndex, hasDetails} = state
    const bookableGroup = bookables.filter(b => b.group === group)
    const groups = [...new Set(bookables.map(b => b.group))] // ['Rooms', 'Kit'] 코드 수정 전 상황
    const bookable = bookableGroup[bookableIndex]

    function nextBookableIndex() {
        dispatch({
            type: 'NEXT_BOOKABLE',
            payload: bookableGroup.length
        })
    }

    function prevBookableIndex() {
        // if(bookableIndex === 0) setBookableIndex(3)
        // else setBookableIndex((i) => (i-1) % bookableGroup.length)
        dispatch({
            type: 'PREV_BOOKABLE',
            payload: bookableGroup.length
        })
    }

    function changeGroup(e) {
        dispatch({
            type: 'SET_GROUP',
            payload: e.target.value
        })
    }

    function changeBookableIndex(selectIndex) {
        dispatch({
            type: 'SET_BOOKABLE',
            payload: selectIndex
        })
    }

    function toggleDetails() {
        dispatch({
            type: 'TOGGLE_HAS_DETAILS',
            payload: bookableGroup.length
        })
    }

    return (
        <>
            <div>
                <select value={ group} onChange={ changeGroup}>
                    { groups.map(g => <option key={ g} value={ g}>{ g}</option>)}
                </select>
                <ul className='items-list-nav'>
                    { bookableGroup.map((b, i) => (
                        <li key={b.id}
                            className={i === bookableIndex ? 'selected' : null}>
                            <button className='btn' onClick={() => changeBookableIndex(i)}>
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
                {/*<p></p> 최상위 태그는 1개만 있어야 하기 때문에 이럴 때에는 ul태그와 형제관계로 p태그를 만들 수 없습니다. ul과 p를 모두 구현하려면 그 둘을 포함하는 div 등으로 감싸야 합니다.*/}
            </div>

            {/*새로운 UI 추가, CSS 추가: 상세 내용*/}
            <div className="book-details">
                <div className="item">
                    <div className="item-header">
                        <h2>{bookable.title}</h2>
                        <span className="controls">
                            <label>
                                <input type="checkbox" checked={ hasDetails} onChange={ toggleDetails}/>
                            </label>
                        </span>
                    </div>
                    <p>{ bookable.notes}</p>
                    { hasDetails && (
                        <div className="item-details">
                            <h3>usable day and session</h3>
                            <div className="bookable-availability">
                                <ul>
                                    { bookable.days.sort().map(d => <li key={ d}>{ days[d]}</li>)}
                                </ul>
                                <ul>
                                    { bookable.sessions.sort().map(s => <li key={ s}>{ sessions[s]}</li>)}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default BookList
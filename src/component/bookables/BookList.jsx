import {bookables, days, sessions} from "../../static.json"
import {useReducer, useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

function BookList() {

    // 상태를 관리할 변수들 초깃값
    const initState = {
        group: 'Rooms',
        bookableIndex: 0,
        hasDetails: false
    }

    // state는 상태 값들을 모아 놓은 object
    const [state, dispatch] = useReducer(reducer, initState)
    const {group, bookableIndex, hasDetails} = state
    const bookableGroup = bookables.filter(b => b.group === group)
    const groups = [...new Set(bookables.map(b => b.group))] // ['Rooms', 'Kit'] 코드 수정 전 상황

    function nextBookableIndex() {
        setBookableIndex((i) => (i+1) % bookableGroup.length)
    }

    function prevBookableIndex() {
        // if(bookableIndex === 0) setBookableIndex(3)
        // else setBookableIndex((i) => (i-1) % bookableGroup.length)
        bookableIndex === 0 ? setBookableIndex(bookableGroup.length-1) : setBookableIndex((i) => (i-1) % bookableGroup.length)
    }

    function changeGroup(event) {
        setGroup(event.target.value)
        setBookableIndex(0)
    }

    const bookable = bookableGroup[bookableIndex]
    const [hasDetails, setHasDetails]= useState(false)

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
                {/*<p></p> 최상위 태그는 1개만 있어야 하기 때문에 이럴 때에는 ul태그와 형제관계로 p태그를 만들 수 없습니다. ul과 p를 모두 구현하려면 그 둘을 포함하는 div 등으로 감싸야 합니다.*/}
            </div>

            {/*새로운 UI 추가, CSS 추가: 상세 내용*/}
            <div className="book-details">
                <div className="item">
                    <div className="item-header">
                        <h2>{bookable.title}</h2>
                        <span className="controls">
                            <label>
                                <input type="checkbox" checked={ hasDetails} onChange={ () => setHasDetails(has => !has)}/>
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
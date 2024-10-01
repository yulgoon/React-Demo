import {users} from '../../static.json'
import {useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

function UserList() {
    const userGroup = users
    const [userIndex, setUserIndex] = useState(0)

    function prevUserIndex() {
        userIndex !== 0 ? setUserIndex(i => (i-1) % userGroup.length) : setUserIndex(userGroup.length-1)
    }

    function nextUserIndex() {
        setUserIndex(i => (i+1) % userGroup.length)
    }

    return (
        <div>
            <ul className='items-list-nav'>
                {userGroup.map((u, i) => (
                    <li key={u.id}
                        className={i === userIndex ? 'selected' : null}>
                        <button className='btn' onClick={() => setUserIndex(i)}>
                            {u.title}
                        </button>
                    </li>
                ))}
            </ul>
            <p>
                <button className="btn" onClick={ prevUserIndex}>
                    <FaArrowLeft/><span>Prev</span>
                </button>
                <button className="btn" onClick={ nextUserIndex}>
                    <span>Next</span><FaArrowRight/>
                </button>
            </p>
        </div>
    )
}

export default UserList
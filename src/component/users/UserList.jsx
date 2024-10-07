import {useEffect, useState} from "react";
import PageSpinner from "../UI/PageSpinner.jsx";

function UserList({user, setUser}) {
    const [users, setUsers] = useState(null)
    // fetch 중 오류 또는 로딩 중에 상태값
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
/*  index를 사용하지 않으므로써 필요 없어진 코드
    // index를 사용하면 event handle가 아닌 곳에서 상태 변경 함수를 실행
    // 따라서 index를 사용하지 않도록 refactoring합니다.
    // const [userIndex, setUserIndex] = useState(0)
    // const user = users?.[userIndex]  //자바의 Optional 역할 연산자 ?.
    //users 가 null 이 아닐 때만 실행합니다.
    // 선택된 인덱스 값으로 user를 바꾸어야 합니다. - 부모, 형제 컴포넌트와 공유할 수 있는 방법으로 바꿉니다. (user의 state를 변경)
    // setUser(user?.[userIndex])*/

    //api 서비스 제공하는 서버로부터 데이터 가져오기
    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:3001/users")
            .then( response =>{
                return response.json()
            })
            .then(data => {
                console.log("data",data)
                setUsers(data)
                setLoading(false)
            })
            .catch((error) => setError(error.message))
    }, []);
    //[] 의존값.없으면 컴포넌트 실행될 때 처음 1번만 useEffect 동작
    //[data] 의존값이 있으면 data 값이 변경될 때마다 useEffect 실행
    //상태값 변수
    if(error) {
        return <div>오류 : {error}</div>
    }

  if(loading) {
        return (
                <PageSpinner/>
        )
    }

    return(
        <>
            {users && (<ul className="users items-list-nav">
                {users.map((u) => (
                    <li key={u.id} className={(u.id === user?.id) ? "selected" : null}>
                        <button className="btn btn-header" onClick={() => setUser(u)}>
                            {u.name}
                        </button>
                    </li>
                ))}
            </ul>)}
            {/*UserDetails로 컨포넌트 분리합니다.*/}
{/*            {user && (<div className="item user">
                <div className="item-header">
                    <h2>{user.name}</h2>
                </div>
                <div className="user-details">
                    <h3>{user.title}</h3>
                    <p>{user.notes}</p>
                </div>
            </div>)}*/}
        </>
    )
}

export default UserList
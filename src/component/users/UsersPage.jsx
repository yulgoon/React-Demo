import UsersList from "./UserList.jsx";
import {useState} from "react";
import UserDetails from "./UserDetails.jsx";


function UsersPage () {
    const [user, setUser] = useState(null);


    return (
        <main className="users-page">
            {/*선택한 user를 형제 컨포넌트와 공유하기 위해 부모 컴포넌트 UsersPatge가 user 상태를 선언했으므로 UserList도 props를 선언합니다.*/}
            <UsersList user={user} setUser={setUser}/>
            <UserDetails user={user}/>
        </main>
    );
}
export default UsersPage
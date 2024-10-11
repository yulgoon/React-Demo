import {useState} from "react";
import BookableForm from "./BookableForm.jsx";
import {useNavigate} from "react-router-dom";
import {createItem} from "../utils/api.js";
import {useMutation} from "react-query";

export default function BookableNew(){

    const navigate = useNavigate()
    const [state, setState] = useState()

    // createBookable: 상태 변경 함수를 리턴 받아서 할당합니다.
    const {mutate:createBookable, status, error} = useMutation(
        // createBookable이 실행할 인자값과 실행할 비동기 함수를 정의
        item =>createItem("http://localhost:3001/bookables",item),
        {
            onSuccess: bookable =>{
                queryClient.setQueryData(
                    "bookables",
                    old=> [...(old || []),bookable]
                )
                navigate(`/bookables/${bookable.id}`)
            }
        }
    )

    function handleSubmit() {
        const result = createItem(`http://localhost:3001/bookables`, state)
        console.log('handleSubmit() result: ', result)
    }

    return (
        <BookableForm
            formState={{state,setState}}
            handleSubmit={handleSubmit}
        />
    )
}
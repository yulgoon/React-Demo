// state는 상태값 object이고, action(type, payload)은 무엇을 할 것인가를 전달하는 object입니다.
// return은 새로운 상태값을 반환합니다.
export default function reducer(state, action){
    switch (action.type) {  /* type에 따라 하위 case 실행을 결정합니다. */
        case "SET_GROUP":
            return{
                ...state,   /* 기존 state 값을 가져와서(복사) group과 bookableIndex를 새로운 값으로 변경(update) */
                group:action.payload,   /* group을 payload로 변경*/
                bookableIndex: 0
            }

        case "SET_BOOKABLE":    /* 각 case name은 개발자가 정의하였습니다. */
            return{
                ...state,
                bookableIndex: action.payload   /* 선택 인덱스를 payload 값으로 변경 => payload 값은 매 번 바뀔 수 있습니다. */
            }

        case "TOGGLE_HAS_DETAILS":
            return{
                ...state,
                hasDetails: !state.hasDetails   /* hasDetails 프로퍼티만 not 연산 => 참은 거짓, 거짓은 참으로!*/
            }

        case "NEXT_BOOKABLE":
        {
            // const count = state.bookables.filter(b=> b.group === state.group).length;
            return{
                ...state,
                bookableIndex: (state.bookableIndex + 1) % action.payload
            };
        }

        case "PREV_BOOKABLE":
        {
            // const count = state.bookables.filter(b=> b.group === state.group).length;

            return{
                ...state,
                bookableIndex: (state.bookableIndex === 0) ? action.payload-1 : (state.bookableIndex-1) % action.payload
            };
        }

        default:    //꼭 필요함.
            return state;

    }
}
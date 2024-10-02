import getWeek from "./date-util.js";

export default function reducer(state, action){
    switch (action.type){
        case "NEXT_WEEK":
            /*지정된 날짜 +7 */
            return getWeek(state.date,7);
        case "PREV_WEEK":
            /*지정된 날짜 -7*/
            return getWeek(state.date, -7);
        case "TODAY":
            /*오늘 날짜*/
            return getWeek(new Date());
        case "SET_DATE":
            /*임의의 날짜 : action.payload*/
            return getWeek(new Date(action.payload));
        default:
            // return state;
            throw new Error(`알 수 없는 action type: ${action.type}`)
    }
}
// return은 getWeek 메서드로 변경된 state.date를 구합니다.
// state는 object: date(선택날짜), start(date 날짜의 해당 주 시작 날짜), end(date 날짜의 해당 주 마지막 날짜)
// getWeek 메서드는 다른 component에서도 실행합니다.
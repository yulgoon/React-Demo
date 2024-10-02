import WeekPicker from "./WeekPicker.jsx";

function BookingsPage() {
    return (
        <main className="bookings-page">
            {/*<h4>예약 하기</h4>*/}
            {/*<WeekPicker date="" day="" month=""/>*/} {/* WeekPicker에서 받을 값이 3개 => 함수에서 props로 받거나 또는 object를 분해하여 {date, day, month}로 받을 수 있습니다. */}
            {/*WeekPicker에게 초깃값으로 date 속성을 전달합니다.*/}
            <WeekPicker date={new Date()}/> {/* 오늘 날짜로 설정 */}
        </main>
    )
}

export default BookingsPage
export default function getWeek(forDate, daysOffset=0) {

    // const newDate = new Date(forDate.getTime())
    // 다음 주, 이전 주 offset으로 날짜 변경
    forDate = addDays(forDate, daysOffset)

    // start, end 계산을 위해 요일이 필요합니다.
    // e.g.) '화'요일은 2를 return. 지금 날짜 해당 주의, start는 -2, end는 6-2
    const day = forDate.getDay()
    return {
        date: forDate,
        start: addDays(forDate, -day),        // 해당 주의 일요일 날짜
        end: addDays(forDate, 6-day)    // 해당 주의 토요일 날짜
    }
}

function addDays(forDate, offset) {
    const date = new Date(forDate.getTime())
    // 원하는 날짜만큼 +(합산) 또는 -(감산) 계산하여 새로운 날짜값 저장
    date.setDate(date.getDate() + offset)
}

/* 위 함수 테스트입니다. */
let result = getWeek(new Date())
console.log('오늘 result: ', result)

result = getWeek(new Date(), 7)
console.log('일주일 후 result: ', result)

result = getWeek(new Date(), -7)
console.log('일주일 전 result: ', result)

result = getWeek(new Date('2024-11-06'))
console.log('지정한 날짜 result: ', result)
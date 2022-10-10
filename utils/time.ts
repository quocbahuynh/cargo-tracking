import moment from "moment"

export const convertISO = (stringTime: string): string => {
    return moment(stringTime).format('DD-MM-YYYY hh:mm A')
}

const convertDayOfWeek = (day: number): number | string => {

    const currentDay: number = day + 1;
    let convertDayOfWeek: string;

    if (currentDay > 7) {
        convertDayOfWeek = "Chủ Nhật";
    } else {
        convertDayOfWeek = "Thứ " + currentDay;
    }

    return convertDayOfWeek;
}

export const currentTime = (): object => {
    const dayOfWeek = moment().day();
    const dayOfMonth = moment().date();
    const month = moment().month() + 1;
    const hour = moment().hour();
    const minute = moment().minute();
    const year = moment().year();

    return {
        stringTime: `${convertDayOfWeek(dayOfWeek)}, ngày ${dayOfMonth} tháng ${month} năm ${year}`,
        numberTime: `${dayOfMonth}-${month}-${year} ${hour}:${minute}`
    }
}
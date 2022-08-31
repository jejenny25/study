import {atom} from 'recoil';

export const startDateState = atom({
    key: "StartDate",
    default: ""
})

export const endDateState = atom({
    key: "EndDate",
    default: ""
})

export const daysState = atom({
    key: "Days",
    default: 0
})

export const totPriceState = atom({
    key: "TotPrice",
    default: 0
})

export const dayPriceState = atom({
    key: "DayPrice",
    default: 130338
})

export const cntPriceState = atom({
    key: "CntPrice",
    default: 0
})
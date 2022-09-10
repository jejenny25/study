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

export const adultGuestState = atom({
    key: "AdultGuest",
    default: 0
})

export const kidGuestState = atom({
    key: "KidGuest",
    default: 0
})

export const toddlerGuestState = atom({
    key: "ToddlerGuest",
    default: 0
})

export const petGuestState = atom({
    key: "PetGuest",
    default: 0
})

export const delGuestState = atom({
    key: "del",
    default: 0
})

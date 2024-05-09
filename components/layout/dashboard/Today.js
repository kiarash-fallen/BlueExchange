"use client"
import React, { useEffect, useState } from 'react';
import Calendar from '../../ui/icons/Calendar';

function toEnglishDigits(str) {

    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    var e = '۰'.charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function (t) {
        return t.charCodeAt(0) - e;
    });

    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = '٠'.charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function (t) {
        return t.charCodeAt(0) - e;
    });
    return str;
}

function convertToPersianMonth(month) {
    switch (month) {
        case 1:
            return "فروردین";
        case 2:
            return "اردیبهشت";
        case 3:
            return "خرداد";
        case 4:
            return "تیر";
        case 5:
            return "مرداد";
        case 6:
            return "شهریور";
        case 7:
            return "مهر";
        case 8:
            return "آبان";
        case 9:
            return "آذر";
        case 10:
            return "دی";
        case 11:
            return "بهمن";
        case 12:
            return "اسفند";
    }
}

let today = new Date().toLocaleDateString('fa-IR');
const currentYear = toEnglishDigits(today.split("/")[0]);
const currentMonth = convertToPersianMonth(+toEnglishDigits(today.split("/")[1]));
const currentDay = toEnglishDigits(today.split("/")[2]);

function Today() {
    const [hour, setHour] = useState();
    useEffect(() => {

    }, [])
    return (
        <div className="flex items-center border border-[#393939] rounded-xl p-4 text-[#AAAAAA]">
            <Calendar />
            <span className='mr-2'>
                <span>{currentDay}</span>
                <span className="mx-1">{currentMonth}</span>
                -
                <span>{currentYear}</span>
            </span>
        </div>
    )
}

export default Today
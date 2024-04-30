"use client";
import React, { useState } from 'react'
import Button from '../buttons/Button';
import FillArrow from "../../components/ui/icons/FillArrow"

function FrequentlyAskedQuestions({ list }) {
    const [active, setActive] = useState(0);
    return (
        <div className="grid grid-cols-2 gap-4">
            <ul className="">
                {list.map((item, i) => <li key={item.name} className="mt-4">
                    <Button
                        varient="#22F38F"
                        color="bg-[#22F38F]"
                        hover="hover:border-[#22F38F]"
                        active={i === active}
                        activeColor="!border-[#22F38F]"
                        isFull={true}
                        hasLeftIcon={true}
                        onClick={() => setActive(i)}
                        icon={<FillArrow bgColor={i === active ? "fill-[#22F38F]" : "fill-[#3E3E3E]"} arrowColor={i === active ? "fill-[#363636]" : "fill-[#CCCCCC]"} />}
                    >
                        <span className="font-semibold">{item.name}</span>
                    </Button>
                </li>)}
            </ul>
            <div>
                {list.map((item, i) => <div key={item.name}>{i == active && item.content}</div>)}
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestions
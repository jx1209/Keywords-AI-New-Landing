import React from 'react';
import { Button } from "../Buttons";

export default function FinderCard() {
    return (
        <div className="flex flex-col w-[326px] p-[16px] items-center bg-gray-2 border rounded-lg border-gray-3">
            <img className="flex justify-center items-center self-stretch h-[108px] p-[10px] rounded-[8px] bg-gray-3" src="image.png" alt="Accel/Grant Logo Placeholder"/>
            <div className="flex justify-between items-center self-stretch mt-[16px]">
                <span className="text-[20px] leading-[28px] text-[#f9fafd] font-medium">AI Grant</span>
                <span className="text-[16px] leading-[24px] font-medium">$250k</span>
            </div>
            <div className="flex min-h-[72px] items-start gap-[10px] self-stretch my-[8px]">
                <span className="text-[#b1b3bc] text-[16px] leading-[24px]"> Accelerator for seed-stage AI startups</span>
            </div>
            <div className="flex flex-col items-start self-stretch w-full gap-xxxs mb-[24px]">
                <div className="flex justify-center items-center px-[8px] py-[4px] rounded bg-gray-3">
                    <span className="text-[#f9fafd] text-[12px] leading-[16px]">Grant</span>
                </div>
            </div>
            <Button
                variant="r4-primary"
                text="Apply Now"
                className="flex p-[8px] justify-center items-center gap-[8px] self-stretch text-[16px] leading-[24px]"  
            />
        </div>
    );
} 
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../Buttons";
import { Redirect } from "../Icons/iconsDS";

export default function FinderCard({ name, type, amount, description, cover, website, perks, deadline, qualifications }: { name: string, type: string, amount: string, description: string, cover: string, website: string, perks: string, deadline: string, qualifications: string }) {
    const types = type.split(',').map(t => t.trim());
    const router = useRouter();

    const handleAccelGrantClick = () => {
        const agName = name;
        localStorage.setItem(`accel-grant-${agName}`, JSON.stringify({
            name, type, amount, description, cover, website, perks, deadline, qualifications
        }));
        router.push(`/accelerator-grant-finder/${agName}`);
    };

    return (
        <div className="flex justify-center w-full">
            <div 
                onClick={handleAccelGrantClick}
                className="flex flex-col w-[326px] p-[16px] items-center bg-gray-2 border rounded-lg border-gray-3 cursor-pointer transform transition-transform duration-200 hover:scale-101"
            >
                <img className="flex justify-center items-center self-stretch h-[108px] rounded-[8px] object-cover" src={cover} alt="Accel/Grant Logo Placeholder"/>
                <div className="flex justify-between items-center self-stretch mt-[8px] min-h-[56px]">
                    <div className="flex items-center gap-2">
                        <span className="text-[20px] leading-[28px] text-[#f9fafd] font-medium">{name}</span>
                        <div onClick={(e) => {
                            e.stopPropagation();
                            window.open(website);
                        }}>
                            <Button
                                icon={Redirect}
                                className="flex-shrink-0"
                            />
                        </div>
                    </div>
                    <span className="text-[16px] leading-[24px] font-medium">{amount}</span>
                </div>
                <div className="flex min-h-[72px] items-start gap-[10px] self-stretch mt-[4px] mb-[16px]">
                    <span className="text-[#b1b3bc] text-[16px] leading-[24px]">{description}</span>
                </div>
                <div className="flex flex-row flex-wrap items-start self-stretch w-full gap-2 mb-[24px]">
                    {types.map((t, index) => (
                        <div key={index} className="flex justify-center items-center px-[8px] py-[4px] rounded bg-gray-3">
                            <span className="text-[#f9fafd] text-[12px] leading-[16px]">{t}</span>
                        </div>
                    ))}
                </div>
                <Button
                    variant="r4-primary"
                    text="Apply Now"
                    className="flex p-[8px] justify-center items-center gap-[8px] self-stretch text-[16px] leading-[24px]"
                    onClick={handleAccelGrantClick}
                />
            </div>
        </div>
    );
} 
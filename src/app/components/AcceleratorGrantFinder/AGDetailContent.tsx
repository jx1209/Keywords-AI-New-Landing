"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/app/components/Buttons/Button/Button";

interface AGDetails {
    name: string;
    type: string;
    amount: string;
    description: string;
    cover: string;
    website: string;
    perks: string;
    deadline: string;
    qualifications: string;
}

export default function AGDetailContent({ 
    name, 
    type, 
    amount, 
    description, 
    cover, 
    website, 
    perks, 
    deadline, 
    qualifications 
}: AGDetails) {
    const types = type?.split(',').map(t => t.trim());

    return (
        <div className="flex flex-col pt-[140px] pb-[120px] px-sm items-center self-stretch gap-xl">
            <div className="flex flex-col max-w-[1200px] items-start self-stretch gap-md">
                <div className="flex flex-col items-start gap-xxs self-stretch">
                    <h1 className="self-stretch text-gray-white display-lg">
                        {name}
                    </h1>
                    <div className="flex justify-between items-center self-stretch">
                        <div className="flex items-center gap-xxs">
                            {types?.map((t, index) => (
                            <div key={index} className="flex px-xxs py-xxxs justify-center items-center gap-[10px] rounded-sm bg-gray-2">
                                <span className="text-gray-4 text-sm-regular">{t}</span>
                            </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-xxs">
                            <span className="text-gray-4 text-sm-regular">{deadline}</span>
                        </div>
                    </div>
                </div>                    
                <span className="text-gray-white text-md-regular">{description}</span>
            </div>
            <div className="flex flex-col max-w-[1200px] items-start self-stretch gap-xxs">
                <span className="self-stretch text-gray-white display-xs">Perks:</span>
                {perks?.split(';').map((perk, index) => (
                    <div key={index} className="flex self-stretch gap-xxxs">
                        <span className="text-gray-white text-md-regular">•</span>
                        <span className="text-gray-white text-md-regular">{perk.trim()}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col max-w-[1200px] items-start self-stretch gap-xxs">
                <span className="self-stretch text-gray-white display-xs">Qualifications:</span>
                <span className="self-stretch text-gray-white text-md-regular">{qualifications}</span>
            </div>
            <div className="flex max-w-[1200px] items-center gap-xxs self-stretch">
                <Button
                    variant="r4-primary"
                    text="Apply Now"
                    className="flex min-w-[60px] px-xs py-xxs justify-center items-center gap-xxs text-[16px] leading-[24px]"
                    onClick={() => window.open(website)}
                />
                <Button
                    variant="r4-gray-2"
                    text="View More Information"
                    className="flex min-w-[60px] px-xs py-xxs justify-center items-center gap-xxs text-[16px] leading-[24px]"
                    onClick={() => window.open(website)}
                />
            </div>
        </div>
    );
}
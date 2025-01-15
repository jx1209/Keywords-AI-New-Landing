"use client";
import React from 'react';
import { Button } from "../Buttons";

interface FinderCardProps {
  name: string;
  type: string;
  amount: string;
  description: string;
  cover: string;
  website: string;
}

export default function FinderCard({ name, type, amount, description, cover, website }: FinderCardProps) {
    const types = type.split(',').map(t => t.trim());

    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col w-[326px] p-[16px] items-center bg-gray-2 border rounded-lg border-gray-3">
                <img className="flex justify-center items-center self-stretch h-[108px] rounded-[8px] object-cover" src={cover} alt="Accel/Grant Logo Placeholder"/>
                <div className="flex justify-between items-center self-stretch mt-[16px]">
                    <span className="text-[20px] leading-[28px] text-[#f9fafd] font-medium">{name}</span>
                    <span className="text-[16px] leading-[24px] font-medium">{amount}</span>
                </div>
                <div className="flex min-h-[72px] items-start gap-[10px] self-stretch my-[8px]">
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
                    onClick={() => window.open(website)}
                />
            </div>
        </div>
    );
} 
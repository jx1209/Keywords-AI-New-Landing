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

export default function AGDetailContent({ name, type, amount, description, cover, website, perks, deadline, qualifications }: { name: string, type: string, amount: string, description: string, cover: string, website: string, perks: string, deadline: string, qualifications: string }) {
    const params = useParams();
    const [agDetails, setAGDetails] = useState<AGDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const types = agDetails?.type.split(',').map(t => t.trim());

    useEffect(() => {
        try {
            const decodedName = decodeURIComponent(params.name as string);
            const storedData = localStorage.getItem(`accel-grant-${decodedName}`);
            console.log('Stored data:', storedData); // Debug log
            
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setAGDetails(parsedData);
            }
        } catch (error) {
            console.error('Error loading data:', error);
        } finally {
            setIsLoading(false);
        }
    }, [params.name]);

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    if (!agDetails) {
        return <div className="flex justify-center items-center min-h-screen">No data found</div>;
    }

    return (
        <div className="flex flex-col pt-[140px] pb-[120px] max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-[8px]">
                <h1 className="text-gray-1 text-[44px] font-[600] leading-[56px] max-w-[1200px] w-full display-lg">
                    {agDetails.name}
                </h1>
                <div className="flex flex-row gap-[10px]">
                    {types?.map((t, index) => (
                        <div key={index} className="flex justify-center items-center px-[8px] py-[4px] rounded bg-gray-3">
                            <span className="text-[#f9fafd] text-[14px] leading-[20px]">{t}</span>
                        </div>
                    ))}
                    <div className="flex justify-center items-center px-[8px] py-[4px] ml-auto">
                        <span className="text-[#B1B3BC] text-[14px] leading-[18px]">{agDetails.deadline}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-start self-stretch mt-[20px]">
                <span className="text-[#F9FAFD] text-[16px] leading-[24px]">{agDetails.description}</span>
            </div>
            <div className="flex flex-col self-stretch gap-2">
                <span className="text-[#F9FAFD] text-[20px] leading-[28px] font-[500] pt-[60px]">Perks:</span>
                <div className="flex flex-col gap-[5px]">
                    {agDetails.perks.split(';').map((perk, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <span className="text-[#F9FAFD]">•</span>
                            <span className="text-[#F9FAFD] text-[16px] leading-[24px]">{perk.trim()}</span>
                        </div>
                    ))}
                </div>
                <span className="text-[#F9FAFD] text-[20px] leading-[28px] font-[500] pt-[60px]">Qualifications:</span>
                <div className="flex flex-col gap-[5px]">
                    <div className="flex items-start gap-2">
                        <span className="text-[#F9FAFD] text-[16px] leading-[24px]">{agDetails.qualifications}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-[8px]">
                <Button
                    variant="r4-primary"
                    text="Apply Now"
                    className="flex mt-[60px] min-w-[60px] justify-center gap-[8px] text-[16px] leading-[24px]"
                    onClick={() => window.open(agDetails.website)}
                />
                <Button
                    variant="r4-gray-2"
                    text="View More Information"
                    className="flex mt-[60px] min-w-[60px] justify-center gap-[8px] text-[16px] leading-[24px]"
                    onClick={() => window.open(agDetails.website)}
                />
            </div>
            
        </div>

    );
}
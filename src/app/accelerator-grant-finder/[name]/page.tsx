
import AGDetailContent from "@/app/components/AcceleratorGrantFinder/AGDetailContent";

export interface AGDetails {
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

export default function AcceleratorGrantDetails({ name, type, amount, description, cover, website, perks, deadline, qualifications }: { name: string, type: string, amount: string, description: string, cover: string, website: string, perks: string, deadline: string, qualifications: string }) {
  return (
    <AGDetailContent
        name={name}
        type={type}
        amount={amount}
        description={description}
        cover={cover}
        website={website}
        perks={perks}
        deadline={deadline}
        qualifications={qualifications}
    />
  );
}

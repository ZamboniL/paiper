interface BenefitItemProps {
  title: string;
  description: string;
  image: string;
}

export default function BenefitItem({ title, description, image }: BenefitItemProps) {
  return (
    <li className="w-[336px] rounded-lg border border-primary-300 bg-primary-50 p-8 md:w-[370px]">
      <img className="rounded-lg pb-8" draggable="false" alt="" src={image} />
      <h3 className="pb-2 font-semibold">{title}</h3>
      <p className="text-sm text-primary-200">{description}</p>
    </li>
  );
}

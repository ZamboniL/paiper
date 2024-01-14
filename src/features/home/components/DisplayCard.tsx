interface DisplayCardProps {
  className?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  image: string;
  description: string;
}

export default function DisplayCard({
  title,
  image,
  description,
  Icon,
  className
}: DisplayCardProps) {
  return (
    <div
      className={`flex w-full flex-col rounded-lg border-[1px] border-white
      bg-primary-300/[0.2] p-2 pt-8 md:grid md:grid-cols-2 ${className} md:pt-2`}
    >
      <div>
        <div
          className={`mx-6 mb-5 flex h-24 w-24 items-center justify-center rounded-lg
        bg-primary-400 shadow-[0_20px_40px_0_rgba(50,50,93,0.20)] md:mt-6`}
        >
          <Icon className="h-12 w-12" />
        </div>
        <h3 className={`pb-2 pl-6 text-2xl font-semibold text-white`}>{title}</h3>
        <p className="pb-8 pl-6 text-white">{description}</p>
      </div>
      <div>
        <img src={image} alt="" className="h-[380px] w-full object-cover object-left" />
      </div>
    </div>
  );
}

interface CardProps {
  className?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tag?: string;
  title?: React.ReactNode;
  description: React.ReactNode;
}

export default function Card({ title, tag, description, Icon, className }: CardProps) {
  return (
    <div
      className={`flex w-full flex-col justify-between rounded-lg border-[1px]
  border-primary-100 bg-primary-50 p-8 ${className}`}
    >
      {Icon && (
        <div
          className="mb-11 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-400
       shadow-[0_0_20px_0_rgba(35,81,255,0.20),_0_0_8px_0_#6EA3FF_inset]"
        >
          <Icon className="h-8 w-8" />
        </div>
      )}
      {tag && <span className="mb-8 text-[40px] font-semibold text-primary-400">{tag}</span>}
      <div>
        {title && (
          <h3
            className={`${
              Icon ? 'pb-2' : 'pb-5'
            } flex flex-row items-center gap-4 pb-2 text-base font-semibold`}
          >
            {title}
          </h3>
        )}
        <p className="text-primary-200">{description}</p>
      </div>
    </div>
  );
}

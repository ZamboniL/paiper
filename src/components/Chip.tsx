interface ChipProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  children: React.ReactNode;
}

export default function Chip({ children, Icon, className, ...props }: ChipProps) {
  return (
    <span
      className={`rounded-full border-[1px] border-primary-400 bg-white px-2 py-1
       text-xs font-semibold text-primary-400 ${className}`}
      {...props}
    >
      {Icon && <Icon className="mr-1 inline-block h-4 w-4" />}
      {children}
    </span>
  );
}

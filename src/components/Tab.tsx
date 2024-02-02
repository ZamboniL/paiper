interface TabProps {
  active?: boolean;
  currentTab?: string;
  value?: string;
  onClick?: (value: string) => void;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  children: React.ReactNode;
}

export default function Tab({
  value = '',
  onClick,
  currentTab,
  children,
  Icon,
  className
}: TabProps) {
  const statusClasses =
    currentTab === value
      ? 'border-white bg-primary-300/[0.2] text-primary-400'
      : 'border-primary-300 bg-primary-400';
  return (
    <button
      onClick={() => onClick?.(value)}
      className={`flex items-center gap-1 rounded-lg border-[1px] p-2 transition-colors hover:bg-primary-300/[0.2] ${statusClasses} ${className}`}
    >
      {Icon && <Icon className="h-6 w-6" />}
      <span className="w-fit text-nowrap text-white">{children}</span>
    </button>
  );
}

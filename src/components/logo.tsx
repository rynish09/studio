import { cn } from '@/lib/utils';

export const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="174"
    height="33"
    viewBox="0 0 174 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('text-white', className)}
    aria-label="ConteX Logo"
    {...props}
  >
    <text
      x="0"
      y="27"
      fontFamily="Inter, sans-serif"
      fontSize="30"
      fontWeight="900"
      fill="currentColor"
    >
      The Conte
    </text>
    <text
      x="160"
      y="27"
      fontFamily="Inter, sans-serif"
      fontSize="30"
      fontWeight="900"
      fill="currentColor"
      textAnchor="middle"
    >
      x
    </text>
    <path
      d="M148.5 2.5L171.5 30.5M171.5 2.5L148.5 30.5"
      stroke="#FF0000"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

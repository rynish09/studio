import { cn } from '@/lib/utils';

export const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="170"
    height="33"
    viewBox="0 0 170 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('text-white', className)}
    aria-label="ConteX Logo"
    {...props}
  >
    <text
      x="0"
      y="27"
      fontFamily="Sora, Inter, sans-serif"
      fontSize="28"
      fontWeight="800"
      fill="currentColor"
    >
      The Conte
    </text>
    <text
      x="145"
      y="27"
      fontFamily="Sora, Inter, sans-serif"
      fontSize="28"
      fontWeight="800"
      fill="#EF4444"
    >
      X
    </text>
  </svg>
);

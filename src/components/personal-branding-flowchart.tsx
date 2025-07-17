
'use client';

import { cn } from "@/lib/utils";
import AnimatedWrapper from "./ui/animated-wrapper";

const FlowNode = ({ children, className, isDecision = false, delay = 0 }: { children: React.ReactNode, className?: string, isDecision?: boolean, delay?: number }) => (
    <AnimatedWrapper delay={delay} className="flex justify-center items-center">
        <div className={cn(
            "bg-card border border-border text-center text-white/90 shadow-lg",
            "p-3 min-h-[60px] flex items-center justify-center text-sm",
            isDecision ? "transform rotate-45 w-32 h-32" : "rounded-md w-48",
            className
        )}>
            <div className={cn(isDecision && "transform -rotate-45")}>
                {children}
            </div>
        </div>
    </AnimatedWrapper>
);

const Line = ({ d, delay = 0, label, labelPos }: { d: string, delay?: number, label?: string, labelPos?: { top?: string; left?: string; right?: string; bottom?: string; } }) => (
    <AnimatedWrapper delay={delay} className="absolute w-full h-full top-0 left-0 -z-10">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={d} stroke="hsl(var(--border))" strokeWidth="2" className="animate-draw" />
        </svg>
        {label && <div className="absolute text-accent text-xs font-semibold p-1 bg-background rounded" style={labelPos}>{label}</div>}
    </AnimatedWrapper>
);


export function PersonalBrandingFlowchart() {
    return (
        <div className="relative flex flex-col items-center space-y-6 font-sans py-4" style={{ height: '1100px' }}>
             <style jsx>{`
                .animate-draw {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: draw 1.5s ease-in-out forwards;
                }
                @keyframes draw {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>

            <div className="absolute top-0 w-full text-center">
                <FlowNode delay={100}>Start</FlowNode>
            </div>
            
            <Line d="M 50% 60 V 110" delay={200} />

            <div className="absolute top-[110px] w-full text-center">
                <FlowNode delay={300} isDecision={true}>Build Personal Brand?</FlowNode>
            </div>

            <Line d="M 50% 178 V 230" delay={400} label="Yes" labelPos={{ top: '190px', left: 'calc(50% + 10px)' }}/>
            
            <div className="absolute top-[230px] w-full text-center">
                 <FlowNode delay={500}>Define Unique Perspective</FlowNode>
            </div>

            <Line d="M 50% 290 V 320" delay={600} />

             <div className="absolute top-[320px] w-full text-center">
                <FlowNode delay={700}>Identify Values</FlowNode>
            </div>

             <Line d="M 50% 380 V 410" delay={800} />

            <div className="absolute top-[410px] w-full text-center">
                <FlowNode delay={900}>Determine Expertise</FlowNode>
            </div>

            <Line d="M 50% 470 V 500" delay={1000} />

             <div className="absolute top-[500px] w-full text-center">
                <FlowNode delay={1100}>Combine to Form Brand Focus</FlowNode>
            </div>

             <Line d="M 50% 560 V 590" delay={1200} />

            <div className="absolute top-[590px] w-full text-center">
                <FlowNode delay={1300}>Exercise Your Brand</FlowNode>
            </div>

             <Line d="M 50% 650 V 680" delay={1400} />
            
             <div className="absolute top-[680px] w-full text-center">
                <FlowNode delay={1500}>Connect with Colleagues</FlowNode>
            </div>

            <Line d="M 50% 740 V 770" delay={1600} />

            <div className="absolute top-[770px] w-full text-center">
                <FlowNode delay={1700}>Create & Share Content</FlowNode>
            </div>

            <Line d="M 50% 830 V 860" delay={1800} />

            <div className="absolute top-[860px] w-full text-center">
                <FlowNode delay={1900}>Seek Opportunities</FlowNode>
            </div>

            <Line d="M 50% 920 V 970 H 50%" delay={2000} />

            <div className="absolute top-[970px] w-full text-center">
                <FlowNode delay={2100}>End</FlowNode>
            </div>

            <Line 
                d="M calc(50% + 64px) 144 C calc(50% + 200px) 144, calc(50% + 200px) 970, 50% 970" 
                delay={400}
                label="No"
                labelPos={{ top: '500px', right: 'calc(50% - 220px)' }}
            />
        </div>
    );
}


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

const Line = ({ className, delay = 0, label, labelClassName }: { className?: string, delay?: number, label?: string, labelClassName?: string }) => (
    <AnimatedWrapper delay={delay} className="relative">
        <svg className={cn("absolute", className)} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1 L1 100" stroke="hsl(var(--border))" strokeWidth="2" className="animate-draw" />
        </svg>
        {label && <div className={cn("absolute text-accent text-xs font-semibold p-1 bg-background rounded", labelClassName)}>{label}</div>}
    </AnimatedWrapper>
);


export function GrowthFlowchart() {
    return (
        <div className="flex flex-col items-center space-y-8 font-sans">
            <FlowNode delay={100}>Start</FlowNode>
            <Line delay={200} className="h-12 w-full top-0 left-1/2" />
            <FlowNode delay={300} isDecision={true}>Business Growth?</FlowNode>
            
            <div className="w-full flex justify-center relative h-32">
                <AnimatedWrapper delay={400} className="absolute top-0 left-1/2 -translate-x-1/2">
                    <svg width="2" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0 V48" stroke="hsl(var(--border))" strokeWidth="2" className="animate-draw"/>
                    </svg>
                    <div className="absolute left-2 top-2 text-accent text-xs font-semibold p-1 bg-background rounded">Yes</div>
                </AnimatedWrapper>
                <AnimatedWrapper delay={400} className="absolute top-0 left-1/2">
                     <svg width="400" height="300" className="opacity-50" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M1 0 C 1 150, 400 150, 400 300" stroke="hsl(var(--border))" strokeWidth="2" className="animate-draw"/>
                     </svg>
                     <div className="absolute right-2 -bottom-28 text-muted-foreground text-xs font-semibold p-1 bg-background rounded">No</div>
                </AnimatedWrapper>
            </div>

            <FlowNode delay={500}>Innovate in Core</FlowNode>
            <Line delay={600} className="h-12 w-full top-0 left-1/2" />
            <FlowNode delay={700} isDecision={true}>Need More Growth?</FlowNode>
            
            <div className="w-full flex justify-center relative h-32">
                 <AnimatedWrapper delay={800} className="absolute top-0 left-1/2 -translate-x-1/2">
                    <svg width="2" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0 V48" stroke="hsl(var(--border))" strokeWidth="2" className="animate-draw"/>
                    </svg>
                    <div className="absolute left-2 top-2 text-accent text-xs font-semibold p-1 bg-background rounded">Yes</div>
                </AnimatedWrapper>
            </div>

            <FlowNode delay={900}>Move into Adjacencies</FlowNode>
            <Line delay={1000} className="h-12 w-full top-0 left-1/2" />
            <FlowNode delay={1100} isDecision={true}>Adjacency Rationale?</FlowNode>

            <div className="w-full relative flex justify-center h-80">
                <AnimatedWrapper delay={1200} className="absolute top-0">
                    <svg width="800" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M400 0 C 400 80, 0 80, 0 80" stroke="hsl(var(--border))" strokeWidth="2" className="animate-draw"/>
                        <path d="M400 0 C 400 80, 266 80, 266 80" stroke="hsl(var(--border))" strokeWidth="2" className="animate-draw"/>
                        <path d="M400 0 C 400 80, 532 80, 532 80" stroke="hsl(var(--border))" strokeWidth="2" className="animate-draw"/>
                        <path d="M400 0 C 400 80, 800 80, 800 80" stroke="hsl(var(--border))" strokeWidth="2" className="animate-draw"/>
                    </svg>
                </AnimatedWrapper>
                <div className="absolute top-20 w-full grid grid-cols-4 gap-4 px-4">
                     <div className="flex flex-col items-center space-y-4">
                        <div className="text-accent text-xs font-semibold">Customer Relationships</div>
                        <FlowNode delay={1300}>Understand Pain Points</FlowNode>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="text-accent text-xs font-semibold">Capabilities</div>
                        <FlowNode delay={1400}>Use Existing Assets in New Markets</FlowNode>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                         <div className="text-accent text-xs font-semibold">Value Chain Expansion</div>
                        <FlowNode delay={1500}>Go Upstream/Downstream</FlowNode>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="text-accent text-xs font-semibold">Disruption/Innovation</div>
                        <FlowNode delay={1600}>Find New Business Models</FlowNode>
                         <Line delay={1700} className="h-12 w-full top-0 left-1/2" />
                        <FlowNode delay={1800}>Build Innovation Culture</FlowNode>
                         <div className="relative w-full h-12">
                            <svg className="absolute left-full top-0 -translate-x-1/2" width="200" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24 C 100 24, 100 24, 200 24" stroke="hsl(var(--border))" strokeWidth="2" className="animate-draw"/>
                            </svg>
                             <div className="absolute left-full top-3 text-muted-foreground text-xs font-semibold p-1 bg-background rounded">No</div>
                         </div>
                        <Line delay={1900} className="h-12 w-full top-0 left-1/2" />
                        <FlowNode delay={2000}>Use Sustainability as Accelerant</FlowNode>
                        <Line delay={2100} className="h-12 w-full top-0 left-1/2" />
                        <FlowNode delay={2200}>Portfolio Reallocation</FlowNode>
                        <Line delay={2300} className="h-12 w-full top-0 left-1/2" />
                        <FlowNode delay={2400}>Periodically Prune Portfolio</FlowNode>
                    </div>
                </div>
            </div>

            <div className="w-full h-40" />
            <div className="w-full h-40" />
            <div className="w-full h-40" />

            <div className="w-full flex justify-center relative h-12">
                <AnimatedWrapper delay={2500} className="absolute -top-16 right-0 lg:right-48">
                     <svg width="2" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M1 0 V64" stroke="hsl(var(--border))" strokeWidth="2" className="animate-draw"/>
                     </svg>
                </AnimatedWrapper>
            </div>
            
            <FlowNode delay={2600}>End</FlowNode>

            <style jsx>{`
                .animate-draw {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: draw 2s ease-in-out forwards;
                }
                @keyframes draw {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>
        </div>
    );
}

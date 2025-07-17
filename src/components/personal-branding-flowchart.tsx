
'use client';

import { cn } from "@/lib/utils";
import AnimatedWrapper from "./ui/animated-wrapper";

const FlowNode = ({ children, className, isDecision = false, delay = 0 }: { children: React.ReactNode, className?: string, isDecision?: boolean, delay?: number }) => (
    <AnimatedWrapper delay={delay} className="flex justify-center items-center">
        <div className={cn(
            "bg-card border-2 border-border text-center text-white/90 shadow-lg",
            "p-4 min-h-[70px] flex items-center justify-center text-sm md:text-base w-full max-w-xs mx-auto",
            isDecision ? "transform -skew-x-12" : "rounded-lg",
            className
        )}>
            <div className={cn(isDecision && "transform skew-x-12")}>
                {children}
            </div>
        </div>
    </AnimatedWrapper>
);

const Line = ({ delay = 0, label, hasArrow = true }: { delay?: number, label?: string, hasArrow?: boolean }) => (
    <AnimatedWrapper delay={delay} className="relative h-16 flex justify-center items-center">
        <div className="w-1 h-full bg-accent/30"></div>
        {hasArrow && (
            <div className="absolute bottom-0 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-accent/50"></div>
        )}
        {label && <div className="absolute text-accent font-semibold px-2 py-1 bg-background rounded-md text-sm -top-4 right-1/2 translate-x-[calc(100%)]">{label}</div>}
    </AnimatedWrapper>
);

export function PersonalBrandingFlowchart() {
    return (
        <div className="flex flex-col items-center space-y-4 font-sans max-w-md mx-auto">
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

            <FlowNode delay={100}>Start</FlowNode>
            <Line delay={200} />
            <FlowNode delay={300} isDecision={true}>Build Personal Brand?</FlowNode>
            <Line delay={400} label="Yes"/>
            
            <div className="w-full pl-8 border-l-4 border-accent/20 space-y-4 pb-4">
                <FlowNode delay={500}>Define Unique Perspective</FlowNode>
                <Line delay={600} />
                <FlowNode delay={700}>Identify Values & Purpose</FlowNode>
                <Line delay={800} />
                <FlowNode delay={900}>Determine Core Expertise</FlowNode>
                <Line delay={1000} />
                <FlowNode delay={1100} className="bg-accent/10 border-accent">Combine to Form Brand Focus</FlowNode>
                <Line delay={1200} />
                <FlowNode delay={1300}>Exercise Your Brand</FlowNode>
                <Line delay={1400} />
                <FlowNode delay={1500}>Connect with Colleagues</FlowNode>
                <Line delay={1600} />
                <FlowNode delay={1700}>Create & Share Content</FlowNode>
                <Line delay={1800} />
                <FlowNode delay={1900}>Seek Growth Opportunities</FlowNode>
            </div>

            <Line delay={2000} hasArrow={false}/>
             <div className="relative w-full text-center py-2">
                 <hr className="border-accent/30" />
                 <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-background px-2 text-muted-foreground text-sm">No</span>
             </div>
            <FlowNode delay={2100}>End</FlowNode>
        </div>
    );
}

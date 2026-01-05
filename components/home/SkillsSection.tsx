"use client";

import ImageComponent, { IProps as ImageComponentProps } from '../common/ImageComponent';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { SkillArr, SkillArrSecond } from '@/constants/work-experience.constants';
import { StaticImageData } from 'next/image';
import { Orbital } from '../use-case/Orbital/Orbital';

export const BackgroundGlow = () => {
    return <div className="
    absolute mx-auto
    w-[625px] h-[700px]
    shrink-0
    rounded-[700px]
    -z-10
    sm:w-[300px] sm:h-[900px]
  "
        style={{
            background:
                "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)",
        }} />;
};

function SkillIconButton({
    title,
    image,
    imgClassName,
}: {
    title: string
    image: string | StaticImageData
    imgClassName?: string
}) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    aria-label={title}
                >
                    <ImageComponent
                        altText={title}
                        source={image}
                        className={cn("h-6 w-6 object-contain", imgClassName)}
                        width={24}
                        height={24}
                    />
                </Button>
            </TooltipTrigger>
            <TooltipContent side="top">{title}</TooltipContent>
        </Tooltip>
    )
}

export function SkillsOrbitSection({
    linesImage,
    Orbital,
    skillStyleClassName,
    linesClassName,
}: {
    // pass Lines like: linesImage={Lines}
    linesImage: string | StaticImageData
    // pass component like: Orbital={Orbital}
    Orbital: React.ComponentType
    // optional styling hooks
    skillStyleClassName?: string
    linesClassName?: string
}) {
    return (
        <TooltipProvider delayDuration={150}>
            <div className="flex flex-col items-center gap-2">
                {/* Top grid */}
                <div className="w-full">
                    <div className="grid grid-cols-3 gap-2">
                        {SkillArr.map((item) => (
                            <div key={item.id} className="flex justify-center">
                                <SkillIconButton
                                    title={item.title}
                                    image={item.image}
                                    imgClassName={skillStyleClassName}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Wrapped buttons row (your circleButton) */}
                <div className="flex flex-wrap px-7 gap-2 sm:gap-8">
                    {SkillArrSecond.map((item) => (
                        <SkillIconButton
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            imgClassName={skillStyleClassName}
                        />
                    ))}
                </div>

                {/* Lines + Orbital */}
                <div className="flex flex-col items-center">
                    <ImageComponent
                        source={linesImage}
                        altText="Lines"
                        className={cn("h-auto w-full", linesClassName)}
                        width={282}
                        height={326}
                    />
                    <Orbital />
                </div>
            </div>
        </TooltipProvider>
    )
}


const SkillsSection = () => {
    return (
        <section id="projects" className="mt-14 space-y-8 sm:mt-16 sm:space-y-10">
            <div
                className="relative w-full flex justify-center items-center text-center sm:flex-col sm:px-4 sm:py-6"
            >
                <SkillsOrbitSection
                    linesImage={"/HomePage/lines.png"}
                    Orbital={Orbital}
                    // optional:
                    skillStyleClassName="h-6 w-6"
                    linesClassName="max-w-md"
                />
            </div>
        </section>
    )
}

export default SkillsSection

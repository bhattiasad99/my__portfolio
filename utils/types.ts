import { StaticImageData } from "next/image";

import { ReactNode } from "react";

export type ColorMode = "dark" | "light";

export type ColorObject = {
    hex: string;
    rgba: string;
};

export interface ThemeRegistryProps {
    children: ReactNode;
    mode: ColorMode;
}

export type ThemeColorsObject = {
    PRIMARY: ColorObject;
    SECONDARY: ColorObject;
    TERTIARY: ColorObject;
    LIGHT_TEXT: ColorObject;
    TEXT: ColorObject;
    ERROR: ColorObject;
    SUCCESS: ColorObject;
    PAGE_BACKGROUND: ColorObject;
    LINK: ColorObject;
    SECONDARY_LIGHT: ColorObject;
    ICON_GREY: ColorObject;
};

export type ColorPalette = {
    light: ThemeColorsObject;
    dark: ThemeColorsObject;
    static: {
        WHITE: ColorObject;
        BLACK: ColorObject;
        LINK: ColorObject;
        GREY_DARK: ColorObject;
        HOVERED_COLOR: ColorObject;
    };
};

export enum AppBarButtons {
    HOME = "Home",
    Listing = "Project Listing",
    CONTACT = "Contact",
}

export enum PageName {
    Listing = "/projectListing",
    CONTACTUS = "/Contactus",
    HOME = "/",
}

export const LARGE_SCREEN = "(max-width: 1250px)";
export const X_LARGE_SCREEN = "(min-width: 1100px)";
export const MEDIUM_SCREEN = "(max-width: 1080px)";
export const SM_SCREEN = "(max-width: 800px)";
export const SMALL_SCREEN = "(max-width: 650px)";
export const X_SMALL_SCREEN = "(max-width: 600px)";
export const X_X_SMALL_SCREEN = "(max-width: 450px)";
export const MORE_THAN_MEDIUM = "(min-width: 944px)";

export const MAXIMUM_WIDTH = {
    maxWidth: "1200px",
} as React.CSSProperties;

export const MOBILE_PADDING = {
    p: "0px 40px",
} as React.CSSProperties;

export type navItemsType = {
    element: React.JSX.Element;
    name: AppBarButtons;
    link: PageName;
}[];

export enum OverallProjectType {
    AllProject = "All Projects",
    FullStack = "Full Stack",
    Website = "Website",
    AndroidiOS = "Android iOS Apps",
}

export enum ProjectType {
    Website = "Website",
    Admin = "Admin",
    Mobile = "Mobile",
    Backend = "Backend",
    API = "API",
    Library = "Library",
    Framework = "Framework",
    Tool = "Tool",
    Other = "Other",
}

export type FilterOption = {
    id: number;
    title: OverallProjectType;
    selected: boolean;
};

export type linkType = {
    type: ProjectType;
    link: string;
    id: number;
    hoverText: string;
};

export type linksType = {
    github?: linkType[];
    webLink?: linkType[];
    videoUrl?: string;
    videoType: "loom" | "googleDrive";
};

export type CardDetailType = {
    id: number;
    title: string;
    description: string;
    descriptionDetail: string[];
    company: string;
    timePeriod: string;
    ProjectType: OverallProjectType[];
    image?: StaticImageData;
    images?: StaticImageData[];
    technologies: string[];
    links?: linksType;
};

export type SkillArrType = {
    id: number;
    title: string;
    image: StaticImageData;
};

export type SocialArrType = {
    id: number;
    title: string;
    value: string;
    image: React.ReactNode;
    link: string;
};

export type OptionJob = {
    id: number;
    title: string;
    selected: boolean;
};

export enum DirectionType {
    LEFT = "left",
    RIGHT = "right",
}

export type CertificateDataType = {
    id: number;
    title: string;
    image?: StaticImageData;
    link: string;
};

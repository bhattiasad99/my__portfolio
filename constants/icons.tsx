import * as React from "react";

export type IconProps = {
    /** Override stroke/fill color. If omitted, a sensible default is used per icon + mode. */
    color?: string;
    /** Width/height in px */
    size?: number;
    mode?: "dark" | "light";
};

const pick = (mode: IconProps["mode"] | undefined, light: string, dark: string) =>
    mode === "light" ? light : dark;

/**
 * NOTE:
 * These are clean, lightweight, “logo-inspired” SVG marks (not exact trademark paths).
 * They’re consistent in API + sizing, and work great for skill chips / badges.
 */

/* ----------------------------- TypeScript ----------------------------- */
export const TypeScriptIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const bg = color ?? pick(mode, "#3178C6", "#3178C6");
    const fg = pick(mode, "#FFFFFF", "#FFFFFF");

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="TypeScript">
            <rect x="2.5" y="2.5" width="19" height="19" rx="3" fill={bg} />
            {/* Stylized "T" */}
            <path
                d="M7.3 8.2h9.4v2H13.3v7.6h-2V10.2H7.3v-2z"
                fill={fg}
            />
            {/* Stylized "S" */}
            <path
                d="M16.9 12.2c0-1.2-1-2.1-2.6-2.1-1.5 0-2.6.8-2.6 2.1 0 .9.6 1.5 1.9 1.8l1 .2c.8.2 1.1.4 1.1.8 0 .5-.6.8-1.5.8-1 0-1.7-.4-1.7-1.2h-2c0 1.9 1.5 3 3.7 3 2.2 0 3.6-1 3.6-2.7 0-1.1-.7-1.8-2.2-2.2l-1.2-.3c-.7-.2-1-.4-1-.8 0-.4.5-.7 1.3-.7.9 0 1.4.4 1.5 1.2h1.7z"
                fill={fg}
                opacity={0.95}
            />
        </svg>
    );
};

/* -------------------------------- Nest -------------------------------- */
export const NestIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const c = color ?? pick(mode, "#E0234E", "#E0234E");
    const fg = pick(mode, "#FFFFFF", "#FFFFFF");

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="NestJS">
            <path
                d="M12 2.2c4.6 0 8.4 2.9 9.3 6.9.8 3.4-.7 6.6-3.6 8.7-2.4 1.7-5.4 2.9-8 4-2.6-1.1-5.6-2.3-8-4-2.9-2.1-4.4-5.3-3.6-8.7C3.6 5.1 7.4 2.2 12 2.2z"
                fill={c}
            />
            {/* simple "shield/helmet" vibe */}
            <path
                d="M7.2 10.1c1.4-1.8 3.1-2.8 4.8-2.8s3.4 1 4.8 2.8c.7.9 1.1 2 .9 3.2-.3 2.2-2.2 3.7-5.7 5.1-3.5-1.4-5.4-2.9-5.7-5.1-.2-1.2.2-2.3.9-3.2z"
                fill={fg}
                opacity={0.95}
            />
            <path
                d="M10 12.2c0-.7.7-1.3 2-1.3s2 .6 2 1.3-.7 1.3-2 1.3-2-.6-2-1.3z"
                fill={c}
            />
        </svg>
    );
};

/* -------------------------------- Node -------------------------------- */
export const NodeIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const c = color ?? pick(mode, "#339933", "#339933");
    const fg = pick(mode, "#0B1F0B", "#0B1F0B");

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="Node.js">
            {/* hex */}
            <path
                d="M12 2.4 20.2 7.1v9.8L12 21.6 3.8 16.9V7.1L12 2.4z"
                fill={c}
            />
            {/* inner mark */}
            <path
                d="M8.1 9.2c0-1.2 1-2.1 2.2-2.1h3.4c1.2 0 2.2 1 2.2 2.1v5.6c0 1.2-1 2.1-2.2 2.1h-1.3v-2h1.1c.4 0 .7-.3.7-.7V9.4c0-.4-.3-.7-.7-.7h-3c-.4 0-.7.3-.7.7v6.8c0 .4.3.7.7.7h1.1v2h-1.3c-1.2 0-2.2-1-2.2-2.1V9.2z"
                fill={fg}
                opacity={0.85}
            />
        </svg>
    );
};

/* ------------------------------ Express ------------------------------ */
export const ExpressIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const c = color ?? pick(mode, "#111111", "#FFFFFF");
    const stroke = c;

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="Express">
            {/* minimal "speed lines" */}
            <path
                d="M4 8h8M4 12h12M4 16h9"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M16.5 8.2l3.5 3.8-3.5 3.8"
                fill="none"
                stroke={stroke}
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
        </svg>
    );
};

/* ------------------------------ MongoDB ------------------------------ */
export const MongoDBIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const c = color ?? pick(mode, "#47A248", "#47A248");
    const shade = pick(mode, "#2E7D32", "#2E7D32");

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="MongoDB">
            {/* leaf */}
            <path
                d="M12 2.2c2.9 3 5.1 6.3 5.1 10.1 0 4.6-2.9 7.3-5.1 9.3-2.2-2-5.1-4.7-5.1-9.3 0-3.8 2.2-7.1 5.1-10.1z"
                fill={c}
            />
            <path
                d="M12 4.2c1.7 2.3 2.7 5 2.7 7.8 0 3.4-1.5 5.7-2.7 7.2-1.2-1.5-2.7-3.8-2.7-7.2 0-2.8 1-5.5 2.7-7.8z"
                fill={shade}
                opacity={0.9}
            />
            {/* stem */}
            <path
                d="M12 3.4v17.2"
                stroke="#0B2E13"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity={0.6}
            />
        </svg>
    );
};

/* -------------------------------- SQL -------------------------------- */
export const SQLIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const border = color ?? pick(mode, "#6B7280", "#D1D5DB");
    const fill = pick(mode, "#F9FAFB", "#111827");
    const dot = pick(mode, "#374151", "#9CA3AF");

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="SQL">
            {/* database cylinder */}
            <ellipse cx="12" cy="6.2" rx="7.5" ry="3.2" fill={fill} stroke={border} strokeWidth="1.6" />
            <path
                d="M4.5 6.2v11.1c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2V6.2"
                fill={fill}
                stroke={border}
                strokeWidth="1.6"
            />
            <ellipse cx="12" cy="17.3" rx="7.5" ry="3.2" fill="none" stroke={border} strokeWidth="1.6" />
            {/* small query dots */}
            <circle cx="8" cy="11.7" r="1" fill={dot} />
            <circle cx="12" cy="11.7" r="1" fill={dot} />
            <circle cx="16" cy="11.7" r="1" fill={dot} />
        </svg>
    );
};

/* ------------------------------ PostgreSQL ------------------------------ */
export const PostgreSQLIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const c = color ?? pick(mode, "#336791", "#336791");
    const fg = pick(mode, "#FFFFFF", "#FFFFFF");

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="PostgreSQL">
            <path
                d="M12 2.3c5 0 8.8 3.6 8.8 8.1 0 4.1-2.8 7.2-6.6 7.9v1.5c0 1-1 1.9-2.2 1.9s-2.2-.9-2.2-1.9v-1.5C6 17.6 3.2 14.5 3.2 10.4 3.2 5.9 7 2.3 12 2.3z"
                fill={c}
            />
            {/* "elephant-ish" nose + eye */}
            <path
                d="M9.1 10.4c0-1.4 1.3-2.5 2.9-2.5s2.9 1.1 2.9 2.5c0 1.3-1 2.2-2.3 2.4v2c0 .7-.6 1.2-1.4 1.2s-1.4-.5-1.4-1.2v-2c-1.3-.2-2.3-1.1-2.3-2.4z"
                fill={fg}
                opacity={0.95}
            />
            <circle cx="10.8" cy="10.2" r="0.7" fill={c} />
        </svg>
    );
};

/* ------------------------------ Docker ------------------------------ */
export const DockerIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const c = color ?? pick(mode, "#2496ED", "#2496ED");
    const fg = pick(mode, "#FFFFFF", "#FFFFFF");

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="Docker">
            {/* blocks */}
            <path
                d="M6 8h3v3H6V8zm3.5 0h3v3h-3V8zM13 8h3v3h-3V8zM9.5 4.5h3v3h-3v-3z"
                fill={c}
            />
            {/* whale body */}
            <path
                d="M4.3 12.2h14.1c.4 2.9-1.6 6-5.9 6H9.1c-3 0-4.9-2-5.3-4.5-.1-.5.2-1 .5-1z"
                fill={c}
            />
            {/* waterline highlight */}
            <path
                d="M6 14.2h11.8c-.6 1.6-2.2 2.9-5.3 2.9H9.2c-1.7 0-2.7-.9-3.2-2.1z"
                fill={fg}
                opacity={0.25}
            />
            {/* tiny "eye" */}
            <circle cx="16.8" cy="14.3" r="0.6" fill={fg} opacity={0.9} />
        </svg>
    );
};

/* ------------------------------ Storybook ------------------------------ */
export const StorybookIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const c = color ?? pick(mode, "#FF4785", "#FF4785");
    const fg = pick(mode, "#FFFFFF", "#FFFFFF");

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="Storybook">
            <path
                d="M6 3.5h12c1.1 0 2 .9 2 2v13c0 1.1-.9 2-2 2H8.3c-1.3 0-2.3-1-2.3-2.3V3.5z"
                fill={c}
            />
            <path
                d="M8.5 6.8h6.3c1.1 0 2 .9 2 2 0 1-.7 1.8-1.6 2 1.1.2 1.9 1.1 1.9 2.3 0 1.6-1.2 2.7-3 2.7H8.5V6.8zm5.9 4.2c.7 0 1.2-.4 1.2-1s-.5-1-1.2-1h-3.8v2h3.8zm.2 4.4c1 0 1.6-.5 1.6-1.3 0-.8-.6-1.3-1.6-1.3H10v2.6h4.6z"
                fill={fg}
                opacity={0.95}
            />
        </svg>
    );
};

/* ------------------------------ React Native ------------------------------ */
export const ReactNativeIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const c = color ?? pick(mode, "#61DAFB", "#61DAFB");
    const stroke = c;

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="React Native">
            <circle cx="12" cy="12" r="1.6" fill={c} />
            <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                fill="none"
                stroke={stroke}
                strokeWidth="1.6"
            />
            <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                fill="none"
                stroke={stroke}
                strokeWidth="1.6"
                transform="rotate(60 12 12)"
            />
            <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                fill="none"
                stroke={stroke}
                strokeWidth="1.6"
                transform="rotate(120 12 12)"
            />
        </svg>
    );
};

/* -------------------------------- Expo -------------------------------- */
export const ExpoIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const c = color ?? pick(mode, "#111827", "#FFFFFF");
    const bg = pick(mode, "#FFFFFF", "#111827");

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="Expo">
            <rect x="3" y="3" width="18" height="18" rx="5" fill={bg} />
            {/* simple "mountain/cone" mark */}
            <path
                d="M12 6.3c1.6 2.9 3.8 7.1 5.1 9.7.3.7-.1 1.3-.9 1.3H7.8c-.8 0-1.2-.6-.9-1.3 1.3-2.6 3.5-6.8 5.1-9.7z"
                fill={c}
                opacity={0.95}
            />
        </svg>
    );
};

/* ------------------------------- OpenAI ------------------------------- */
export const OpenAIIcon: React.FC<IconProps> = ({ color, size = 24, mode }) => {
    const c = color ?? pick(mode, "#111111", "#FFFFFF");

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="OpenAI">
            {/* knot-ish hex flower (inspired, not exact) */}
            <path
                d="M12 3.2c1.4 0 2.7.6 3.6 1.7l1.8 2.1c.7.9.9 2 .6 3.1l-.2.7.7.1c1.1.2 2.1.9 2.6 1.9.7 1.3.5 2.9-.4 4.1l-1.8 2.3c-.7.9-1.8 1.4-3 1.4h-.7l-.2.7c-.3 1.1-1 2.1-2 2.6-1.3.7-2.9.5-4.1-.4L6.4 20c-.9-.7-1.4-1.8-1.4-3v-.7l-.7-.2c-1.1-.3-2.1-1-2.6-2-.7-1.3-.5-2.9.4-4.1L4 7.7c.7-.9 1.8-1.4 3-1.4h.7l.2-.7c.3-1.1 1-2.1 2-2.6.6-.3 1.4-.5 2.1-.5z"
                fill={c}
                opacity={0.95}
            />
            {/* inner hole */}
            <circle cx="12" cy="12" r="3.2" fill={pick(mode, "#FFFFFF", "#111111")} />
        </svg>
    );
};

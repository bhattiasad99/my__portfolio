import Link from 'next/link'
import React, { FC } from 'react'

type IProps = {
    to: string;
    children: React.ReactNode;
    className?: string;
    rel?: string;
    openInNewTab?: boolean;
}

const LinkComponent: FC<IProps> = ({ to, children, className, openInNewTab = false, rel }) => {
    const target = openInNewTab ? '_blank' : undefined;
    return (
        <Link href={to} className={className} target={target} rel={rel}>
            {children}
        </Link>
    )
}

export default LinkComponent
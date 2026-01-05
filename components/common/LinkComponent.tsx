import Link from 'next/link'
import React, { FC } from 'react'

type IProps = {
    to: string;
    children: React.ReactNode;
    className?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    rel?: string;
}

const LinkComponent: FC<IProps> = ({ to, children, className, target = "_blank", rel }) => {
    return (
        <Link href={to} className={className} target={target} rel={rel}>
            {children}
        </Link>
    )
}

export default LinkComponent
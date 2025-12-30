import Image from 'next/image'
import { FC } from 'react'

type IProps = {
    source: string,
    altText: string,
    width?: number,
    height?: number,
    className?: string
}

const ImageComponent: FC<IProps> = ({ source, altText, width, height, className }) => {
    return (
        <Image src={source} alt={altText} width={width} height={height} className={className} />
    )
}

export default ImageComponent
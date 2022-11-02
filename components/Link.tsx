import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'
import Link from 'next/link'


interface PropItem {
    id:number,
    title:string,
    path:string,
    img:any
}

type LinkProps = {data:PropItem}




export default function LinkComponent(props:LinkProps) {
    let x = props.data
    const { pathname } = useRouter()
    return (
        <Link className='flex  w-full' href={x.path}>
            <Image src={x.img} width={20} height={20} alt="" /><span className={pathname !== x.path ?
                ' my-[15px] font-[600] px-[10px] w-full'
                : ' my-[15px] font-[600] px-[10px]  w-full  shadow-[inset_-5px_0_0_0_#4F27BF]'}>
                {x.title}
            </span>
        </Link>
    );
};


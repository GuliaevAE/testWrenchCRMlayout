import Link from 'next/link'
import Image from 'next/image'
import Виджеты from '../assets/menu/Виджеты.svg'
import Выход from '../assets/menu/Выход.svg'
import Главная from '../assets/menu/Главная.svg'
import Календарь from '../assets/menu/Календарь.svg'
import Карта from '../assets/menu/Карта.svg'
import Настройки from '../assets/menu/Настройки.svg'
import Поиск_адресов from '../assets/menu/Поиск_адресов.svg'
import Таблица from '../assets/menu/Таблица.svg'
import Logo from '../assets/Logo.svg'
import person from '../assets/ic_person.svg'
import Menu from '../assets/menu_icon.svg'
import { useState } from 'react'
import styles from '../styles/Layouts.module.scss'
import { PropsWithChildren } from "react";
import LinkComponent from '../components/Link'

export default function Layout({ children }: PropsWithChildren) {
    const [menuChanger, setMenu] = useState<boolean>(false)
    const navigation = [
        { id: 1, title: 'Главная', path: '/news', img: Главная },
        { id: 2, title: 'Поиск адресов', path: '/', img: Поиск_адресов },
        { id: 3, title: 'Таблицы', path: '/404', img: Таблица },
        { id: 4, title: 'Календарь', path: '/404', img: Календарь },
        { id: 5, title: 'Карты', path: '/404', img: Карта },
        { id: 6, title: 'Виджеты', path: '/404', img: Виджеты },
        { id: 7, title: 'Настройки', path: '/404', img: Настройки },
        { id: 8, title: 'Выход', path: '/404', img: Выход },
    ]

    return (
        <>
            <div className=' '>
                <div className='flex flex-row relative z-[3] bg-[#4F27BF] h-[8vh] text-[20px] justify-between items-center px-[20px]'>
                    <Image onClick={() => setMenu(!menuChanger)} src={Menu} width={35} height={35} alt="" className=' min-[768px]:hidden' />
                    <div className='flex'>
                        <Image src={Logo} width={35} height={35} alt="" />
                        <span className='ml-[20px]'>Wrench CRM</span>
                    </div>
                    <div className='flex'>
                        <Image src={person} width={35} height={35} alt="" />
                        <span className='ml-[20px] max-[768px]:hidden'>Имя Фамилия</span>
                    </div>
                    <div className='absolute top-[8vh] right-0 left-0 bg-[#4F27BF] flex flex-col pl-[10px]'>
                        {menuChanger && navigation.map(x =>
                            <div key={x.id} className=''>
                                <LinkComponent  data={x}/>
                            </div>
                        )}
                    </div>
                </div>

                <div className=' h-full flex flex-row  '>
                    <div className='bg-[white] flex flex-col z-[2]  text-[black] shadow-[1px_0_3px_0_#000000] pl-[20px] max-[768px]:hidden' >
                        <span className='my-[15px] font-[600]'>Меню</span>
                        {navigation.map(x =>
                            <div key={x.path} className=''>
                                <LinkComponent data={x}/> 
                            </div>
                        )}
                    </div>
                    <div className={styles.children}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
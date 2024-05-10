'use client'
import { Person } from '@/api/persons'
import s from './TabsComponent.module.scss'

import React, { useState } from 'react'
import { formatDateTime } from '@/utils/formatDateTime'

type Tab = 'tab1' | 'tab2'

const TabsComponent = ({ person }: { person: Person | null }) => {
    const [activeTab, setActiveTab] = useState<Tab>('tab1')

    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab)
    }

    return (
        <div className={s.container}>
            <div className={s.btnsContainer}>
                <button
                    onClick={() => handleTabClick('tab1')}
                    className={`${s.tabBtn} ${activeTab === 'tab1' ? s.active : ''}`}
                >
                    Информация
                </button>
                <button
                    onClick={() => handleTabClick('tab2')}
                    className={`${s.tabBtn} ${activeTab === 'tab2' ? s.active : ''}`}
                >
                    Биография{' '}
                </button>
            </div>
            {activeTab === 'tab1' && (
                <div className={s.infoContent}>
                    {/* <div className={s.infoContentElement}>
                        <div>Карьера:</div>
                        <div>{person?.description}</div>
                    </div> */}
                    <div className={s.infoContentElement}>
                        <div>Дата рождения:</div>
                        <div
                            className={s.characteristicValue}
                        >{`${formatDateTime(person?.birthday || '')} (${person?.age} лет)`}</div>
                    </div>
                    {person?.death ? (
                        <div className={s.infoContentElement}>
                            <div>Дата смерти:</div>
                            <div
                                className={s.characteristicValue}
                            >{`${formatDateTime(person?.death || '')} (${person?.age} лет)`}</div>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className={s.infoContentElement}>
                        <div className={s.characteristicTitle}>Пол:</div>
                        <div className={s.characteristicValue}>
                            {person?.sex}
                        </div>
                    </div>
                    <div className={s.infoContentElement}>
                        <div className={s.characteristicTitle}>Рост:</div>
                        <div className={s.characteristicValue}>
                            {person?.growth}
                        </div>
                    </div>
                    <div className={s.infoContentElement}>
                        <div className={s.characteristicTitle}>
                            Количество наград:
                        </div>
                        <div className={s.characteristicValue}>
                            {person?.countAwards}
                        </div>
                    </div>
                    <div className={s.infoContentElement}>
                        <div className={s.characteristicTitle}>
                            Место рождения:
                        </div>
                        <div className={s.characteristicValue}>
                            {person?.birthPlace
                                ?.map(p => p.value)
                                ?.reduce((acc, value) => acc + value + ' ', '')}
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 'tab2' && <div className={s.biography}>{}</div>}
        </div>
    )
}

export default TabsComponent

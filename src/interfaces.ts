import { ReactNode } from "react";

export interface CustomComponentProps{
    children?: ReactNode
    className?: string
}

export interface Season{
    id: number
}
export interface Film{
    id: number
    title: string
    desciption: string
    posterPath: string
    coverPath: string
    genreIds: number[]
    seasons: Season[]
}
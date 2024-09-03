import React from "react"
import "./BuoButton.scss"

export default function (props: {
    href: string,
    submit?: boolean,
    children: React.ReactNode
}) {
    if (props.submit) {
        return (
            <>
            </>
        )
    } else {
        return (
            <div>
                <a className="buo-button relative before:w-0 before:h-full before:bg-primary-default before:top-0 before:left-0 before:absolute before:transition-all hover:before:w-full" href={props.href}>
                    <span className="relative">{props.children}</span>
                </a>
            </div>
        )
    }

};
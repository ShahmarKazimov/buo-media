import { NavLink } from "react-router-dom"

export default function (props: {
    name: string,
    href: string
}) {
    return (
        <>
            <div>
                
                <NavLink
                    to={props.href}
                    className={({ isActive }) =>
                        "ham-menu-link " + (isActive ? "active " : "")
                    }
                >
                    {props.name}
                </NavLink>

            </div>
        </>
    )
}
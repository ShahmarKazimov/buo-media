import { NavLink } from "react-router-dom"

export default function MenuLink(props: {
    name: string,
    href: string
}) {
    return (
        <>
            <div>
                <NavLink
                    to={props.href}
                    className={({ isActive }) =>
                        "menu-link-item " + (isActive ? "active " : "")
                    }
                >
                    {props.name}
                </NavLink>

            </div>
        </>
    )
}
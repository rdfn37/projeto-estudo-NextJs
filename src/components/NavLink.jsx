import Link from "next/dist/client/link"

const NavLink = (props) => {
    return(
        <Link href={props.link}>{props.pageName}</Link>
    )
}

export default NavLink
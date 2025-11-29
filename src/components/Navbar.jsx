import { navIcons } from "@constants"
import { navLinks } from "@constants"
import dayjs from "dayjs"

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="Logo" />
            <p className="font-bold">Gerald's Portfolio</p>
            <ul>
                {navLinks.map((item) => (
                    <li key={item.id}><p>{item.name}</p></li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {navIcons.map((icon) => (
                    <li key={icon.id}><img src={icon.img} className="icon-hover" alt={`Icon ${icon.id}`} /></li>
                ))}
            </ul>
            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
  )
}
export default Navbar
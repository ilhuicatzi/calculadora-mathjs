import {ToggleTheme} from './toggleTheme'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-5 py-3 shadow-sm shadow-slate-200 dark:shadow-slate-900 mb-4'>
      <Link to="/" className='text-2xl font-bold'>App</Link>
      <ul className='flex items-center gap-4'>
        <li className='text-sm font-medium hover:text-sky-500 dark:hover:text-sky-900  rounded-md px-2'><Link to="/about">
          About
        </Link></li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="lux-container py-4">
      <ol className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-medium text-cacao/40">
        <li>
          <Link to="/" className="hover:text-cacao transition-colors">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight size={10} className="text-cacao/20" />
              {last ? (
                <span className="text-cacao">{value.replace(/-/g, ' ')}</span>
              ) : (
                <Link to={to} className="hover:text-cacao transition-colors">
                  {value.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

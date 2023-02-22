import { CiBasketball } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { UserControls } from './UserControls';

export const Header = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg inline-block">
        <Link to="/" title="Home" className="flex gap-2 items-center">
          <CiBasketball size={24} className="inline-block"></CiBasketball>Game
          shell
        </Link>
      </h1>

      <div>
        <UserControls></UserControls>
      </div>
    </div>
  );
};

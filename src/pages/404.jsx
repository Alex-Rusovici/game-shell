import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FullScreenLayout } from '../layouts';

export const FourOhFour = () => {
  const dispatch = useDispatch();

  return (
    <FullScreenLayout>
      <div className="bg-pink-300 w-screen h-screen flex items-center justify-center">
        <div className="text-center text-white flex flex-col gap-4">
          <span className="text-7xl animate-pulse block">404</span>
          <span className="uppercase">Page not found</span>

          <Link to="/" title="Home" className="text-pink-100">
            Return to home
          </Link>
        </div>

        <button
          onClick={() => {
            dispatch({
              type: 'add',
              payload: 404,
            });
          }}
        >
          Add 404 to state
        </button>
      </div>
    </FullScreenLayout>
  );
};

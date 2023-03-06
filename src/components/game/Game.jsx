import { useDispatch } from 'react-redux';
import { resolveGame } from '../../store/actions/game/gameActions';
import { Button } from '../common/ui';

export const Game = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
      <Button
        skin="danger"
        title="Lose Game"
        onClick={() => {
          dispatch(resolveGame(false));
        }}
      >
        Lose Game
      </Button>

      <Button
        skin="success"
        title="Win Game"
        onClick={() => {
          dispatch(resolveGame(true));
        }}
      >
        Win Game
      </Button>
    </div>
  );
};

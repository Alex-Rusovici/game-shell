import { useSelector } from 'react-redux';

export const StatsList = () => {
  const stats = useSelector(({ auth }) => {
    return auth.stats;
  });

  const { gamesPlayed, gamesLost, gamesWon } = stats;

  return (
    <ul className="border rounded-md shadow">
      <li>{gamesPlayed}</li>
      <li>{gamesWon}</li>
      <li>{gamesLost}</li>
    </ul>
  );
};

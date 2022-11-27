import Image from 'next/image';

const teams = [
  '/images/njoku.svg',
  '/images/justice.svg',
  '/images/clement.svg',
  '/images/joseph.svg',
];

const Teams = () => {
  return (
    <div id="team" className="teams">
      <div className="container">
        <h2 className="teams__title">Okay, The Team 😲</h2>
        <div className="teams__desc">
          Meet the PNS team, specialised in engineering, design. developer
          relations and more.
        </div>
        <div className="teams__wrapper">
          {teams.map((team, index) => (
            <Image
              key={index}
              className="teams__image"
              style={{ objectFit: 'contain' }}
              width={318}
              height={391}
              src={team}
              alt="team member image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;

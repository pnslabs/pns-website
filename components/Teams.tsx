import Image from 'next/image';

const teams = [
  {
    firstName: 'Njoku',
    lastName: 'Emmanuel',
    role: 'Engineering 👨🏾‍💻',
    image: '/images/njoku.png',
  },
  {
    firstName: 'Justice',
    lastName: 'Eziefule',
    role: 'Engineering 👨🏾‍💻',
    image: '/images/justice.png',
  },
  {
    firstName: 'Clement',
    lastName: 'Hugbo',
    role: 'Design 🎨',
    image: '/images/clement.png',
  },
  {
    firstName: 'Joseph',
    lastName: 'Peculiar',
    role: 'Engineering 👨🏾‍💻',
    image: '/images/joseph.png',
  },
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
            <div className="teams__image-wrapper">
              <div className="teams__image-details">
                <div>
                  <div className="teams__name">
                    <div>{team.firstName}</div>
                    <div className="teams__first-name">{team.lastName}</div>
                  </div>
                  <div className="teams__role">{team.role}</div>
                </div>
                <div></div>
              </div>
              <Image
                key={index}
                className="teams__image"
                style={{ objectFit: 'contain' }}
                width={338}
                height={300}
                src={team.image}
                alt="team member image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;

// Images
import AmpaisTeam01 from '../../Assets/Images/Ampais-Team-01.jpg';
import AmpaisTeam02 from '../../Assets/Images/Ampais-Team-02.jpg';
import AmpaisTeam03 from '../../Assets/Images/Ampais-Team-03.jpg';
// Components
import HedSection from '../../Components/HedSection/HedSection';
import SocialMedia from '../../Parts/Social-Media/Social-Media';
// Css
import './Our-Team.css';

// Fake Server
const data = [
  {
    id: 1,
    image: AmpaisTeam01,
    alt: 'Ampais Team',
    name: 'george johnson',
    job: 'commercial director',
    facebook: '',
    twitter: '',
    instagram: ''
  },

  {
    id: 2,
    image: AmpaisTeam03,
    alt: 'Ampais Team',
    name: 'simon taylor',
    job: 'creative director',
    facebook: '',
    twitter: '',
    instagram: ''
  },
  
  {
    id: 3,
    image: AmpaisTeam02,
    alt: 'Ampais Team',
    name: 'elizabeth berkley',
    job: 'operations director',
    facebook: '',
    twitter: '',
    instagram: ''
  },
];

function OurTeam() {
  return (
    <div className='our-team parent-semicircular'>
      {/* semicircular */}
      <div className='semicircular'></div>

      <div className='container'>
        <HedSection
          title='meet our team'
          content='Ampais Constructions embodies the values, ideals, traditions, and ethics honed through years of experience in residential construction. Our steadfast loyalty and commitment to our employees, clients, and craft have been crucial in building a strong statewide client base. We deeply value the dedication and loyalty of our employees and clients and are continuously striving to perfect our brand for the future.'
        />

        <div className='parent-items'>
          {data.map(item => {
            const {id,image,alt,name,job,facebook,twitter,instagram} = item;

            return (
              <section key={id} className='Person-Card'>
                <div className='parent-img'>
                  <img src={image} alt={alt} className='card-img'/>
                </div>

                <div className='card-content'>
                  <h3 className='title-md'>{name}</h3>
                  <h3 className='title-md'>{job}</h3>

                  <nav className='card-social'>
                    <SocialMedia
                      url={`https://m.facebook.com/${facebook}`}
                      className='card-social-icon'
                      tooltip='facebook'
                      icon='icon-facebook'
                    />
                    
                    <SocialMedia
                      url={`https://www.Twitter.com/${twitter}`}
                      className='card-social-icon'
                      tooltip='twitter'
                      icon='icon-twitter'
                    />
                    
                    <SocialMedia
                      url={`https://www.instagram.com/${instagram}`}
                      className='card-social-icon'
                      tooltip='instagram'
                      icon='icon-instagram'
                    />
                  </nav>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
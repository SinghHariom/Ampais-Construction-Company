// Images
import AmpaisTeam01 from '../../Assets/Images/AmpaisTeam01.jpeg';
import AmpaisTeam02 from '../../Assets/Images/AmpaisTeam02.jpeg';
import AmpaisTeam03 from '../../Assets/Images/AmpaisTeam03.jpeg';
// Components
import HedSection from '../../Components/HedSection/HedSection';
//import SocialMedia from '../../Parts/Social-Media/Social-Media';
// Css
import './Our-Team.css';

// Fake Server
const data = [
  {
    id: 1,
    image: AmpaisTeam01,
    alt: 'Ampais Team',
    name: 'Er. Sakeel khan ( B.E. Civil )',
    job: 'Director'
  },

  {
    id: 2,
    image: AmpaisTeam02,
    alt: 'Ampais Team',
    name: 'Munawer Ali (M tech Structure engineer)',
    job: 'Executive Engineer'
    
  },
  
  {
    id: 3,
    image: AmpaisTeam03,
    alt: 'Ampais Team',
    name: 'Arvind Wanshkar',
    job: 'Site incharge'
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
            const {id,image,alt,name,job} = item;

            return (
              <section key={id} className='Person-Card'>
                <div className='parent-img'>
                  <img src={image} alt={alt} className='card-img'/>
                </div>

                <div className='card-content'>
                  <h3 className='title-md'>{name}</h3>
                  <h3 className='title-md job-title'>{job}</h3>

                  
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
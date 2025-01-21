import Project01 from '../../Assets/Images/Work Image1.jpg';
import Project02 from '../../Assets/Images/Work Image2.jpg';
import Project03 from '../../Assets/Images/Work Image3.jpeg';
import Project04 from '../../Assets/Images/Work Image4.jpg';
import Project05 from '../../Assets/Images/Work Image5 MUGA.jpg';
import Project06 from '../../Assets/Images/Work Image Residential.jpg';
// Components
import HedSection from '../HedSection/HedSection';
import ImgShadow from '../../Parts/ImgShadow/ImgShadow';
import BtnHide from '../../Parts/BtnHide/BtnHide';
const data = [
    {
      id: 1,
      image: Project01,
      alt: 'Football Ground',
      title: 'Football Ground',
      categories: ['Sports Construction']
    },
  
    {
      id: 2,
      image: Project02,
      alt: 'Race Track',
      title: 'Race Track',
      categories: ['Sports Construction']
    },
    
    {
      id: 3,
      image: Project03,
      alt: 'BadMinton Court',
      title: 'BadMinton Court',
      categories: ['Sports Construction']
    },
    {
      id: 4,
      image: Project04,
      alt: 'Baseball Ground',
      title: 'Baseball Ground',
      categories: ['Sports Construction']
    },
    {
      id: 5,
      image: Project05,
      alt: 'MUGA',
      title: 'Multi User Games Area',
      categories: ['Sports Construction']
    },
    {
      id: 6,
      image: Project06,
      alt: 'DPS Ujjain',
      title: 'Sun Valley Residence',
      categories: ['Residential Construction']
    }
  ];
  
  function Works() {
    return (
      <div className='works'>
        <div className='container'>
          <HedSection
            title='explore recent work'
            content='At Ampais Construction, we take pride in the exceptional work we do. Our projects reflect our commitment to quality, innovation, and customer satisfaction. We specialize in FIFA-approved soccer pitches and artificial grass football grounds, positioning ourselves as leading suppliers and manufacturers of high-quality turf. As versatile builders and contractors, we excel in creating multi-sport surfaces, including badminton courts. Our offerings include Astro Turf and garden grass at competitive prices. We provide comprehensive services in turf construction and installation, with clear and transparent cost structures.'
          />
  
          <div className='parent-items'>
            {data.map(item => {
              const {id,image,alt,link,title,categories} = item;
              
              return (
                <div key={id}>
                  <ImgShadow
                    image={image}
                    alt={alt}
                    link={link}
                    title={title}
                    categories={categories}
                  ></ImgShadow>
                </div>
              );
            })}
          </div>
          
          <BtnHide link='/work' content='projects'></BtnHide>
        </div>
      </div>
    );
  }
  
  export default Works;
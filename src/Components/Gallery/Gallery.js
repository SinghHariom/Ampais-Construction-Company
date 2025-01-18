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
      alt: 'Basket Ball Court',
      link: '/project01',
      title: 'Jaipur Basket Ball Court',
      categories: ['Sports Construction']
    },
  
    {
      id: 2,
      image: Project02,
      alt: 'Cinder Track',
      link: '/project02',
      title: 'Gwalior Cinder Track',
      categories: ['Sports Construction']
    },
    
    {
      id: 3,
      image: Project03,
      alt: 'DPS Ujjain',
      link: '/project03',
      title: 'DPS Ujjain',
      categories: ['Sports Construction']
    },
    {
      id: 4,
      image: Project04,
      alt: 'DPS Ujjain',
      link: '/project04',
      title: 'DPS Ujjain',
      categories: ['Sports Construction']
    },
    {
      id: 5,
      image: Project05,
      alt: 'DPS Ujjain',
      link: '/project05',
      title: 'DPS Ujjain',
      categories: ['Sports Construction']
    },
    {
      id: 6,
      image: Project06,
      alt: 'DPS Ujjain',
      link: '/project06',
      title: 'DPS Ujjain',
      categories: ['Sports Construction']
    }
  ];
  
  function Works() {
    return (
      <div className='works'>
        <div className='container'>
          <HedSection
            title='explore recent work'
            content='At Ampais Construction, we take pride in the exceptional work we do. Our projects reflect our commitment to quality, innovation, and customer satisfaction. We invite you to explore some of our recent accomplishments and see how we’ve helped our clients achieve their goals.'
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
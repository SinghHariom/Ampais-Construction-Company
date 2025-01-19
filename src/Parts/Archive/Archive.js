// Images
import Project01 from '../../Assets/Images/Work Image1.jpg';
import Project02 from '../../Assets/Images/Work Image2.jpg';
import Project03 from '../../Assets/Images/Work Image3.jpeg';
import Project04 from '../../Assets/Images/Work Image4.jpg';
import Project05 from '../../Assets/Images/Work Image5 MUGA.jpg';
import Project06 from '../../Assets/Images/Work Image Residential.jpg';
import Project07 from '../../Assets/Images/Work Image7.jpg';
import Project08 from '../../Assets/Images/Work Image8.jpg';
import Project09 from '../../Assets/Images/Work Image9 multicourt.jpg';
import Project10 from '../../Assets/Images/Work Image10.jpeg';
import Project11 from '../../Assets/Images/Work Image11.jpeg';
import Project12 from '../../Assets/Images/Work Image12.jpeg';
import Project13 from '../../Assets/Images/Work Image13 millenium school.jpeg';
import Project14 from '../../Assets/Images/Work Image14 skate rink.jpeg';
import Project15 from '../../Assets/Images/work image15.jpeg';
import Project16 from '../../Assets/Images/Work Image16.jpeg';
import Project17 from '../../Assets/Images/work image17.jpeg';
import Project18 from '../../Assets/Images/work image18.jpeg';
// Components
import ImgShadow from '../../Parts/ImgShadow/ImgShadow';
// Hooks
import useTab from '../../Hooks/useTab';
// Css
import './Archive.css';

// Fake Server
const data = [
    {
        id: 1,
        dataTarget: 'Sports Construction',
        image: Project01,
        alt: 'Football Ground',
        title: 'Football Ground',
        categories: ['Sports Construction']
      },
    
      {
        id: 2,
        dataTarget: 'Sports Construction',
        image: Project02,
        alt: 'Race Track',
        title: 'Race Track',
        categories: ['Sports Construction']
      },
      
      {
        id: 3,
        dataTarget: 'Sports Construction',
        image: Project03,
        alt: 'BadMinton Court',
        title: 'BadMinton Court',
        categories: ['Sports Construction']
      },
      {
        id: 4,
        dataTarget: 'Sports Construction',
        image: Project04,
        alt: 'Baseball Ground',
        title: 'Baseball Ground',
        categories: ['Sports Construction']
      },
      {
        id: 5,
        dataTarget: 'Sports Construction',
        image: Project05,
        alt: 'MUGA',
        title: 'Multi User Games Area',
        categories: ['Sports Construction']
      },
      {
        id: 6,
        dataTarget: 'Residential Construction',
        image: Project06,
        alt: 'DPS Ujjain',
        title: 'Sun Valley Residence',
        categories: ['Residential Construction']
      },
    {
        id: 7,
        dataTarget: 'Sports Construction',
        image: Project07,
        alt: 'Multi Uses Ground Area',
        title: 'Multi Uses Ground Area',
        categories: ['Sports Construction']
    },

    {
        id: 8,
        dataTarget: 'Sports Construction',
        image: Project08,
        alt: 'Cricket Ground',
        title: 'Cricket Ground',
        categories: ['Sports Construction']
    },
    
    {
        id: 9,
        dataTarget: 'Sports Construction',
        image: Project09,
        alt: 'Multi Uses Ground Area',
        title: 'Multi Uses Ground Area',
        categories: ['Sports Construction']
    },
    
    {
        id: 10,
        dataTarget: 'Sports Construction',
        image: Project10,
        alt: 'Cricket Ground',
        title: 'Cricket Ground',
        categories: ['Sports Construction']
    },
    
    {
        id: 11,
        dataTarget: 'Sports Construction',
        image: Project11,
        alt: 'Football Ground',
        title: 'Football Ground',
        categories: ['Sports Construction']
    },
    
    {
        id: 12,
        dataTarget: 'Sports Construction',
        image: Project12,
        alt: 'Race Track',
        title: 'Race Track',
        categories: ['Sports Construction']
    },
    
    {
        id: 13,
        dataTarget: 'Sports Construction',
        image: Project13,
        alt: 'School Ground',
        title: 'School Ground',
        categories: ['Sports Construction']
    },
    
    {
        id: 14,
        dataTarget: 'Sports Construction',
        image: Project14,
        alt: 'Skate Rink',
        title: 'Skate Rink',
        categories: ['Sports Construction']
    },
    
    {
        id: 15,
        dataTarget: 'Residential Construction',
        image: Project15,
        alt: 'Concrete House',
        title: 'Concrete house',
        categories: ['Residential Construction']
    },
    
    {
        id: 16,
        dataTarget: 'Sports Construction',
        image: Project16,
        alt: 'Race Track',
        title: 'Race Track',
        categories: ['Sports Construction']
    },
    
    {
        id: 17,
        dataTarget: 'Residential Construction',
        image: Project17,
        alt: 'InterLocking',
        title: 'InterLocking',
        categories: ['Residential Construction']
    },
    
    {
        id: 18,
        dataTarget: 'Sports Construction',
        image: Project18,
        alt: 'Skate Rink',
        title: 'Skate Rink',
        categories: ['Sports Construction']
    }
];

function Archive() {
    // tab
    useTab();

    return (
        <div className='archive'>
            <div className='container'>
                <ul className='tab'>
                    <li className='tab-item current-item' data-target='all'>all</li>
                    <li className='tab-item' data-target='Sports Construction'>Sports Construction</li>
                    <li className='tab-item' data-target='Residential Construction'>Residential Construction</li>
                </ul>

                <div className='parent-items'>
                    {data.map(item => {
                        const {id,dataTarget,image,alt,title,categories} = item;
                        
                        return (
                            <div className='tab-target' key={id} data-target={dataTarget}>
                                <ImgShadow
                                    image={image} 
                                    alt={alt} 
                                    title={title} 
                                    categories={categories}
                                ></ImgShadow>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Archive;
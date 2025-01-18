// Images
import Project01 from '../../Assets/Images/Work Image6.jpg';
import Project02 from '../../Assets/Images/Work Image7.jpg';
import Project03 from '../../Assets/Images/Work Image8.jpg';
import Project04 from '../../Assets/Images/Work Image9 multicourt.jpg';
import Project05 from '../../Assets/Images/Work Image10.jpeg';
import Project06 from '../../Assets/Images/Work Image11.jpeg';
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
        dataTarget: 'commercial',
        image: Project01,
        alt: 'Florida Heath Facility',
        link: '/project01',
        title: 'florida heath facility',
        categories: ['commercial']
    },

    {
        id: 2,
        dataTarget: 'residential',
        image: Project02,
        alt: 'Maine Modernity',
        link: '/project02',
        title: 'maine moderniti',
        categories: ['residential']
    },
    
    {
        id: 3,
        dataTarget: 'commercial',
        image: Project03,
        alt: 'Exclusive Urban Living',
        link: '/project03',
        title: 'exclusion urben living',
        categories: ['commercial']
    },
    
    {
        id: 4,
        dataTarget: 'residential',
        image: Project04,
        alt: 'Blue Concrete House',
        link: '/project04',
        title: 'blue concrete house',
        categories: ['residential']
    },
    
    {
        id: 5,
        dataTarget: 'residential',
        image: Project05,
        alt: 'Blue Concrete House',
        link: '/project05',
        title: 'blue concrete house',
        categories: ['residential']
    },
    
    {
        id: 6,
        dataTarget: 'residential',
        image: Project06,
        alt: 'Blue Concrete House',
        link: '/project06',
        title: 'blue concrete house',
        categories: ['residential']
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
                    <li className='tab-item' data-target='commercial'>commercial</li>
                    <li className='tab-item' data-target='residential'>residential</li>
                </ul>

                <div className='parent-items'>
                    {data.map(item => {
                        const {id,dataTarget,image,alt,link,title,categories} = item;
                        
                        return (
                            <div className='tab-target' key={id} data-target={dataTarget}>
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
            </div>
        </div>
    );
}

export default Archive;
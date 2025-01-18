// Components
import HedSection from '../../Components/HedSection/HedSection';
// Css
import './CoreValues.css';

// Fake Server
const data = [
  {
    id: 1,
    icon: 'icon-home',
    title: 'great services',
    content: 'We believe in giving back to the communities we serve. Our commitment to social responsibility drives us to engage in initiatives that make a positive impact on society and the environment. We strive to be a force for good, contributing to a better world for all'
  },
    
  {
    id: 2,
    icon: 'icon-setting',
    title: 'Excellence',
    content: 'Excellence is not just a goal; it is our standard. We are committed to delivering top-quality work in every project and service. Attention to detail, continuous improvement, and a relentless pursuit of perfection define our approach to excellence.'
  },
    
  {
    id: 3,
    icon: 'icon-users',
    title: 'Integrity',
    content: 'We conduct our business with the highest ethical standards. Honesty, transparency, and accountability are at the heart of our actions. We believe that trust is the cornerstone of every successful relationship, and we strive to earn and maintain it every day.'
  },
  
  {
    id: 4,
    icon: 'icon-bulb',
    title: 'creative solutions',
    content: 'Innovation is the driving force behind our success. We embrace change, challenge the status quo, and continuously seek new and creative solutions. By fostering a culture of innovation, we ensure that we stay ahead of industry trends and deliver cutting-edge results for our clients.'
  },
];

function Values() {
  return (
    <div className='values'>
      <div className='container'>
        <HedSection
          title='our core values'
          content='At Ampais Construction, our core values define who we are and guide everything we do. These principles are the foundation of our culture, our work, and our commitment to our clients and community. We believe that adhering to these values ensures we achieve excellence, foster innovation, and build lasting relationships.'
        />

        <div className='parent-items'>
          {data.map(item => {
            const {id,icon,title,content} = item;

            return (
              <section key={id} className='loop-card'>
                <div className='parent-icon'>
                  <i className={`loop-icon ${icon}`}></i>
                  <h3 className='title-sm subline'>{title}</h3>
                </div>
                
                <p>{content}</p>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Values;
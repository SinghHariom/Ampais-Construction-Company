// Images
import Materials from '../../Assets/Images/Work-Hero.jpeg';
// Components
import HedSectionAbout from '../../Components/HedSectionAbout/HedSectionAbout';
// Css
import './Inspiring.css';

function Inspiring() {
  return (
    <div className='inspiring'>
      <div className='container'>
        <HedSectionAbout
          title='building inspiring spaces'
          content1="
          Ampais Construction stands out as one of the premier manufacturers and suppliers of artificial turf grass in India. We pride ourselves on delivering top-tier artificial turf solutions for both athletic fields and landscaping projects. Our team of in-house engineering and project specialists are experts in sports construction and management, ensuring quality and satisfaction for our extensive client base.We specialize in constructing indoor and outdoor facilities for any conditions, regardless of land terrain, soil type, or project location. Our comprehensive services include consultation, construction, installation, and maintenance of all types of artificial turf sports fields across India."
          content2="
          We introduce sports systems to the market that prioritize top-tier quality, exceptional athletic performance, and sustainability, all customized to meet your specific needs. Picture an installation that is meticulously crafted and grounded in scientific principles, dedicated to preventing cartilage injuries. This innovative solution is designed with the utmost care to ensure the well-being and safety of athletes and sports enthusiasts. Our approach sets a new standard in sports system design, focusing on the health and performance of those who use our facilities."
          content3="
          We actively invite and encourage client participation throughout the construction journey. Our extensive experience, commitment to open communication, and high-quality standards enable us to expertly guide our clients through each phase. Our clients trust our innovation, technology, and results, positioning us as a leader in this dynamic market. We take pride in our unwavering quality and commitment and aspire to become an industry leader. With great passion, anticipation, and enthusiasm, we look forward to our continuously expanding business."
        />

        <img src={Materials} alt='Construction Materials' className='inspiring-img'/>
      </div>
    </div>
  );
}

export default Inspiring;
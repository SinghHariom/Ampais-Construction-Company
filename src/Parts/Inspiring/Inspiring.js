// Images
import Materials from '../../Assets/Images/Information-Hero.jpeg';
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
          Ampais Constructions, a licensed full-service general contractor in Gwalior, M.P., specializes in building high-quality sports fields and residential homes that enhance the communities we serve. Our passion for innovation and unwavering commitment to quality shine through in every project. With steadfast dedication to personal and professional integrity, we have emerged as a leading general contractor by consistently delivering exceptional quality and value to our clients."
          content2="
          Our foremost aim is to surpass our clients' expectations at every stage of the construction process. We uphold values of integrity, honesty, and accountability, ensuring they are reflected in every aspect of our projects, from estimation to closeout. Open communication between our project team and clients is fundamental to our success, and we deeply embed this culture in all our employees and suppliers to achieve complete client satisfaction."
          content3="
          We actively invite and encourage client participation throughout the construction journey. Our extensive experience, commitment to open communication, and high-quality standards enable us to expertly guide our clients through each phase. Our clients trust our innovation, technology, and results, positioning us as a leader in this dynamic market. We take pride in our unwavering quality and commitment and aspire to become an industry leader. With great passion, anticipation, and enthusiasm, we look forward to our continuously expanding business."
        />

        <img src={Materials} alt='Construction Materials' className='inspiring-img'/>
      </div>
    </div>
  );
}

export default Inspiring;
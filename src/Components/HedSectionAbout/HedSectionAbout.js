// Css
import './HedSectionAbout.css';

function HedSectionAbout(props) {
    const {title,content1,content2,content3} = props;

    return (
        <section className='hed-section'>
            <h2 className='title-md subline'>{title}</h2>
            <div>
            <p className='about-content'>{content1}</p>
            </div>
            <br/>
            <div>
            <p className='about-content'>{content2}</p>
            </div>
            <br/>
            <div>
            <p className='about-content'>{content3}</p>
            </div>
        </section>
    );
}

export default HedSectionAbout;
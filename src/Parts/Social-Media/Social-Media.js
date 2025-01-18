// Css
import './Social-Media.css';

function SocialMedia(props) {
    const {url,className,tooltip,icon} = props;

    return (
        <a href={url} target='_blank' rel="noopener noreferrer" className={`${className} tooltip`} data-tooltip={tooltip}>
            <i className={icon}></i>
        </a>
    );
}

export default SocialMedia;
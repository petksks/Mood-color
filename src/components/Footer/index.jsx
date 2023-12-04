import logo from '../../moodcolor_logo.svg'; 

const Footer = ({'data-testid': testId}) => {
    return (
        <div className="footer" data-testid={testId}>
            <img src={logo} alt="logo"></img>
            <a href="mailto:info@moodcolor.com">info@moodcolor.com</a>
        </div>
    )
}

export default Footer;
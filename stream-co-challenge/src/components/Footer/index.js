import './index.css';
import Button from '../Button';
import Divider from '../Divider';
import Text from '../Text';

const Footer = () => {
    const dividerStyle = { height: 'var(--font-size)' };
    const buttonStyle = {
        background: 'transparent',
        color: 'var(--primary)',
        padding: 0,
        marginRight: 'var(--spacing)',
        marginLeft: 'var(--spacing)',
    };

    const socials = ['facebook', 'twitter', 'instagram'];
    const menu = [
        'Home',
        'Terms and Conditions',
        'Privacy Policy',
        'Collection Statement',
        'Help',
        'Manage Account',
    ];

    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer-row footer-actions">
                    {menu.map((name, index) => (
                        <>
                            <Button
                                text={name}
                                style={
                                    index === 0
                                        ? { ...buttonStyle, marginLeft: 0 }
                                        : buttonStyle
                                }
                            />
                            {index !== menu.length - 1 && (
                                <Divider style={dividerStyle} />
                            )}
                        </>
                    ))}
                </div>
                <div className="footer-row footer-copyright">
                    <Text>
                        Copyright &copy; 2016 DEMO Streaming. All Rights
                        Reserved.
                    </Text>
                </div>
                <ul className="footer-row footer-socials">
                    {socials.map(name => (
                        <li>
                            <img
                                key={name}
                                className="footer-icon"
                                src={
                                    require(`../../assets/social/${name}-white.svg`)
                                        .default
                                }
                                alt={`${name}-icon`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Footer;

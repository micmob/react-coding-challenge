import './index.css';
import Text from '../Text';

const Header = ({ wrapperStyle, children, titleStyle, title }) => {
    return (
        <div className="header-wrapper" style={wrapperStyle}>
            <div className="header">
                <div className="header-item header-title" style={titleStyle}>
                    <Text
                        style={{
                            fontSize: '30px',
                        }}
                    >
                        {title}
                    </Text>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Header;

import './index.css';

const Text = ({ children, style }) => {
    return (
        <div className="text" style={style}>
            {children}
        </div>
    );
};

export default Text;

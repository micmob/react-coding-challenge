import './index.css';
import Button from '../Button';
import Header from '../Header';

const GlobalHeader = () => {
    return (
        <Header
            wrapperStyle={{
                background: 'var(--global-header-color)',
                height: 'var(--global-header-height)',
            }}
            titleStyle={{
                color: 'var(--primary)',
            }}
            title="DEMO Streaming"
        >
            <div className="global-header-item global-header-auth">
                <Button text="Login" />
                <Button
                    text="Start your free trial"
                    style={{
                        marginLeft: 'var(--spacing)',
                    }}
                />
            </div>
        </Header>
    );
};

export default GlobalHeader;

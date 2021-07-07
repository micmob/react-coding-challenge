import './index.css';
import Header from '../Header';

const PageHeader = ({ title }) => {
    return (
        <Header
            title={title}
            wrapperStyle={{
                background: 'var(--page-header-color)',
                height: 'var(--page-header-height)',
            }}
            titleStyle={{
                color: 'var(--primary)',
            }}
        ></Header>
    );
};

export default PageHeader;

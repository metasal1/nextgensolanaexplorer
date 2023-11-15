import dynamic from 'next/dynamic';

const HankoProfile = dynamic(() => import('../_lib/HankoProfile'), { ssr: false })

const DashboardPage = () => {
    return (
        <HankoProfile />
    );
};

export default DashboardPage;
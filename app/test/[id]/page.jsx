import Individual from './Individual';

export const generateStaticParams = () => ['1', '2', '3'].map(id => ({ id }));

export default function Page({ params }) {
    return <Individual id={params.id} />;
}

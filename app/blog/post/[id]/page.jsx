import Individual from './Individual';
import { database } from '../../database';

export async function generateStaticParams() {
    const db = await database();
    const [posts] = await db.all('SELECT COUNT(*) length FROM posts;');

    return Array.from({ length: posts.length }, (_, i) => ({
        id: String(i + 1)
    }));
}

export default async function Page({ params }) {
    return <Individual id={(await Promise.resolve(params)).id} />;
}

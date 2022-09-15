import Image from 'next/image';
import Link from "next/link";
import s from './CategoryList.module.css';
import data from '../../ProductsCatalogData.json';

export function CategoryList() {

    return (
        <>
            <ul>
                    {data.categories.map(category =>
                        <li key={category.id}>
                            <Link href={`/category/[id]`} as={`/category/${category.id}`}>
                                <a>
                                    {category.name}
                                </a>
                            </Link>
                        </li>
                    )}
                </ul>
        </>
    );
}
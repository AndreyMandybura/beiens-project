import Image from 'next/image';
import s from './CategoryList.module.css';
import data from '../../ProductsCatalogData.json';

export function CategoryList() {

    return (
        <>
            <div >
                <ul >
                    {data.categories.map(category =>
                        <li key={category.id}>
                            <div>{category.name}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}
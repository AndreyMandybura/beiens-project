import Image from 'next/image';
import Link from "next/link";
import s from './CategoryList.module.css';
import data from '../../ProductsCatalogData.json';

export function CategoryList() {

    return (
        <>
            <div className={s.categoryListSection}></div>
            <ul className={s.categoryList}>
                {data.categories.map(category =>
                    <li className={s.categoryItem} key={category.id}>
                        <Link href={`/category/[id]`} as={`/category/${category.id}`}>
                            <a>
                                <div className={s.categoryLink}>
                                    <div className={s.categoryImg}>
                                        <Image
                                        src={category.img}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Kids toys"
                                        />
                                    </div>
                                    <p className={s.categoryTitle}>{category.name}</p>
                                </div>
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        </>
    );
}
import Image from 'next/image';
import Link from "next/link";
import s from './UrmywoCategoryList.module.css';
import data from '../../UrmywoProductsCatalogData.json';

export function UrmywoCategoryList() {

    return (
        <>
            <div className={s.categoryListSection}>
                <ul className={s.categoryList}>
                    {data.categories.map(category =>
                        <li className={s.categoryItem} key={category.id}>
                            <Link href={`/urmywocatalog/urmywocategory/[categoryID]`} as={`/urmywocatalog/urmywocategory/${category.id}`}>
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
            </div>
        </>
    );
}
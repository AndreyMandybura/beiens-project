import Image from 'next/image';
import s from './GalleryCollection.module.css';
import data from './GalleryCollectionData.json';

export function GalleryCollection() {

    return (
        <>
            <div className={s.gallerCollectionSection}>
                <ul className={s.gallerCollection}>
                    {data.map(img =>
                        <li className={s.gallerCollectionItem} key={img.id}>
                            <div className={s.gallerCollectionImg}>
                                <Image src={img.url}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}
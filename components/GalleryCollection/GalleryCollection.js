import GalleryCollectionItem from '../GalleryCollectionItem/GalleryCollectionItem';
import s from './GalleryCollection.module.css';
import data from './GalleryCollectionData.json';

export function GalleryCollection() {

    return (
        <>
            <div className={s.gallerCollectionSection}>
                <ul className={s.gallerCollection}>
                    {data.map(img =>
                        <GalleryCollectionItem key={img.id} img={img.url} />
                    )}
                </ul>
                
            </div>
        </>
    );
}
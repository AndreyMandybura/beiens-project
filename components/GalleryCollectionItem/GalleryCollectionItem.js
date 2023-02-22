import { useState } from 'react';
import Image from 'next/image';
import FsLightbox from "fslightbox-react";
import s from './GalleryCollectionItem.module.css';

function GalleryCollectionItem({ img }) {

const [toggler, setToggler] = useState(false);

  return (
    <li className={s.gallerCollectionItem} key={img.id}>
        <div className={s.galleryCollectionImg} onClick={() => setToggler(!toggler)}>
            <Image 
                src={img.find(index => index[1])}
                layout="fill"
                objectFit="cover"
                alt="child with a toy"
            />
        </div>
        <FsLightbox
            toggler={toggler}
            sources={img}
        />
    </li>
  );
}

export default GalleryCollectionItem;
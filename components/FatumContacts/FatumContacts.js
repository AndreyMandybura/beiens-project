import s from './FatumContacts.module.css';

export function FatumContacts() {

    return (
        <>
            <div className={s.contactsSection}>
                <div className={s.contactsImg}></div>
                <h2 className={s.contactsSectionTitle}>Офіційний імпортер ТМ <q>Beiens</q> в Україні: ТОВ <q>Фатум Україна</q></h2>
                <h3 className={s.contactsTitle}>Відділ роздрібної торгівлі</h3>
                <ul className={s.contactsList}>
                    <li className={s.contactsItem}>
                        <a className={s.activeLink} href='tel:+380674647785'>+38 067 464 77 85</a>
                    </li>
                    <li className={s.contactsItem}>
                        <a className={s.activeLink} href='mailto:official.beiens.ua@gmail.com'>official.beiens.ua@gmail.com</a>
                    </li>
                </ul>
                <h3 className={s.contactsTitle}>Співпраця з нами</h3>
                <ul className={s.contactsList}>
                    <li className={s.contactsItem}>
                        <a className={s.activeLink} href='tel:+380675378686'>+38 067 537 86 86</a>
                    </li>
                    <li className={s.contactsItem}>
                        <a className={s.activeLink} href='mailto:a.i.fatumfavorit@gmail.com'>a.i.fatumfavorit@gmail.com</a>
                    </li>
                </ul>
                <h3 className={s.contactsTitle}>Адреса</h3>
                <p className={s.contactsItem}>м. Київ, вул. Нагірна, 22, офіс 332</p>
                <iframe className={s.googleMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.340929912655!2d30.481534515899835!3d50.47199649369294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cddf4222858d%3A0x3d120be38ebe5356!2z0YPQuy4g0J3QsNCz0L7RgNC90LDRjywgMjIsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1658829969184!5m2!1sru!2sua" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
}
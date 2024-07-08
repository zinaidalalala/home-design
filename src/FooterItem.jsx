function FooterItem({ sectionName, title, items }) {
  return (
    <li className={`${sectionName}__item`}>
      <h3 className={`title ${sectionName}__subtitle`}>{title}</h3>
      <ul className={`${sectionName}__sublist`}>
        {items.map((item, index) => (
          <li className={`${sectionName}__subitem`} key={index}>
            {item.url ? (
              <a href={item.url} className={`${sectionName}__link`}>
                {item.name}
              </a>
            ) : (
              <span className={`${sectionName}__text`}>{item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default FooterItem;

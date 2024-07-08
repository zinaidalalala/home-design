function Section({ wrapper, sectionName, title, children }) {
  const WrapperTag = wrapper || "section";

  return (
    <WrapperTag className={sectionName}>
      <div className={`container ${sectionName}__container`}>
        {title && <h2 className={`title ${sectionName}__title`}>{title}</h2>}
        {children}
      </div>
    </WrapperTag>
  );
}

export default Section;

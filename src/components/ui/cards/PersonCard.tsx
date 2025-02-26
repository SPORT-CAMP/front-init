export type PersonCardProps = {
  index: number;
  title: string;
  textList: string[];
  iconPath: string;
  alt: string;
};

export default function PersonCard(props: PersonCardProps) {
  const { title, textList, iconPath, alt } = props;
  return (
    <article className="card">
      <div className="card__body">
        <img className="card__icon-user" src={iconPath} alt={alt} />
        <h3 className="card__sub-title">{title}</h3>
        {textList.map((text, index) => (
          <p className="card__text" key={index}>
            {text}
          </p>
        ))}
      </div>
    </article>
  );
}

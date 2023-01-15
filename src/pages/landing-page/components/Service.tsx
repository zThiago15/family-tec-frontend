interface ServiceProps {
  imgService: string
  nameService: string,
}

export default function Service(props: ServiceProps) {
  const {nameService, imgService} = props
  
  return (
    <div>
      <span>
        <img src={imgService} alt={nameService} />
      </span>
      <p>{nameService}</p>
      <hr />
    </div>
  );

}
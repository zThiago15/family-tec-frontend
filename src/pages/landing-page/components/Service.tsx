interface ServiceProps {
  imgService: string
  nameService: string,
}

export default function Service(props: ServiceProps) {
  const {nameService, imgService} = props
  
  return (
    <div className="my-3">
      <img src={imgService} alt={nameService} className="border-solid border-primary-color border-[0.5em] rounded-full p-5" />
      <p className="text-center">{nameService}</p>
      <hr className="border-solid border-black" />
    </div>
  );

}
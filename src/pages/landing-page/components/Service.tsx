interface ServiceProps {
  imgService: string
  nameService: string,
}

export default function Service(props: ServiceProps) {
  const {nameService, imgService} = props
  
  return (
    <div className="my-5">
      <img src={imgService} alt={nameService} className="border-solid border-primary-color border-[0.5em] rounded-full p-5 lg:w-40" />
      <p className="text-center text-primary-color text-2xl font-medium lg:my-5">{nameService}</p>
      <hr className="border-solid border-black" />
    </div>
  );

}
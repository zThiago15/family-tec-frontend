interface ServiceProps {
  imgStatus: string
  nameStatus: string,
}

export default function Status(props: ServiceProps) {
  const {nameStatus, imgStatus} = props
  
  return (
    <span className="flex items-center">
      <img src={imgStatus} alt="status" className="border-solid border-spacing-14 mr-2" />
      <p className="text-white text-lg">{nameStatus}</p>
    </span>
  );

}
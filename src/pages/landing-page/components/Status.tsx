interface ServiceProps {
  imgStatus: string
  nameStatus: string,
}

export default function Status(props: ServiceProps) {
  const {nameStatus, imgStatus} = props
  
  return (
    <span className="flex items-center flex-wrap">
      <img src={imgStatus} alt="status" className="" />
      <p className="text-primary-color">{nameStatus}</p>
    </span>
  );

}
interface ServiceProps {
  imgStatus: string
  nameStatus: string,
}

export default function Status(props: ServiceProps) {
  const {nameStatus, imgStatus} = props
  
  return (
    <span className="flex items-center flex-wrap my-3">
      <img src={imgStatus} alt="status" className="border-solid border-spacing-14 mr-2" />
      <p className="text-primary-color text-lg">{nameStatus}</p>
    </span>
  );

}
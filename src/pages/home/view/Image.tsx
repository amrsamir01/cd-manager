import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import uploadImg from "../../../images/cloud-upload-regular-240.png";

export function Upload() {
  function getImageFileObject(imageFile: any) {
    console.log({ imageFile })
  }

  function runAfterImageDelete(file: any) {
    console.log({ file })
  }

  return (
    <ImageUploader
      onFileAdded={(img) => getImageFileObject(img)}
      onFileRemoved={(img) => runAfterImageDelete(img)}
      style={{
        width: 300,
        height: 350,
        fill: uploadImg
      }}
    />
  )
}
export default Upload;
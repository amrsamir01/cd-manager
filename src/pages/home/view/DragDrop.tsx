import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import ImageUploading from "react-images-uploading";
import uploadImg from "../../../images/cloud-upload-regular-240.png";

interface Props {
  onSubmitImage: (base64: string) => void;
  defualtImageBase64?: string;
}
export function DragDrop(props: Props) {
  const { onSubmitImage, defualtImageBase64 } = props;
  const [images, setImages] = React.useState<any[]>([]);
  const onChange = (imageList: any) => {
    onSubmitImage(imageList[0].data_url);
    setImages(imageList);
    console.log(imageList[0].data_url);
  };

  useEffect(() => {
    if (defualtImageBase64) {
      setImages([
        { data_url: defualtImageBase64 }
      ]);
    }
  }, []);

  return (
    <Box>
      {/* {defualtImageBase64 ? (
        <img src={defualtImageBase64}></img>
      ) : ( */}
        <div className="DragDrop">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              isDragging,
              dragProps,
            }) => (
              <Box
                style={isDragging ? { color: "red" } : undefined}
                {...dragProps}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 350,
                    width: 350,
                    border: "1px solid blue",
                    borderRadius: "30px",
                  }}
                  flexDirection={"column"}
                >
                  <img src={uploadImg} alt="" />
                  <Button onClick={onImageUpload}>Click or Drop here</Button>
                  &nbsp;
                  {imageList.map((image) => (
                    <Box>
                      <img
                        src={image["data_url"]}
                        alt=""
                        width="260"
                        height="300"
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          position: "absolute",
                          left: "460px",
                          bottom: "175px",
                        }}
                      />
                      <Box>
                        <Button
                          variant="outlined"
                          onClick={() => onImageUpdate(0)}
                        >
                          Update
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </ImageUploading>
        </div>
      {/* )} */}
    </Box>
  );
}
export default DragDrop;

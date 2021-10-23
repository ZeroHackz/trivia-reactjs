import React from "react";
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';

function UploadSnippetDiscordAutoSubmit() {
  const toast = (innerHTML) => {
    const el = document.getElementById('toast')
    el.innerHTML = innerHTML
    el.className = 'show'
    setTimeout(() => { el.className = el.className.replace('show', '') }, 3000)
  }

  const getUploadParams = () => {
    return { url: 'https://ebeningbot.herokuapp.com/api/v1/sounds' }
  }

  const handleChangeStatus = ({ meta, remove }, status) => {
    if (status === 'headers_received') {
      toast(`${meta.name} uploaded!`)
      remove()
    } else if (status === 'aborted') {
      toast(`${meta.name}, upload failed...`)
    }
  }
  return (
    <React.Fragment>
      <div id="toast">Auto Upload Box for audio and images only.</div>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        multiple={false}
        canCancel={false}
        accept="image/*,audio/*"
        inputContent="Drop A File For The Discord Bot!!"
        styles={{
          dropzone: { width: 720, height: 220 },
          dropzoneActive: { borderColor: 'green' },
        }}
      />
    </React.Fragment>
  );
}

export default UploadSnippetDiscordAutoSubmit;
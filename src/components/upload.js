import { Component, createRef } from 'react'
import OSS from 'ali-oss'

export class Upload extends Component {
  FileRef = createRef()
  handleUpload = async () => {
    let ossClient = new OSS({
      accessKeyId: 'LTAI5tL5ZD23fNtLrrVqxM5G',
      accessKeySecret: 'opTrKNbYpFwb2ZCFqfTr4bVBEVl193',
      bucket: 'wisdomhallsup',
      region: 'oss-cn-beijing'
    })
  
    const file = this.FileRef.current.files[0]
    try {
      // 上传文件
      const result = await ossClient.put(file.name, file);
      console.log('文件上传成功：', result);
    } catch (error) {
      console.error('文件上传失败：', error);
    }
  }
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <h2>oss 文件直传</h2>
        <br />
        <input type="file" ref={this.FileRef} onChange={this.handleUpload} />
      </div>
    )
  }
}

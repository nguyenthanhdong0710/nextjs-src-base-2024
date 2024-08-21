import { FileResponse } from 'src/ApiClient'

const downloadOctetStream = (response: FileResponse, fileName: string) => {
  try {
    const blob = response.data

    const link = document.createElement('a')
    link.download = fileName || ''
    link.href = URL.createObjectURL(blob)

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Download failed:', error)
  }
}

export default downloadOctetStream

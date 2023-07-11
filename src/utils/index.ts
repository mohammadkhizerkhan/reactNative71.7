import RNFS, {DownloadProgressCallbackResult} from 'react-native-fs';

// Function to download the PDF
export const downloadPDF = async (base64Data: string, fileName: string) => {
  const path = RNFS.DownloadDirectoryPath + `/${fileName}.pdf`;

  const base64PDF = base64Data.replace('data:application/pdf;base64,', '');
  console.log('------->', path);
  try {
    await RNFS.writeFile(path, base64PDF, 'base64');
    console.log('PDF downloaded successfully!');
  } catch (error) {
    console.log('Error while downloading PDF:', error);
  }
};

export const downloadURLPdf = async (url: string) => {
  const date = Date.now();
  const path = RNFS.DownloadDirectoryPath + `/dummyUrl_${date}.pdf`;
  try {
    const responsePromise = RNFS.downloadFile({
      fromUrl: url,
      toFile: path,
      progress: (received: DownloadProgressCallbackResult) => {
        const progress = (received.bytesWritten / received.contentLength) * 100;
        console.log(`Download progress: ${progress}%`);
      },
    });
    const response = await responsePromise.promise;
    if (response.statusCode === 200) {
      console.log('File downloaded successfully');
    } else {
      console.log('File download failed');
    }
  } catch (error) {
    console.error('Error while downloading file:', error);
  }
};

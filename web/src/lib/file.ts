/**
 *
 * file
 *
 */

// Given a File generate/get a Base64 string out of it.
export function toBase64(file: File) {
  return new Promise<Base64>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(String(reader.result).split('base64,')[1]);
    reader.onerror = (error) => reject(error);
  });
}

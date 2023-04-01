import { Image } from 'components/commonTypes';

/**
 * Formats bytes into a more readable format (via https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript)
 * @param bytes
 * @param decimals
 */
export const formatBytes = (bytes: number, decimals: number = 1) => {
    if (!+bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

/**
 * Formats a valid date string into "month (string) day (num), year (num)"
 * @param dateString
 */
export const formatDate = (dateString: string) => {
    const date = new Date(dateString).toLocaleString('en-us', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return date;
};

/** Takes an array of images and sorts them in a descending order based on the
 * createdAt date
 * @param Image[]
 */
export const sortImages = (images: Image[]) => {
    const sortedImages = images.sort(
        (a, b) => new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
    );

    return sortedImages;
};

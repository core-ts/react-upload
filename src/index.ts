import * as React from 'react';
import { FileUploads } from './model';
import { UploadType } from './UploadHook';

import '../FileUpload.css';
import '../Uploads.css';
export * from './CropImage';
export * from './Loading';
export * from './model';
export * from './RenderFile';
export * from './UploadHook';
export * from './UploadModal';

export type TypeFile = 'cover' | 'upload' | 'gallery';
export type OnClick = React.MouseEvent<HTMLElement, MouseEvent>;
export interface DragDropProps {
  list: FileUploads[];
  setList: React.Dispatch<React.SetStateAction<FileUploads[] | undefined>>;
  handleDeleteFile: (url: string, type: string) => Promise<void> | void;
}
interface StringMap {
  [key: string]: string;
}
export interface UploadContainerProps {
  setFileGallery?: (data: FileUploads[]) => void;
  type: UploadType;
  resource?: StringMap;
  setURL?: (u: string) => void;
  post: (
    url: string,
    obj: any,
    options?:
      | {
        headers?: Headers | undefined;
      }
      | undefined
  ) => Promise<any>;
  url: string;
  id: string;
  aspect: number;
  sizes: number[];
}

export interface FileUploadProps {
  type?: UploadType;
  post: (
    url: string,
    obj: any,
    options?:
      | {
        headers?: Headers | undefined;
      }
      | undefined
  ) => Promise<any>;
  url: string;
  id: string;
  sizes: number[];
  setGallery?: (file: FileUploads[]) => void;
  fetchImageGalleryUploaded?: () => Promise<FileUploads[]>;
  uploadVideoYoutube: (videoId: string) => Promise<number>;
  deleteFileYoutube: (fileUrl: string) => Promise<number>;
  deleteFile: (fileUrl: string) => Promise<number>;
  update: (data: FileUploads[]) => Promise<number>;
}

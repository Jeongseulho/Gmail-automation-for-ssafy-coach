import { FILE_CATEGORY } from '../constants/FileCategory';
export type FileCategoryValue = (typeof FILE_CATEGORY)[keyof typeof FILE_CATEGORY];

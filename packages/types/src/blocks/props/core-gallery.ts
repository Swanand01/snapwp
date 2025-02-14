import { PropsWithChildren } from 'react';
import { BlockAttributes, BlockProps } from '../base';

export interface CoreGalleryAttributes extends BlockAttributes {
	caption?: string;
	style?: string;
}

export interface CoreGalleryProps extends PropsWithChildren< BlockProps > {
	attributes?: CoreGalleryAttributes;
}

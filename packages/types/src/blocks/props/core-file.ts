import { BlockAttributes, BlockProps } from '../base';

export interface CoreFileAttributes extends BlockAttributes {
	displayPreview?: boolean;
	downloadButtonText?: string;
	fileId?: string;
	fileName?: string;
	href?: string;
	previewHeight: number;
	showDownloadButton: boolean;
	style?: string;
	textLinkHref?: string;
	textLinkTarget?: string;
}

export interface CoreFileProps extends BlockProps {
	attributes?: CoreFileAttributes;
}

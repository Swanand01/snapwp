export type BlockAttributes< T = {} > = {
	[ K in keyof T ]: T[ K ];
};

export interface BlockData {
	type: string;
	cssClassNames?: Array< string | null > | null;
	clientId?: string | null;
	parentClientId?: string | null;
	renderedHtml?: string | null;
	attributes?: BlockAttributes;
}

export type BlockProps< T extends BlockData = BlockData > = Omit< T, 'type' >;

export type BlockTreeNode< TBlockProps extends BlockData = BlockData > = Omit<
	TBlockProps,
	'parentClientId'
> & {
	children?: BlockTreeNode[] | null;
	renderer: React.FC< React.PropsWithChildren< TBlockProps > >;
};

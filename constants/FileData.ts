import { ImageSourcePropType } from "react-native";

export type FileDataType = {
	id: string;
	date: string;
	source: string;
	fileName:string;
	img: ImageSourcePropType;
};

export const FileData: FileDataType[] = [
	{
		id: "f1d3c9a2",
		date: "23/01/25",
		source: "On My iPhone",
		img: require("../assets/images/recentFiles/IMG_0452.png"),
		fileName: 'IMG_0452',
	},
	{
		id: "b2f9d8e4",
		date: "20/10/24",
		source: "iCloud Drive",
		img: require("../assets/images/recentFiles/IMG_3347.png"),
		fileName: 'IMG_3347',
	},
	{
		id: "e7a6b4c1",
		date: "15/08/23",
		source: "On My iPhone",
		img: require("../assets/images/recentFiles/Document_092.png"),
		fileName: 'Document_092',
	},
	{
		id: "c3f4e8d2",
		date: "09/07/22",
		source: "iCloud Drive",
		img: require("../assets/images/recentFiles/Screenshot_20220709-120435.png"),
		fileName: 'Screenshot_20220709-120435',
	},
	{
		id: "a9e5d7c8",
		date: "18/02/24",
		source: "On My iPhone",
		img: require("../assets/images/recentFiles/IMG_1084.png"),
		fileName: 'IMG_1084',
	},
	{
		id: "f2b8e6c3",
		date: "12/05/23",
		source: "iCloud Drive",
		img: require("../assets/images/recentFiles/PRO_photo_002.png"),
		fileName: 'PRO_photo_002',
	},
	{
		id: "e9d7f5a4",
		date: "28/09/24",
		source: "On My iPhone",
		img: require("../assets/images/recentFiles/IMG_9999.png"),
		fileName: 'IMG_9999',
	},
	{
		id: "a1b6d9e8",
		date: "30/06/23",
		source: "On My iPhone",
		img: require("../assets/images/recentFiles/Audio_Memo_20230630.png"),
		fileName: 'Audio_Memo_20230630',
	},
	{
		id: "f8e3c1d7",
		date: "17/12/21",
		source: "iCloud Drive",
		img: require("../assets/images/recentFiles/Screenshot_171221.png"),
		fileName: 'Screenshot_171221',
	},
	{
		id: "c5d7e9f4",
		date: "05/03/22",
		source: "On My iPhone",
		img: require("../assets/images/recentFiles/Notes_091924.png"),
		fileName: 'Notes_091924',
	},
	{
		id: "e7c4d2f8",
		date: "19/09/24",
		source: "iCloud Drive",
		img: require("../assets/images/recentFiles/IMG_19625_4322.png"),
		fileName: 'IMG_19625_4322',
		
	},
	{
		id: "f1e3d9a5",
		date: "10/10/23",
		source: "On My iPhone",
		img: require("../assets/images/recentFiles/IMG_0001.png"),
		fileName: 'IMG_0001',
	},
	{
		id: "c5d7e9af4",
		date: "05/03/22",
		source: "On My iPhone",
		img: require("../assets/images/recentFiles/IMG_0786.png"),
		fileName: 'IMG_0786',
	},
	{
		id: "e7cw4d2f8",
		date: "19/09/24",
		source: "iCloud Drive",
		img: require("../assets/images/recentFiles/fav_show_02.png"),
		fileName: 'fav_show_02',
	},
	{
		id: "f1ed3d9a5",
		date: "10/10/23",
		source: "On My iPhone",
		img: require("../assets/images/recentFiles/IMG_4321.png"),
		fileName: 'IMG_4321',
	},
];

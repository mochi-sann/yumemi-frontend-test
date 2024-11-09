import { atom } from "jotai";

export type prefPopulationAtomType = {
	PrefChart: Array<{
		prefCode: number;
		showGraph: boolean;
		PrefName: String;
		label?: string;
		data: Array<{
			year: number;
			value: number;
			rate?: number;
		}>;
	}>;
};

export const prefPopulationAtom = atom<prefPopulationAtomType>({
	PrefChart: [],
});
export const PrefCheckedListAtom = atom<number[]>([]);

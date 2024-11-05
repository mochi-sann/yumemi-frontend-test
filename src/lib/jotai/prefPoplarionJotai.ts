import { atom } from "jotai";

type prefPopulationAtomType = {
	PrefChart: Array<{
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

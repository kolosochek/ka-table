import { VirtualScrolling } from '../Models/VirtualScrolling';
export declare const isVirtualScrollingEnabled: (virtualScrolling?: VirtualScrolling) => boolean;
export declare const getVirtualized: (virtualScrolling: VirtualScrolling, data: any[], isNewRowShown?: boolean) => {
    beginHeight: number;
    endHeight: number;
    virtualizedData: any[];
};

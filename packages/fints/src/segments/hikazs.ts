import { SegmentClass } from "./segment";
import { SEPAAccount } from "../sepa-account";
import { Parse } from "../parse";

export class HIKAZSProps {
    public segNo: number;
    public maxRequestCount: number;
    public minSignatures: number;
}

/**
 * HIKAZS (Kontoumsätze/Zeitraum Parameter)
 * Section C.2.1.1.1.1
 */
export class HIKAZS extends SegmentClass(HIKAZSProps) {
    public type = "HIKAZS";

    protected serialize(): string[][] { throw new Error("Not implemented."); }

    protected deserialize(input: (string[] | string)[]) {
        const [ maxRequestCount, minSignatures ] = input;
        this.minSignatures = Parse.num(minSignatures as string);
        this.maxRequestCount = Parse.num(maxRequestCount as string);
    }
}
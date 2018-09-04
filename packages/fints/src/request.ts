import { Segment, HNSHK, HNVSK, HNVSD, HNSHA, HNHBS, HNHBK } from "./segments";
import { TANMethod } from "./tan";

export class FinTSRequestConfiguration {
    public blz: string;
    public name: string;
    public pin: string;
    public tan: string;
    public systemId: string;
    public dialogId: number;
    public msgNo: number;
    public tanMethods: TANMethod[] = [];
    public segments: Segment<any>[] = [];
}

export class FinTSRequest extends FinTSRequestConfiguration {
    public secRef: number;

    constructor(config: Partial<FinTSRequestConfiguration>) {
        super();
        Object.assign(this, config);
        // Generate `this.secRef`.
        this.secRef = Math.floor(1000000 + Math.random() * 8999999);
    }

    private get hasNo999SecurityFunction() {
        return this.tanMethods.length > 0 && !this.tanMethods.some(method => method.securityFunction === "999");
    }

    private get profileVersion() {
        return this.hasNo999SecurityFunction ? 2 : 1;
    }

    private get securityFunction() {
        return this.hasNo999SecurityFunction ? this.tanMethods[0].securityFunction : "999";
    }

    private get segmentCount() {
        // Add `3` because of:
        // - Not zero-based (0)
        // - HNHBK (1)
        // - HNSHK (2)
        return this.segments.length + 3;
    }

    public toString() {
        const {
            dialogId,
            secRef,
            blz,
            name,
            systemId,
            profileVersion,
            segmentCount,
            msgNo,
            pin,
            tan,
            securityFunction,
        } = this;
        const segmentsWithoutHeader = [
            new HNVSK({ segNo: 998, blz, name, systemId, profileVersion }),
            new HNVSD({
                segNo: 999,
                segments: [
                    new HNSHK({ segNo: 2, secRef, blz, name, systemId, profileVersion, securityFunction }),
                    ...this.segments,
                    new HNSHA({ segNo: segmentCount, secRef, pin, tan }),
                ],
            }),
            // Add `1` to the index because of HNSHA.
            new HNHBS({ segNo: segmentCount + 1, msgNo }),
        ];
        let length = segmentsWithoutHeader.reduce((result, segment) => result + String(segment).length, 0);
        const segments = [
            new HNHBK({ segNo: 1, msgLength: length, dialogId, msgNo }),
            ...segmentsWithoutHeader,
        ];
        return segments
            .map(segment => String(segment))
            .join("");
    }
}
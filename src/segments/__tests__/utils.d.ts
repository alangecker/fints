import { Constructable } from "../../types";
export interface TestData {
    serialized: string;
    structured: any;
}
export declare type Direction = "bi" | "in" | "out";
export declare function testSegment(segmentClass: Constructable<any>, testData: TestData[], direction?: Direction): void;

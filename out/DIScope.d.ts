import { Constructor } from "@flamework/core/out/utility";
/**
 * Register a class as a Service.
 *
 * @server
 * @metadata flamework:implements flamework:parameters injectable
 */
export declare const DIService: ((args_0?: object | undefined) => ((ctor: defined) => never) & {
    _flamework_Decorator: never;
}) & {
    _flamework_Parameters: [(object | undefined)?];
};
export declare class DIScope {
    private _idToObject;
    private _idToCtor;
    private _ctorToId;
    private _resolveList;
    registerCtor(ctor: Constructor): void;
    registerObject(obj: object): void;
    resolve<T>(ctor: Constructor<T>): T;
}

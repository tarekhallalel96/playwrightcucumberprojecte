class DataExchange{
    static data: any = {};

    static set(key: string, value: any){
        this.data[key] = value;
    }

    static get(key: string){
        return this.data[key];
    }
}
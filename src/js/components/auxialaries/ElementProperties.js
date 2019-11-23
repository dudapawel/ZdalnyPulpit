export class ElementProperties{
    constructor(type, value){
        this._type=type;
        this._value=value;
    }
    get type(){
        return this._type;
    }
    set type(type){
        this._type=type;
    }
    get value(){
        return this._value;
    }
    set value(value){
        this._value=value;
    }
}
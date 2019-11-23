export class BlockProperties{
    constructor(layout, focused, arrayOfElementsProp){
        this._layout=layout;
        this._focused=focused;
        this._arrayOfElementsProp=arrayOfElementsProp;
    }
    get layout(){
        return this._layout;
    }
    set layout(layout){
        this._layout=layout;
    }
    get focused(){
        return this._focused;
    }
    set focused(focused){
        this._focused=focused;
    }get arrayOfElementsProp(){
        return this._arrayOfElementsProp;
    }
    set arrayOfElementsProp(arrayOfElementsProp){
        this._arrayOfElementsProp=arrayOfElementsProp;
    }
}
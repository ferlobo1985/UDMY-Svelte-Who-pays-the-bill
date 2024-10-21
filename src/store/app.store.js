import { writable } from "svelte/store";

export const store = writable({
    state:true,
    inputName:'',
    names:[],
    error:'',
    showError:false,
    result:''
});

<script>
    import { onMount } from "svelte";
    export let store;

    const getRandomName = () =>{
        return $store.names[Math.floor(Math.random()* $store.names.length)]
    }

    const generateResult = () => {
        let rand = getRandomName();

        if($store.result !== ''){
            while(rand === $store.result){
                rand = getRandomName();
            }
        }

        $store.result = rand
    }

    onMount(()=>{
        generateResult()
    });

    const getNewResult = () => {
        generateResult();
    }

    const resetApp = () => {
        store.set({
            state:true,
            inputName:'',
            names:[],
            error:'',
            showError:false,
            result:''
        })
    }

</script>

<div class="container">
    <div class="result_container">
        <h1>The looser is:</h1>
        <div class="result_value">
            {$store.result}
        </div>

        <button class="action_button"
            on:click={resetApp}
        >
            Start over
        </button>
        <br/>
        <button class="action_button btn2"
            on:click={getNewResult}
        >
            Get a new name
        </button>
    </div>
</div>

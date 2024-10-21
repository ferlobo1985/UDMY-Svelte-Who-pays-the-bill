<script>
    export let store;


    const addNamesToList = () => {
        const userName = $store.inputName;
        if(validate(userName)){
            /// add to the names array
            $store.names.push(userName);
            $store.inputName = '';
            $store.showError = false;
        } else {
            // show error
            $store.showError = true;
        }
    }

    const validate = (value) => {
        $store.error = '';
        if(value === ''){
            $store.error = 'Sorry, no empty name';
            return false;
        }

        if($store.names.includes(value)){
            $store.error = 'Sorry, names must be unique';
            return false;
        }

        return true;
    }

    const removeName = (index) => {
        store.update((prev)=>{
            let names = [...$store.names];
            names.splice(index,1)

            return{
                ...prev,
                names
            }
        })
    }


</script>

<div class="container">

    <div class="logo">
        <h1>Who pays the bill</h1>
    </div>

    <div class="input_container">
        <input type="text" bind:value={$store.inputName}/>
        <button on:click={addNamesToList}>Add</button>
    </div>

    {#if $store.showError}
        <div class="error_label">
            {$store.error}
        </div>
    {/if}
     
    <div class="list_of_names">
        {#each $store.names as name,index(name) }
            <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
            <div on:click={()=> removeName(index)}>
                {name}
            </div>
        {/each}
    </div>

    <div
        class="action_button"
    >
        Who's the Looser ?
    </div>

</div>
<script>
    export let store;


</script>

<div class="container">
    <div class="result_container">
        <h1>The looser is:</h1>
        <div class="result_value">
            {$store.result}
        </div>

        <button class="action_button">
            Start over
        </button>
        <br/>
        <button class="action_button btn2">
            Get a new name
        </button>
    </div>
</div>

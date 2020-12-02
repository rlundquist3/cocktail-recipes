<script>
	import {onMount} from 'svelte';
	import {animation, recipe} from '../recipes/old-fashioned';

	onMount(async () => {
		const Zdog = await (import('zdog'));

		const illo = new Zdog.Illustration({
		  element: '.zdog-canvas',
		});

    const zoom = 4;
    let sceneWidth = 50;
    let sceneHeight = 50;
    let viewWidth = sceneWidth * zoom;
    let viewHeight = sceneHeight * zoom;
    let isSpinning = true;

    const animate = () => {
      illo.rotate.y += isSpinning ? 0.03 : 0;
      illo.updateRenderGraph();
      requestAnimationFrame(animate)
    }

    animate();
    const vessel = recipe.vessel(illo);
		animation(vessel);

    illo.updateRenderGraph();
	})

</script>

<style>
	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	.container {
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

  .zdog-canvas {
		background: #fdb;
	}
</style>

<svelte:head>
	<title>Recipe | {recipe.name}</title>
</svelte:head>

<div class='container'>
	<canvas class="zdog-canvas" width="240" height="240"></canvas>
	<div class='recipe'>
		<h3>{recipe.name}</h3>
		<ul>
			{#each recipe.ingredients as i}
				<li>{i.quantity} {i.unit ? i.unit : ''} {i.name}</li>
			{/each}
		</ul>
		<ol>
			{#each recipe.directions as step}
				<li>{step}</li>
			{/each}
		</ol>
	</div>
</div>

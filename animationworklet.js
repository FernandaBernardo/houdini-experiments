registerAnimator('sample-animator', class {
	animate(currentTime, effect) {
		effect.localTime = currentTime;
		let a;
        for(let i = 0; i < 10e7; i++) {
            a = i;
        }
	}
});
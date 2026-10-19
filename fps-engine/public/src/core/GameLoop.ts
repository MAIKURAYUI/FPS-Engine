// core/GameLoop.ts

export class GameLoop {

    private lastTime = 0;

    constructor(
        private updateCallback:
        (delta: number) => void
    ) {}

    start(): void {

        requestAnimationFrame(
            this.loop.bind(this)
        );
    }

    private loop(time: number): void {

        const delta =
            (time - this.lastTime) / 1000;

        this.lastTime = time;

        this.updateCallback(delta);

        requestAnimationFrame(
            this.loop.bind(this)
        );
    }
}

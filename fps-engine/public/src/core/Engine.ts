// core/Engine.ts

import { Renderer } from "../rendering/Renderer";
import { Input } from "../input/Input";

import { Physics } from "../physics/Physics";

import { EntityManager } from "../entity/EntityManager";

import { World } from "../world/World";

import { Time } from "./Time";
import { GameLoop } from "./GameLoop";

export class Engine {

    public renderer: Renderer;

    public input: Input;

    public physics: Physics;

    public entities: EntityManager;

    public world: World;

    public time: Time;

    private gameLoop: GameLoop;

    constructor() {

        this.renderer = new Renderer();

        this.input = new Input();

        this.physics = new Physics();

        this.entities = new EntityManager();

        this.world = new World(
            this.renderer.scene
        );

        this.time = new Time();

        this.gameLoop = new GameLoop(
            this.update.bind(this)
        );
    }

    public start(): void {

        this.world.initialize();

        this.gameLoop.start();
    }

    private update(delta: number): void {

        this.time.update(delta);

        this.input.update();

        this.entities.update(delta);

        this.renderer.render();
    }
}

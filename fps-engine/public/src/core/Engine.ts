// core/Engine.ts

import { Config } from "./Config";
import { Logger } from "./Logger";
import { Time } from "./Time";
import { EventBus } from "./EventBus";
import { GameLoop } from "./GameLoop";
import { Scene } from "./Scene";

import { Renderer } from "../rendering/Renderer";

import { Input } from "../input/Input";

import { Physics } from "../physics/Physics";

import { EntityManager } from "../entity/EntityManager";

import { World } from "../world/World";

import { Player } from "../player/Player";
import { PlayerController } from "../player/PlayerController";

import { WeaponManager } from "../weapon/WeaponManager";

export class Engine {

    //==================================================
    // Core
    //==================================================

    public readonly config: Config;
    public readonly logger: Logger;
    public readonly time: Time;
    public readonly events: EventBus;

    //==================================================
    // Scene
    //==================================================

    public readonly scene: Scene;

    //==================================================
    // Systems
    //==================================================

    public readonly renderer: Renderer;
    public readonly input: Input;
    public readonly physics: Physics;

    public readonly entities: EntityManager;

    public readonly world: World;

    public readonly weapons: WeaponManager;

    //==================================================
    // Gameplay
    //==================================================

    public readonly player: Player;

    public readonly playerController: PlayerController;

    //==================================================
    // Loop
    //==================================================

    private readonly gameLoop: GameLoop;

    //==================================================
    // Constructor
    //==================================================

    constructor() {

        //-----------------
        // Core
        //-----------------

        this.config = new Config();

        this.logger = new Logger();

        this.time = new Time();

        this.events = new EventBus();

        //-----------------
        // Scene
        //-----------------

        this.scene = new Scene();

        //-----------------
        // Rendering
        //-----------------

        this.renderer = new Renderer(
            this.scene
        );

        //-----------------
        // Input
        //-----------------

        this.input = new Input();

        //-----------------
        // Physics
        //-----------------

        this.physics = new Physics();

        //-----------------
        // Entity
        //-----------------

        this.entities = new EntityManager();

        //-----------------
        // World
        //-----------------

        this.world = new World(
            this.scene
        );

        //-----------------
        // Weapon
        //-----------------

        this.weapons = new WeaponManager();

        //-----------------
        // Player
        //-----------------

        this.player = new Player();

        this.playerController =
            new PlayerController(
                this.player,
                this.input
            );

        //-----------------
        // Register
        //-----------------

        this.entities.add(this.player);

        //-----------------
        // Game Loop
        //-----------------

        this.gameLoop =
            new GameLoop(
                this.update.bind(this)
            );
    }

    //==================================================
    // Start
    //==================================================

    public start(): void {

        this.initialize();

        this.gameLoop.start();

        this.logger.log(
            "Engine Started"
        );
    }

    //==================================================
    // Init

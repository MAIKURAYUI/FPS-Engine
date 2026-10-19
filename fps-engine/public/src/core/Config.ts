// core/Config.ts

export const Config = {

    engine: {
        name: "FPS Engine",
        version: "0.1.0"
    },

    display: {
        width: window.innerWidth,
        height: window.innerHeight,
        clearColor: 0x87ceeb
    },

    camera: {
        fov: 75,
        near: 0.1,
        far: 1000
    },

    player: {
        walkSpeed: 5,
        sprintSpeed: 8,
        crouchSpeed: 2.5,
        jumpForce: 8,
        height: 1.8
    },

    physics: {
        gravity: 9.81
    },

    weapon: {
        maxWeapons: 3
    },

    world: {
        chunkSize: 16,
        maxEntities: 1000
    },

    debug: {
        showFPS: true,
        showColliders: false
    }

} as const;

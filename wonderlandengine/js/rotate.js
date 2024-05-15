import {Component, Property} from '@wonderlandengine/api';

/**
 * rotate
 */
export class Rotate extends Component {
    static TypeName = 'rotate';
    /* Properties that are configurable in the editor */
    static Properties = {
        cubeMeshObject: Property.object(),
        speed: Property.float(1),
    };

    start() {
        console.log('start() with param', this.param);
    }

    update(dt) {
        /* Called every frame. */
        this.cubeMeshObject.rotateAxisAngleDegObject([0, 1, 0], this.speed * dt);
    }
}

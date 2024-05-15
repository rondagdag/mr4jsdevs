import {Component, Property} from '@wonderlandengine/api';

/**
 * rubix
 */
export class Rubix extends Component {
    static TypeName = 'rubix';
    /* Properties that are configurable in the editor */
    static Properties = {
        param: Property.float(1.0)
    };

    start() {
        console.log('start() with param', this.param);
    }

    update(dt) {
        /* Called every frame. */
    }
}

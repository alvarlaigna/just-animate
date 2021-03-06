import { head, isDefined, tail } from '../../../common';
import { Keyframe } from '../waapi';

/**
 * If a property is missing at the start or end keyframe, the first or last instance of it is moved to the end.
 */
export function fixPartialKeyframes(keyframes: Keyframe[]): void {
    // don't attempt to fill animation if less than 1 keyframes
    if (keyframes.length < 1) {
        return;
    }

    const first = head(keyframes) !;
    const last = tail(keyframes) !;

    // fill initial keyframe with missing props
    const len = keyframes.length;
    for (let i = 1; i < len; i++) {
        const keyframe = keyframes[i];
        for (let prop in keyframe) {
            if (prop !== 'offset' && !isDefined(first[prop])) {
                first[prop] = keyframe[prop];
            }
        }
    }

    // fill end keyframe with missing props
    for (let i = len - 2; i > -1; i--) {
        const keyframe = keyframes[i];
        for (let prop in keyframe) {
            if (prop !== 'offset' && !isDefined(last[prop])) {
                last[prop] = keyframe[prop];
            }
        }
    }
}